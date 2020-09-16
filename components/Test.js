import * as React from "react";
import styled from "styled-components";
import AlbumBox from "../components/AlbumBox";

function Test() {
  return (
    <ScreenContainer>
      <AlbumBox />
      <AddBtn>
        <AddText>사진 추가하기</AddText>
      </AddBtn>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.View`
  margin-top: 120px;
`;

const AddBtn = styled.View`
  background-color: #68b0ab;
  border-radius: 5px;
`;

const AddText = styled.Text`
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: #fff;
`;

export default Test;
