import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumScreen from "../screen/Album";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={AlbumScreen} />
    </Stack.Navigator>
  );
}