import * as React from "react";
import styled from "styled-components/native";
import { Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AlbumScreen() {
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
        <SelectedImage source={{ uri: selectedImage.localUri }} />
      </Container>
    );
  }

  return (
    <Container>
      <Text>Album Screen</Text>
      <StyledButton>
        <StyledButtonText onPress={openImagePickerAsync}>
          사진 추가하기
        </StyledButtonText>
      </StyledButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  justify-content: center;
  background-color: #1da89a;
  border-radius: 5px;
`;

const StyledButtonText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const SelectedImage = styled.Image`
  width: 300px;
  height: 300px;
`;
