import { useRef, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"



interface IProps {}

export default function Map({}: IProps) {
    const mapRef = useRef<ReactMapGL | null>(null)
    const [viewport, setViewport] = useState({
        latitude: 52.3496,
        longitute: -1.581130,
        zoom: 10
      });

      useEffect(() => {
        if (mapRef.current) {
          // Perform operations with mapRef.current if needed
        }
      }, [mapRef]);
    
      const handleViewportChange = (newViewState: any) => {
        setViewport(newViewState);
      };
    

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
          </ReactMapGL>
        </div>
    );
  }