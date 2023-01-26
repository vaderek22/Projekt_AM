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
Modal,
Alert
} from "react-native";

export default function Login({navigation}) {
const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [modalVisible, setModalVisible] = useState(false);
const [username, setUsername] = useState("");
const [userpassword, setUserpassword] = useState("");
const handleSubmit = () => {
    if (username && userpassword) {
        setModalVisible(false);
    } else {
        Alert.alert("Podaj wszystkie dane!");
    }
};
const handleLogin = () => {
    if (!login || !password) {
        Alert.alert("Podaj wszystkie dane!");
        return;
    }
    if (login === username && password === userpassword) {
        navigation.navigate("Home")
    } else {
        Alert.alert("Podane dane są błędne");
    }
};

return (
<View style={styles.container}>
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Formularz rejestracyjny</Text>
                <TextInput
                    style={styles.modalTextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setUsername(username)}
                />
                <TextInput
                    style={styles.modalTextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(userpassword) => setUserpassword(userpassword)}
                />
                <View style={styles.modalBtnContainer}>
                    <TouchableOpacity style={styles.modalBtn} onPress={handleSubmit}>
                        <Text style={styles.modalBtnText}>Zatwierdź</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalBtn} onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalBtnText}>Anuluj</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
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
                onPress={handleLogin}
                style={styles.btn}>
            <Text>Login</Text>
            </Pressable>
            <TouchableOpacity style={styles.registerBtn} onPress={() => setModalVisible(true)}>
            <Text>Zarejestruj</Text>
            </TouchableOpacity>
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
      modalContainer: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalView: {
          width: "80%",
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 20,
          alignItems: "center",
      },
      modalText: {
          fontSize: 20,
          marginBottom: 20,
      },
      modalTextInput: {
          width: "100%",
          height: 50,
          padding: 10,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
      },
      modalBtnContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
      },
      modalBtn: {
          width: "48%",
          padding: 12,
          borderRadius: 10,
          backgroundColor: "#49aaee",
          alignItems: "center",
      },
      modalBtnText: {
          color: "#fff",
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
      registerBtn: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 30,
            backgroundColor: '#49aaee',
      },
});
