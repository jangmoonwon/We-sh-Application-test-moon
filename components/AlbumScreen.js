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
      <Container>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.gallery}
        />
      </Container>
    );
  }

  return (
    <Container>
      <GalleryWrapper>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
      </GalleryWrapper>
      <AddBtn onPress={openImagePickerAsync}>
        <AddText>사진 추가하기</AddText>
      </AddBtn>
    </Container>
  );
}

export default AlbumScreen;

const Container = styled.ScrollView`
  flex: 1;
  /* background-color: blue; */
`;

const GalleryWrapper = styled.View`
flex: 1;
  flex-flow: column wrap;
  flex-direction: row;
  justify-content: center;
  
`;

const HeaderText = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  color: #ff7272;
  margin: 50px 0 30px 0;
  background-color: #faf4f4;
`;

const AddBtn = styled.TouchableOpacity`
  background-color: #68b0ab;
  margin: 80px;
  padding: 17px;
  border-radius: 5px;
`;

const AddText = styled.Text`
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: #fff;
`;

const Gallery = styled.View`
  width: 135px;
  height: 160px;
  background-color: #ff7e67;
  margin: 1px;
`;

const styles = StyleSheet.create({
  gallery: {
    justifyContent: "center",
    marginVertical: 100,
    margin: 1,
    width: 135,
    height: 160,
    resizeMode: "contain",
  },
});
