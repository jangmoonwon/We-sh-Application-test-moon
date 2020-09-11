import * as React from "react";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

function HomeScreen() {
  const year = new Date().getFullYear() + "년" + " ";
  const month = new Date().getMonth() + 1 + "월" + " ";
  const day = new Date().getDate() + "일" + " ";
  const today = [year, month, day];

  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryData = new Date("2015/8/9");
  const differenceData =
    (todayData - anniversaryData) / (1000 * 60 * 60 * 24) + 1;
  return (
    <ScreenContainer>
      <ScreenText>Home Screen</ScreenText>
      <ScreenText>{today}</ScreenText>
      <ScreenText>D + {differenceData}</ScreenText>
    </ScreenContainer>
  );
}

function AlbumScreen() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>사진 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

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
