import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const Result = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [movieDate, setMovieDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = route.params.id.split("/").pop();
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8339d23b0d359649d6e79b1aad386819&language=pl`);
        setMovieDate(data.release_date);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 19, fontFamily:'serif' }}>Data premiery: {movieDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Result;
