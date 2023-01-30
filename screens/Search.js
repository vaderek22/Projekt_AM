import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, TextInput,ScrollView,Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {API_URLS} from '../control/consts';
import {API_IMG} from '../control/consts';
const Search = () => {
   const navigation = useNavigation();
   const [success,setSuccess] = useState(false);
   const [state,setState] = useState({
   s: "",
   results:[],
   });

   const search = () => {
       axios(API_URLS + "&query="+ state.s).then(({ data }) => {
           let results = data.results;
           setState(prevState => {
               return{...prevState, results: results }
           })
           setSuccess(true);
       })
       }
  return (
         <View style={styles.center} >
         <TextInput
            placeholder="Szukaj frazy..."
            placeholderTextColor="black"
            style={styles.TextInput}
            onChangeText={text => setState(prevState => {
            return {...prevState, s:text}
            })}
            onSubmitEditing={search}
            value={state.s}
         />
        <ScrollView style={styles.Scroll}  >
                    {success && state.results.map((result, index) =>(
                        <View key={result.id} style={index % 2 === 0 ? styles.alternateBackground : styles.background}>
                            <Text style={{color: 'black', fontSize: 15, fontFamily:'serif' }}>{result.title}</Text>
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
}

const styles = StyleSheet.create({
  center: {
    width: '100%',
  },
  tinyLogo: {
      width: 120,
      height: 160,
      borderRadius: 5,
    },
  TextInput: {
      backgroundColor: "#d0e7f7",
      width: "100%",
      borderWidth: 2,
      padding: 10,
      textAlign: "center",
      borderColor: '#49aaee',
    },
    Scroll:{
        width:'100%',
    },
    alternateBackground: {
        backgroundColor: '#ccc',
        alignItems: "center",
        width: '100%',
        padding: 5,
    },
    background: {
        alignItems: 'center',
        width: '100%',
        padding: 5,
    },
});

export default Search;