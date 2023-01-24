import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,ScrollView,Image } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=8339d23b0d359649d6e79b1aad386819"
export default function Top(){
    const [movies,setMovies]=useState([]);
    const API_IMG = "https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data =>{
            console.log(data);
            return setMovies(data.results);
        })
     }, [])
  return (
    <View style={styles.center}>
        <ScrollView>
            {movies.slice(0,10).map(result =>(
                <View key={result.id}>
                    <Text style={{color: 'black', fontSize: 22, fontFamily:'serif' }}>{result.title}{'  '}
                    <IconAntDesign
                    name="star"
                    size={20}
                    color={'#0a0a0a'}
                    />{result.vote_average}</Text>
                    <Image source={{
                    uri: API_IMG + result.poster_path,
                    }}
                    style={styles.tinyLogo}
                    />
                </View>
                 ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    paddingTop: 0,
    paddingLeft: 5,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  tinyLogo: {
        width: 115,
        height: 150,
        borderRadius:5,
      },
});
