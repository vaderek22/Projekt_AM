import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text,Image,ScrollView } from "react-native";
const API_IMG = "https://image.tmdb.org/t/p/w500";

import { useRoute } from "@react-navigation/native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Top from './Top';
const MovieBox = ({title, poster_path,vote_average,release_date,overview})=>{

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 140,
  },
  center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
});
    return(
    <View style={styles.center}>
    <Text style={{color: 'black', fontSize: 25 }}>
        {title}<IconAntDesign
                                   name="star"
                                   size={20}
                                   color={'#0a0a0a'}
                               />
        {vote_average}
    </Text>
    <Image source={{
            uri: API_IMG + poster_path,
            }}
            style={styles.tinyLogo}
            />
    </View>
 )
}
export default MovieBox;