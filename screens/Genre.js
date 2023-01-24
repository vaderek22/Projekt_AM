import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import axios from 'axios';

const Genre = () => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState('');
    const handleGenre = genreId => {
    setGenre(genreId);
};

useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=8339d23b0d359649d6e79b1aad386819&with_genres=${genre}`)
    .then(response => setMovies(response.data.results))
    .catch(error => console.log(error));
    }, [genre]);

return (
<View>
    <Button title="Akcja" onPress={() => handleGenre(28)}/>
    <Button title="Komedia" onPress={() => handleGenre(35)} />
    <Button title="Kryminalny" onPress={() => handleGenre(80)} />
    <Button title="Przygodowy" onPress={() => handleGenre(12)} />
    <Button title="Animowany" onPress={() => handleGenre(16)} />
    <Button title="Science Fiction" onPress={() => handleGenre(878)} />
    <Button title="Dokumentalny" onPress={() => handleGenre(99)} />
    <Button title="Historyczny" onPress={() => handleGenre(36)} />
    <Button title="Western" onPress={() => handleGenre(37)} />
    <Button title="Horror" onPress={() => handleGenre(27)} />
    {movies && (
        <ScrollView>
        {movies.map(movie => (
            <View key={movie.id} style={styles.movieContainer}>
            <Image
            style={styles.moviePoster}
            source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
            />
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