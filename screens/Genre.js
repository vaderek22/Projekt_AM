import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Genre = () => {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();
    const [genre, setGenre] = useState('');
    const handleGenre = genreId => {
    setGenre(genreId);
};

useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=8339d23b0d359649d6e79b1aad386819&with_genres=${genre}&language=pl`)
    .then(response => setMovies(response.data.results))
    .catch(error => console.log(error));
    }, [genre]);

return (
<View style={styles.container}>
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <Button title="Akcja" color="#555" onPress={() => handleGenre(28)}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Komedia" color="#555" onPress={() => handleGenre(35)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Kryminał" color="#555" onPress={() => handleGenre(80)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Przygoda" color="#555" onPress={() => handleGenre(12)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Animacja" color="#555" onPress={() => handleGenre(16)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Science Fiction" color="#555" onPress={() => handleGenre(878)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Dokumentalny" color="#555" onPress={() => handleGenre(99)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Historyczny" color="#555" onPress={() => handleGenre(36)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Western" color="#555" onPress={() => handleGenre(37)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Horror" color="#555" onPress={() => handleGenre(27)} />
        </View>
    </View>
    {movies && (
        <ScrollView>
        {movies.map(movie => (
            <View key={movie.id} style={styles.movieContainer}>
            <TouchableOpacity key={movie.id} onPress={() => navigation.navigate('MovieDetails', { movie: movie })}>
            <Image
            style={styles.moviePoster}
            source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
            />
            </TouchableOpacity>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            </View>
        ))}
        </ScrollView>
    )}
    </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
movieContainer: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
},
buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 5,
    },
buttonContainer: {
   width: '20%',
   marginBottom: 5,
    },
moviePoster: {
    width: 150,
    height: 250,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
},
    movieTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
    }
});

export default Genre;