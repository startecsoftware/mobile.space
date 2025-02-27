import { PropsWithChildren, useEffect, useState } from "react";
import * as Location from 'expo-location'
import LocationContext from "../context/locationContext";

export function LocationProvider({ children }: PropsWithChildren) {

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync()
        
            if (status !== 'granted') {
                setErrorMsg('Permissão de localização negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location);
        }

        getCurrentLocation()
    }, [])

    const ProviderValue = {
        location
    }

    return (
        <LocationContext.Provider value={ProviderValue}>
            {children}
        </LocationContext.Provider>
    )
}