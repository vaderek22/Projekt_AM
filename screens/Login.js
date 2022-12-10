import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Home from './Home'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
export default function Login({navigation}) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

     return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./log2.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          value={login}
          placeholderTextColor="#003f5c"
          onChangeText={(login) => setLogin(login)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Pressable
        title="Login"
        onPress={() => navigation.navigate("Home")}
        style={styles.btn}
       >
        <Text>Login</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },
  mainView:{
    marginTop:40,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inputView: {
    backgroundColor: "#fa5c66",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#49aaee',
  },
});