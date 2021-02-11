import React from "react";
import { View } from "react-native";
import { layout } from "../constants/theme";
import Container from "./Container";

// import { Container } from './styles';

const Separator = ({ mv, mh }) => {
  return (
    <Container
      mv={mv ? mv : 20}
      mh={mh ? mh : 12}
      styles={{
        height: 1,
        backgroundColor: "#C5CAD2",
      }}
    />
  );
};

export default Separator;
