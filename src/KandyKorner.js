import React from 'react';
import { LocationList } from './components/location/LocationsList';
import { LocationProvider } from './components/location/LocationProvider';
import "./KandyKorner.css"

export const KandyKorner = () => {
return(
    <>
        <LocationProvider>
        <LocationList />
        </LocationProvider>
    </>
)
}