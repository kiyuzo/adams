'use client';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

export default function ReadOnlyMap({ center }: { center: [number, number] }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAH6Ea8-iD481XUxKu4sBrUxY7L6BOicYI',
    libraries: ['visualization'],
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
  };

  return (
    <div style={{ width: '100%', height: '100%', borderRadius: '12px', minHeight: 120 }}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: center[0], lng: center[1] }}
          zoom={13}
          options={{
            disableDefaultUI: true,
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            keyboardShortcuts: false,
          }}
        >
          <MarkerF position={{ lat: center[0], lng: center[1] }} />
        </GoogleMap>
      )}
    </div>
  );
}