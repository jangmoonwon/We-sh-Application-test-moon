import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalTest from "../screen/ModalTest";

const Stack = createStackNavigator();

export default function ModalTestStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Test" component={ModalTest} />
    </Stack.Navigator>
  );
}
