import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,ScrollView,Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=8339d23b0d359649d6e79b1aad386819&language=pl"
export default function Top(){
    const [movies,setMovies]=useState([]);
    const navigation = useNavigation();
    const API_IMG = "https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data =>{
            return setMovies(data.results);
        })
     }, [])
  return (
    <View style={styles.center}>
        <ScrollView>
            {movies.slice(0,10).map((result,index) =>(
                <View key={result.id}>
                    <Text style={{color: 'black', fontSize: 19, fontFamily:'serif' }}>{index+1}. {result.title}{'  '}
                    <IconAntDesign
                    name="star"
                    size={20}
                    color={'#0a0a0a'}
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
  },
  tinyLogo: {
        width: 130,
        height: 200,
        borderRadius:5,
        alignSelf:'center'
      },
});