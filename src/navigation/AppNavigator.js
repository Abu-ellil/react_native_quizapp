// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Score from "../screens/Score";
import Questions from "../screens/Questions";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"white"}}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
