import * as React from "react";
import { Text, View } from "react-native";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Pages</Text>
      <Text>{today}</Text>
      <Text>D + {differenceData}</Text>
    </View>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
