import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const DragMap = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicnNwaWxsYW5lMSIsImEiOiJjbHl2cnkxNGswdjZpMmtzMHoyczU2dW92In0.G0zZJZHETvbxsQy9pisMrg';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [52.35, -1.58,],
      zoom: 2
    });

    const canvas = mapRef.current.getCanvasContainer();

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }
      ]
    };

    function onMove(e) {
      const coords = e.lngLat;

      canvas.style.cursor = 'grabbing';

      geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
      mapRef.current.getSource('point').setData(geojson);
    }

    function onUp(e) {
      const coords = e.lngLat;

      setCoordinates([`Longitude: ${coords.lng}`, `Latitude: ${coords.lat}`]);
      canvas.style.cursor = '';
      mapRef.current.off('mousemove', onMove);
      mapRef.current.off('touchmove', onMove);
    }

    mapRef.current.on('load', () => {
      mapRef.current.addSource('point', {
        type: 'geojson',
        data: geojson
      });

      mapRef.current.addLayer({
        id: 'point',
        type: 'circle',
        source: 'point',
        paint: {
          'circle-radius': 10,
          'circle-color': '#F84C4C'
        }
      });

      mapRef.current.on('mouseenter', 'point', () => {
        mapRef.current.setPaintProperty('point', 'circle-color', '#3bb2d0');
        canvas.style.cursor = 'move';
      });

      mapRef.current.on('mouseleave', 'point', () => {
        mapRef.current.setPaintProperty('point', 'circle-color', '#3887be');
        canvas.style.cursor = '';
      });

      mapRef.current.on('mousedown', 'point', (e) => {
        e.preventDefault();
        canvas.style.cursor = 'grab';
        mapRef.current.on('mousemove', onMove);
        mapRef.current.once('mouseup', onUp);
      });

      mapRef.current.on('touchstart', 'point', (e) => {
        if (e.points.length !== 1) return;
        e.preventDefault();
        mapRef.current.on('touchmove', onMove);
        mapRef.current.once('touchend', onUp);
      });
    });
  }, []);

  return (
    <>
      <div ref={mapContainerRef} id="map" style={{ height: '100%' }}></div>
      <div
        style={{
          width: "50vw", 
          height: "100vh",
          display: coordinates ? 'block' : 'none'
        }}
      >
        {coordinates &&
          coordinates.map((coord) => (
            <p style={{ marginBottom: 0 }}>{coord}</p>
          ))}
      </div>
    </>
  );
};

export default DragMap;