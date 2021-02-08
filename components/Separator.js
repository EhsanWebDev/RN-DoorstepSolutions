import React from "react";
import { View } from "react-native";
import { layout } from "../constants/theme";
import Container from "./Container";

// import { Container } from './styles';

const Separator = () => {
  return (
    <Container
      mv={20}
      mh={12}
      styles={{
        width: layout.width,
        height: 1.5,
        backgroundColor: "#C5CAD2",
      }}
    />
  );
};

export default Separator;
