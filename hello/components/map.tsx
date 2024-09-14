'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '90vh',
    borderRadius: '15px 0px 0px 15px',
};


const defaultMapCenter = {
    lat: 42.35887145996094,
    lng: -71.0934829711914
}

//Default zoom level, can be adjusted
const defaultMapZoom = 16

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

const MarkerComponent = ({pos}) => {
    return (
            <Marker
          position={pos}
          icon={{
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          }}
        />
    )
}
const MapComponent = ({position}) => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            ><MarkerComponent pos = {position}/>
            </GoogleMap>
        </div>
    )
};
export { MapComponent, MarkerComponent };