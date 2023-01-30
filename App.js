import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Genre from "./screens/Genre";
import Top from "./screens/Top";
import Cinema from "./screens/Cinema";
import MovieDetails from "./screens/MovieDetails";
import Scaner from "./screens/Scaner";
import Result from "./screens/Result";
import React from "react";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import IconAntDesign from 'react-native-vector-icons/AntDesign';

function DrawerRoutes() {
  return (
        <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Ekran Główny" component={Home} options={{
                title:'Home',
                drawerIcon:({focused, size}) => (
                <IconAntDesign
                    name="home"
                    size={size}
                    color={focused ? '#8d8e91' : '#0a0a0a'}
                />
                ),
                }} />
                <Drawer.Screen name="Search" component={Search} options={{
                    title:'Wyszukaj',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="search1"
                        size={size}
                        color={focused ? '#8d8e91' : '#0a0a0a'}
                    />
                ),
                }}
                />
                <Drawer.Screen name="Genre" component={Genre} options={{
                                    title:'Gatunki',
                                    drawerIcon:({focused, size}) => (
                                    <IconAntDesign
                                        name="tags"
                                        size={size}
                                        color={focused ? '#8d8e91' : '#0a0a0a'}
                                    />
                                ),
                                }}
                                />
                <Drawer.Screen name="Ranking" component={Top} options={{
                    title:'Top',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="star"
                        size={size}
                        color={focused ? '#8d8e91' : '#0a0a0a'}
                    />
                    ),
                }} />
                <Drawer.Screen name="Scaner" component={Scaner} options={{
                    title:'Skaner',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="camera"
                        size={size}
                        color={focused ? '#8d8e91' : '#0a0a0a'}
                    />
                    ),
                }}
                />
                <Drawer.Screen name="Cinema" component={Cinema} options={{
                                    title:'Kina w Kielcach',
                                    drawerIcon:({focused, size}) => (
                                    <IconAntDesign
                                        name="find"
                                        size={size}
                                        color={focused ? '#8d8e91' : '#0a0a0a'}
                                    />
                                    ),
                                }}
                                />
         </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#49aaee" />
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={DrawerRoutes} options={{headerShown: false}}/>
                <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: false}}/>
                <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
         </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
