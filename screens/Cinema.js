import React,{useState,useEffect} from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Cinema() {
  const [mapRegion,setMapRegion] = useState({
  latitude: 50.87894787774452,
  longitude: 20.640055698318204,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={mapRegion}>
        <Marker coordinate={{
                latitude: 50.8778934204416,
                longitude: 20.65214629616904,
      }} title='Helios' description='Świętokrzyska 20b, 25-005 Kielce'>
        </Marker>
        <Marker coordinate={{
                        latitude:50.875787844438136,
                        longitude:20.635209082079406,
              }} title='Multikino' description='Warszawska 26, 25-312 Kielce'>
        </Marker>
        <Marker coordinate={{
                        latitude: 50.871175751548925,
                        longitude: 20.626349900121188,
              }} title='Kino Moskwa' description='Księdza Stanisława Staszica 5, 25-008 Kielce'>
        </Marker>
        <Marker coordinate={{
                        latitude: 50.86416087695226,
                        longitude: 20.626864884255617,
              }} title='Kino Fenomen' description='Księdza Piotra Ściegiennego 2, 25-033 Kielce'>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
