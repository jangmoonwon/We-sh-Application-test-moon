import * as React from "react";
import styled from "styled-components";

function HomeScreen() {
  const year = new Date().getFullYear() + "년" + " ";
  const month = new Date().getMonth() + 1 + "월" + " ";
  const day = new Date().getDate() + "일" + " ";
  const today = [year, month, day];

  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryData = new Date("2015/8/9");
  const differenceData =
    (todayData - anniversaryData) / (1000 * 60 * 60 * 24) + 1;
  return (
    <ScreenContainer>
      <ScreenText>Home Screen</ScreenText>
      <ScreenText>{today}</ScreenText>
      <ScreenText>D + {differenceData}</ScreenText>
    </ScreenContainer>
  );
}

export default HomeScreen;

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
