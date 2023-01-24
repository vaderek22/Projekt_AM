import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, TextInput,ScrollView,Image} from "react-native";

const Search = () => {
   const apiurl="https://api.themoviedb.org/3/search/movie?api_key=8339d23b0d359649d6e79b1aad386819";
   const API_IMG = "https://image.tmdb.org/t/p/w500";
   const [success,setSuccess] = useState(false);
   const [state,setState] = useState({
   s: "",
   results:[],
   });

   const search = () => {
       axios(apiurl + "&query="+ state.s).then(({ data }) => {
           let results = data.results;
           console.log(data);
           setState(prevState => {
               return{...prevState, results: results }
           })
           setSuccess(true);
       })
       }
  return (
         <View style={styles.center} >
         <TextInput
            style={styles.TextInput}
            onChangeText={text => setState(prevState => {
            return {...prevState, s:text}
            })}
            onSubmitEditing={search}
            value={state.s}
         />
        <ScrollView style={styles.Scroll}  >
                    {success && state.results.map(result =>(
                        <View key={result.id}>
                            <Text style={{color: 'black', fontSize: 15, fontFamily:'serif' }}>{result.title}</Text>
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
}

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
  tinyLogo: {
      width: 120,
      height: 160,
      borderRadius: 5,
    },
  TextInput: {
      backgroundColor: "grey",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      textAlign: "center",
    },
    Scroll:{
    marginLeft:10,
    },
});

export default Search;
