import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Top from "./screens/Top";
import Fav from "./screens/Fav";
import Review from "./screens/Review";
import User from "./screens/User";
import Help from "./screens/Help";
import Cinema from "./screens/Cinema";
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
                <Drawer.Screen name="Wyszukaj" component={Search} options={{
                    title:'Search',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="search1"
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
                <Drawer.Screen name="Ulubione" component={Fav} options={{
                    title:'Moja lista',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="heart"
                        size={size}
                        color={focused ? '#8d8e91' : '#0a0a0a'}
                    />
                    ),
                }}
                />
                <Drawer.Screen name="Recenzje" component={Review} options={{
                    title:'Recenzje',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="eye"
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
                                        name="eye"
                                        size={size}
                                        color={focused ? '#8d8e91' : '#0a0a0a'}
                                    />
                                    ),
                                }}
                                />
                <Drawer.Screen name="User" component={User} options={{
                    title:'Panel Użytkownika',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="user"
                        size={size}
                        color={focused ? '#8d8e91' : '#0a0a0a'}
                    />
                    ),
                }}
                />
                <Drawer.Screen name="Pomoc" component={Help} options={{
                    title:'Pomoc',
                    drawerIcon:({focused, size}) => (
                    <IconAntDesign
                        name="question"
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
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={DrawerRoutes} options={{headerShown: false}}/>
         </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
