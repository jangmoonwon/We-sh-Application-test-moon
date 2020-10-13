<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function Test() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
=======
import * as React from "react";
import styled from "styled-components/native";
import {Button, Text, View} from 'react-native';
import Modal from "react-native-modal";

function Test() {
  const [isVisible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };
  return (
    <ScreenContainer>
      <EditBtn title="Show" onPress={toggleModal} />
      <Modal isVisible={isVisible}>
        <View>
          <Text>Modal Test</Text>
          <EditBtn title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.View`
>>>>>>> origin/master
  justify-content: center;
  align-items: center;
`;

<<<<<<< HEAD
const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
=======
const EditBtn = styled.TouchableOpacity`
  background-color: #68b0ab;
  margin: 80px;
  padding: 17px;
  border-radius: 5px;
`;

const EditText = styled.Text`
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: #fff;
>>>>>>> origin/master
`;

export default Test;
