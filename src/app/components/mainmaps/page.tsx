import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -6.185486,
    lng: 106.869143
};

export default function MainPageMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBza2M7UpFulG3Q2KlE5ZWZb4KmIaM40E4"
    })
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            clickableIcons={true}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker position={center}></Marker>
        </GoogleMap>

    ) : <></>
}