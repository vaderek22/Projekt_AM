import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import axios from "axios";
import {API_URLD} from '../control/consts';
import {API_IMG} from '../control/consts';
const Home = () => {
const [movies, setMovies] = useState([]);
const navigation = useNavigation();
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(API_URLD);
            setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
}, []);
  return (
    <View style={styles.center}>
    <Text style={styles.Text}>Witaj! Sprawdź nasze propozycje na dziś.</Text>
     <ScrollView horizontal={true}>
          {movies.map((movie, index) => (
            <View key={index} style={styles.movieContainer}>
              <TouchableOpacity key={movie.id} onPress={() => navigation.navigate('MovieDetails', { movie: movie })}>
              <Image
                source={{
                  uri: API_IMG + movie.poster_path,
                }}
                style={styles.moviePoster}
              />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
  },
  Text: {
    color: '#49aaee',
    fontSize: 16,
    fontFamily:'serif',
    paddingTop:30,
    paddingBottom:30,
    fontWeight: 'bold',
    textShadowColor: '#d0e7f7',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  movieContainer: {
       marginRight: 10,
  },
  moviePoster: {
       width: 250,
       height: 400,
  },
});

export default Home;
