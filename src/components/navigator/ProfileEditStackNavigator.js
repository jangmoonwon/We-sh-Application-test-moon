import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileEdit from "../screen/ProfileEdit";

const Stack = createStackNavigator();

export default function ProfileEditStackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      </Stack.Navigator>
    );
  }