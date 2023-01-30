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
    <ScrollView horizontal={true} style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <Button title="Akcja" color="#49aaee" onPress={() => handleGenre(28)}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Komedia" color="#49aaee" onPress={() => handleGenre(35)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Kryminał" color="#49aaee" onPress={() => handleGenre(80)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Przygoda" color="#49aaee" onPress={() => handleGenre(12)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Dokumentalny" color="#49aaee" onPress={() => handleGenre(99)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Historyczny" color="#49aaee" onPress={() => handleGenre(36)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Western" color="#49aaee" onPress={() => handleGenre(37)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Animacja" color="#49aaee" onPress={() => handleGenre(16)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Science Fiction" color="#49aaee" onPress={() => handleGenre(878)} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Horror" color="#49aaee" onPress={() => handleGenre(27)} />
        </View>
    </ScrollView>
    {movies && (
        <ScrollView style={styles.moviesScroll}>
        {movies.map((movie, index) => (
            <View key={movie.id} style={index%2 === 0 ? styles.alternateMovieContainer:styles.movieContainer}>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 42,
        backgroundColor: '#d0e7f7',
    },
    buttonContainer: {
        padding: 2,
        height: 40,
    },
    movieContainer: {
        alignItems: 'center',
        width: '100%',
    },
    moviesScroll: {
        width: '100%',
    },
    moviePoster: {
        width: 150,
        height: 225,
        borderRadius: 10,
        marginTop: 5,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    alternateMovieContainer: {
        alignItems: 'center',
        backgroundColor: '#ccc',
        width: '100%',
    },
});

export default Genre;
