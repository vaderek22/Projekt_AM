import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,ScrollView,Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {API_URL} from '../control/consts';
import {API_IMG} from '../control/consts';
export default function Top(){
    const [movies,setMovies]=useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data =>{
            return setMovies(data.results);
        })
     }, [])
  return (
    <View style={styles.center}>
        <ScrollView style={styles.topScroll}>
            {movies.slice(0,10).map((result,index) =>(
                <View key={result.id} style={index % 2 === 0 ? styles.alternateBackground : null}>
                    <Text style={styles.title}>{index+1}. {result.title}{'  '}
                    <IconAntDesign
                    name="star"
                    size={20}
                    color={'#49aaee'}
                    />{result.vote_average}</Text>
                    <TouchableOpacity key={result.id} onPress={() => navigation.navigate('MovieDetails', { movie: result })}>
                    <Image source={{
                    uri: API_IMG + result.poster_path,
                    }}
                    style={styles.tinyLogo}
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    tinyLogo: {
        width: 130,
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    alternateBackground: {
        backgroundColor: '#ccc',
    },
    topScroll: {
        width: '100%',
    },
    title: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'serif',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
    },
});