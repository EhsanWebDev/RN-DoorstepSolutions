import React from "react";
import { Image } from "react-native";
import { images } from "../constants/images";
import { colors, layout, sizes } from "../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const MenuBar = require("../assets/icons/MenuBar.png");
const filter = require("../assets/icons/filter.png");
const Notofication = require("../assets/icons/Notofication.png");
const Back = require("../assets/icons/Back.png");
const Search = require("../assets/icons/Search.png");
import { Feather } from "@expo/vector-icons";
const Header = ({ showBack }) => {
  return (
    <Container
      ph={sizes.p_sm * 1.2}
      direction="row"
      justify="space-between"
      align="center"
    >
      {showBack ? (
        <Container
          flex={1}
          align="center"
          direction="row"
          justify="space-between"
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="black"
          />
          <Container direction="row" align="center">
            <Image
              source={images.men1}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Container ml={10}>
              <GeneralText size={12} color={colors.muted}>
                Welcome Back
              </GeneralText>
              <GeneralText size={24} bold>
                John Doe
              </GeneralText>
            </Container>
          </Container>
          <Container>
            <Feather name="bell" size={30} color="black" />
          </Container>
        </Container>
      ) : (
        <Container
          flex={1}
          direction="row"
          justify="space-between"
          align="center"
        >
          <Container direction="row" align="center">
            <Image
              source={images.men1}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Container ml={10}>
              <GeneralText size={12} color={colors.muted}>
                Welcome Back
              </GeneralText>
              <GeneralText size={24} bold>
                John Doe
              </GeneralText>
            </Container>
          </Container>
          <Container>
            <Feather name="bell" size={30} color="black" />
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Header;
