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
  justify-content: center;
  align-items: center;
`;

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
`;

export default Test;
