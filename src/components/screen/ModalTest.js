import React, { useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { Text } from "react-native";

export default function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOutput, setModalOutput] = useState();
  return (
    <Container>
      <Text>Modal Test Page</Text>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ModalContainer>
          <ModalButton
            onPress={() => {
              setModalOutput();
              setModalVisible(false);
            }}
          >
            <ModalSelectText>Test_1</ModalSelectText>
          </ModalButton>
          <ModalButton
            onPress={() => {
              setModalOutput();
              setModalVisible(false);
            }}
          >
            <ModalSelectText>나가기</ModalSelectText>
          </ModalButton>
        </ModalContainer>
      </Modal>
      <ModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Open</Text>
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
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const ModalButton = styled.TouchableOpacity`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const ModalSelectText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const ModalOpenButton = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
`;
