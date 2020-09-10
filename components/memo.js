import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  const year = new Date().getFullYear() + "년" + " ";
  const month = new Date().getMonth() + 1 + "월" + " ";
  const day = new Date().getDate() + "일" + " ";
  const today = [year, month, day];

  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryData = new Date(2015, 8, 9);
  const differenceData =
    (todayData - anniversaryData) / (1000 * 60 * 60 * 24) + 31 + 1;

  return (
    <ScreenContainer>
      <ScreenText>Home Pages</ScreenText>
      <ScreenText>{today}</ScreenText>
      <ScreenText>D + {differenceData}</ScreenText>
    </ScreenContainer>
  );
}

function AlbumScreen() {
  return (
    <ScreenContainer>
      <ScreenText>Albums Pages</ScreenText>
    </ScreenContainer>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={
                    focused
                      ? "ios-information-circle"
                      : "ios-information-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "albums") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Albums" component={AlbumScreen} />
      </Tab.Navigator>
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

////////////////////////////* */////////////////////////////

import * as React from "react";
import styled from "styled-components";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  const year = new Date().getFullYear() + "년" + " ";
  const month = new Date().getMonth() + 1 + "월" + " ";
  const day = new Date().getDate() + "일" + " ";
  const today = [year, month, day];

  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryData = new Date(2015, 8, 9);
  const differenceData =
    (todayData - anniversaryData) / (1000 * 60 * 60 * 24) + 31 + 1;
  return(
    <ScreenContainer>
      <ScreenText>Home Screen</ScreenText>
      {/* <ScreenText>{today}</ScreenText>
      <ScreenText>D + {differenceData}</ScreenText> */}
    </ScreenContainer>
  );
}

function AlbumScreen() {
  return(
    <ScreenContainer>
      <ScreenText>Album Screen</ScreenText>
    </ScreenContainer>
  );
}

const Tab = createBottomTabNavigator();

function WeshBottomTab() {
  return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#e85433',
    }}
    >
      <Tab.Screen 
      name="home"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="album"
      component={AlbumScreen}
      options={{
        tabBarLabel: "Album",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-albums" color={color} size={size}  />
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