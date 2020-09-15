import * as React from "react";
import styled from "styled-components";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
          style={styles.gallery}
        />
      </View>
    );
  }

  return (
    <Container>
      <HeaderText>Gallery</HeaderText>
      <GalleryWrapper>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>사진 추가하기</Text>
        </TouchableOpacity>
      </GalleryWrapper>
    </Container>
  );
}

export default AlbumScreen;

const Container = styled.View`
  flex: 1;
  background-color: #faf4f4;
`;

const HeaderText = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  color: #ff7272;
  margin: 45px 0 30px 0;
  background-color: #faf4f4;
`;

const GalleryWrapper = styled.View`
  flex: 1;
  background-color: blue;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  gallery: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
