import React from "react";
import styled from "styled-components/native";

export default function ProfileEdit() {
    return(
        <Container>
            <Text>프로필 설정 페이지</Text>
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