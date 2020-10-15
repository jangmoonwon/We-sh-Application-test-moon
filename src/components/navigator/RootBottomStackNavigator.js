import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MainScreen from "../screen/Main";
import AlbumScreen from "../screen/Album";
import ModalTest from "../screen/ModalTest";
import ProfileEdit from "../screen/ProfileEdit";

const Tab = createBottomTabNavigator();

export default function RootBottomStackNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#e85433",
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            tabBarLabel: "Main",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Album"
          component={AlbumScreen}
          options={{
            tabBarLabel: "Album",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-albums" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Test"
          component={ModalTest}
          options={{
            tabBarLabel: "Test",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{
            tabBarLabel: "ProfileEdit",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
