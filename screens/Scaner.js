import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const Scaner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const id = data.split("/").pop();
    navigation.navigate('Result', { id });
  };

  const handleScanAgain = () => {
    setScanned(false);
  }

  if (hasPermission === null) {
    return <Text>Ładowanie</Text>;
  }
  if (hasPermission === false) {
    return <Text>Brak dostępu do kamery</Text>;
  }
  if (scanned) {
    return (
      <View style={styles.container}>
        <Button title={'Skanuj ponownie'} color="#555" onPress={handleScanAgain}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
      <Text>Sprawdź datę produkcji filmu</Text>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanner: {
    width: '50%',
    height: '50%',
  },
});

export default Scaner;
