import React from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileEdit() {
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
        <StyledButton Selected>
                <StyledButtonText onPress={openImagePickerAsync}>
                        프로필 변경
                </StyledButtonText>
            </StyledButton>
      </Container>
    );
  }
    return(
        <Container>
            <Text>프로필 설정 페이지</Text>
            <StyledButton>
                <StyledButtonText onPress={openImagePickerAsync}>
                        프로필 변경
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

const Text = styled.Text`
font-size: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  margin: ${(props) => (props.Selected ? "20px" : "0")};
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