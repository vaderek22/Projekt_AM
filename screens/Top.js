import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,ScrollView } from "react-native";
import MovieBox from './MovieBox';
const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=8339d23b0d359649d6e79b1aad386819"
export default function Top(){
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data =>{
            console.log(data);
            return setMovies(data.results);
        })
     }, [])
  return (

    movies.slice(0,4).map((movieReq)=><MovieBox key ={movieReq.id} {...movieReq}/>)

  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
