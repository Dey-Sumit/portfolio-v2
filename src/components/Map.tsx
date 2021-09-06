import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 22.572645,
    longitude: 88.363892,
    zoom: 10,
  });

  const [popupInfo, setPopupInfo] = useState(false);

  return (
    <ReactMapGL
      // TODO env file
      mapboxApiAccessToken="pk.eyJ1IjoiYmFja2JlbmNoY29kZXIiLCJhIjoiY2tzemxza2N0MXg1czJ3czF1cjZ5ZnM5YiJ9.b2aNQv5l7o2cBrL_NLbWSg"
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      //   mapStyle="mapbox://styles/backbenchcoder/ckszmptsl6w8g17qnjbv0092d"
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {/* <Pins data={CITIES} onClick={setPopupInfo} /> */}
      <Marker latitude={22.572645} longitude={88.363892}>
        <FaMapMarkerAlt
          className="w-6 h-6 text-yellow-400 cursor-pointer"
          onClick={() => setPopupInfo(true)}
        />
      </Marker>
      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top-right"
          latitude={22.572645}
          longitude={88.363892}
          closeOnClick={false}
          onClose={() => setPopupInfo(false)}
          // className="bg-red-500"
        >
          <div className="w-48 bg-gray-900 border rounded-lg">
            I debug from here but I can change the marker if you want
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
