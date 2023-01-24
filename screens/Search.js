import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, TextInput,ScrollView,Image} from "react-native";

const Search = () => {
   const apiurl="https://api.themoviedb.org/3/search/movie?api_key=8339d23b0d359649d6e79b1aad386819";
   const API_IMG = "https://image.tmdb.org/t/p/w500";
   const [success,setSuccess] = useState(false);
   const [state,setState] = useState({
   s: "Podaj film...",
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
         <View>
         <TextInput
            onChangeText={text => setState(prevState => {
            return {...prevState, s:text}
            })}
            onSubmitEditing={search}
            value={state.s}
         />
        <ScrollView>
                    {success && state.results.slice(0,3).map(result =>(
                        <View key={result.id}>
                            <Text>{result.title}</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  tinyLogo: {
      width: 100,
      height: 140,
    },
});

export default Search;
