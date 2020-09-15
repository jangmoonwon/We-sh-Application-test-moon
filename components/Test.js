import * as React from "react";
import styled from "styled-components";


function Test() {
    return(
        <ScreenContainer>
            <ScreenText>
                TEST PAGES
            </ScreenText>
        </ScreenContainer>
    );
}

const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenText = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin: 5px;
`;

export default Test