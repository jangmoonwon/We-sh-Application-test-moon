import * as React from "react";
import styled from "styled-components/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function AlbumBox() {
  return (
    <GalleryWrapper>
      <GalleryWrapper2>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
      </GalleryWrapper2>
    </GalleryWrapper>
  );
}

export default AlbumBox;

const GalleryWrapper = styled.ScrollView`
margin: 0 0 120px 0;
`;

const GalleryWrapper2 = styled.View`
  flex: 1;
  flex-flow: column wrap;
  flex-direction: row;
  justify-content: center;
`;

const Gallery = styled.View`
  width: 135px;
  height: 160px;
  background-color: #ff7e67;
  margin: 1px;
`;

const AddBtn = styled.TouchableOpacity`
  background-color: #68b0ab;
  margin: 80px;
  padding: 17px;
  border-radius: 5px;
`;

const AddText = styled.Text`
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: #fff;
`;