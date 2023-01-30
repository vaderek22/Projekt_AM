import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function MovieDetails({ route }) {
    const [genres, setGenres] = useState([]);
    const [director, setDirector] = useState({});
    const [actors, setActors] = useState([]);
    const { movie } = route.params;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8339d23b0d359649d6e79b1aad386819&language=pl`)
            .then((res) => res.data)
            .then(data => {
                setGenres(data.genres);
            });
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=8339d23b0d359649d6e79b1aad386819`)
            .then(res => {
                const foundDirector = res.data.crew.find(member => member.job === "Director");
                if(foundDirector) setDirector(foundDirector);
            })
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=8339d23b0d359649d6e79b1aad386819`)
            .then(res => {
                setActors(res.data.cast.slice(0, 10));
            })
            .catch(error => console.log(error));
    }, []);

    const genre = genres.filter(g => movie.genre_ids.includes(g.id));
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                }}
                style={styles.poster}
            />
            <ScrollView>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{movie.title}<Text style={styles.original_title}>({movie.original_title})</Text></Text>
                    <Text style={styles.rate}>Ocena:
                    <IconAntDesign
                            name="star"
                            size={15}
                            color={'#49aaee'}
                        />{movie.vote_average}</Text>
                    <Text style={styles.rate}>Data wydania: {movie.release_date}</Text>
                    {genre.length > 0 && <Text style={styles.rate}>Gatunek: {genre.slice(0,4).map(g => g.name).join(', ')}</Text>}
                           <Text style={styles.rate}>Reżyser: {director.name}</Text>
                           <Text style={styles.rate}>Popularność: {movie.popularity}</Text>
                           <Text style={styles.rate}>Obsada:</Text>
                           <ScrollView horizontal={true}>
                               {actors.map(actor => (
                                   <View key={actor.id} style={styles.actorContainer}>
                                   <Image
                                       source={{
                                       uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                       }}
                                       style={styles.actorImage}
                                   />
                                   <Text style={styles.actorName}>{actor.name}</Text>
                                   </View>
                               ))}
                           </ScrollView>
                           <Text style={styles.description}>{movie.overview}</Text>
                           </View>
                           </ScrollView>
                           </View>
        );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: '100%',
        height: '30%',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    original_title: {
        fontSize: 18,
        marginBottom: 10,
    },
    rate: {
            fontSize: 14,
            marginBottom:5,
    },
    description: {
        marginTop:20,
        fontSize: 16,
    },
    actorContainer: {
      marginRight: 10,
      alignItems: 'center',
    },
    actorImage: {
      width: 100,
      height: 150,
      borderRadius: 4,
    },
    actorName: {
      marginTop: 5,
      fontSize: 12,
    },
});
