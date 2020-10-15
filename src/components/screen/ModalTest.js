import React, { useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProfileEdit from "../screen/ProfileEdit";

export default function ModalTest({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Text style={{ margin: 50 }}>Modal Test Page</Text>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 500,
        }}
      >
        <ModalContainer>
          <ModalSelectButton
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("ProfileEdit");
            }}
          >
            <ModalSelectText>프로필 설정</ModalSelectText>
          </ModalSelectButton>
          <HorizontalLine />
          <ModalSelectButton
            onPress={() => {
              setModalVisible(false);
              
            }}
          >
            <ModalSelectText>선택 2</ModalSelectText>
          </ModalSelectButton>
          <HorizontalLine />
          <ModalSelectButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ModalSelectText>선택 3</ModalSelectText>
          </ModalSelectButton>
        </ModalContainer>
        <ModalContainer deleteType>
          <ModalSelectButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ModalSelectText>나가기</ModalSelectText>
          </ModalSelectButton>
        </ModalContainer>
      </Modal>

      <ModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="setting" size={48} color="#fff" />
      </ModalOpenButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: ${(props) => (props.deleteType ? "70px" : "210px")};
  margin: ${(props) => (props.deleteType ? "20px" : "0")};
  background-color: ${(props) => (props.deleteType ? "#e6f2ef" : "#ebf5f2")};
  border-radius: 10px;
`;

const HorizontalLine = styled.View`
  background-color: #bbb;
  height: 1px;
  align-self: stretch;
`;

const ModalSelectButton = styled.TouchableOpacity`
  flex: 1;
  width: 300px;
  justify-content: center;
`;

const ModalSelectText = styled.Text`
  align-self: center;
  font-size: 23px;
  color: #16a085;
`;

const ModalOpenButton = styled.TouchableOpacity`
  height: 60px;
  width: 120px;
  padding: 4px 10px 0 10px;
  background-color: #131313;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
