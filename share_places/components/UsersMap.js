import React from 'react'
import { View, StyleSheet, } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const usersMap = props => {
    let userLocationMarker = null;

    if(props.userLocation){
        userLocationMarker = <MapView.Marker coordinate = {props.userLocation} />
    }
    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={props.userLocation}
            >
                {userLocationMarker}
            </MapView>
        </View>

    );
}

// getInitialState () {
//     return {
//       region: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }),
//     };


const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
}
)

export default usersMap;