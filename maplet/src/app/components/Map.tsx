import { useRef, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"
import * as parkData from "../../data/data.json";



interface IProps {}

export default function Map({}: IProps) {
    const mapRef = useRef<ReactMapGL | null>(null)
    const [viewport, setViewport] = useState({
        latitude: 52.35,
        longitude: -1.58,
        zoom: 10
      });
    const [selectedPark, setSelectedPark] = useState(null);

    
      const handleViewportChange = (newViewState: any) => {
        setViewport(newViewState);
      };

      useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedPark(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);
    

    return (
        <div className="map-viewport" style={{width: "50vw", height: "100vh"}}>
          <ReactMapGL
            ref={mapRef} 
            {...viewport} 
            width="100vw"
            height="100vh"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            onMove={evt => handleViewportChange(evt.viewport)}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
          >
        {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
                park
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
          </ReactMapGL>
        </div>
    );
  }