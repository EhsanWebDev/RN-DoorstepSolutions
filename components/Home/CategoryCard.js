import React from "react";
import { View } from "react-native";
import Container from "../Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { layout } from "../../constants/theme";
import GeneralText from "../GeneralText";
// import { Container } from './styles';

const CatComp = () => {
  return (
    <Container
      mv={10}
      ph={20}
      bg="#f3a683"
      justify="center"
      align="center"
      styles={{ width: layout.width / 2.2 }}
    >
      <MaterialCommunityIcons name="calendar" size={60} color="white" />
      <GeneralText size={18} center>
        Events and catering
      </GeneralText>
    </Container>
  );
};

export default CatComp;
