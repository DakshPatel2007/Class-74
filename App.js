import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "react-native-gesture-handler"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './screen/Home';
import ISSLocationScreen from './screen/ISSLocation';
import MeteorScreen from './screen/Meteorscreen';

const Stack = createStackNavigator()
export default function App() { 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{
      headerShown: false
    }}>
     <Stack.Screen name = "Home" component = {HomeScreen} ></Stack.Screen> 
     <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen} ></Stack.Screen>
     <Stack.Screen name = "Meteorscreen" component = {MeteorScreen} ></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
