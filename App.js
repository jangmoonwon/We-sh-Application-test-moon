import * as React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/components/HomeScreen";
import AlbumScreen from "./src/components/AlbumScreen";
import Test from "./src/components/Test";

const Tab = createBottomTabNavigator();

function WeshBottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e85433",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="album"
        component={AlbumScreen}
        options={{
          tabBarLabel: "Album",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-albums" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="test"
        component={Test}
        options={{
          tabBarLabel: "TEST",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <WeshBottomTab />
    </NavigationContainer>
  );
}

const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenText = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin: 5px;
`;
