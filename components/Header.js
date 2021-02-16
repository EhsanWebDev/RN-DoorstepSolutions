import React from "react";
import { Image } from "react-native";
import { images } from "../constants/images";
import { colors, layout, sizes } from "../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";

import Avatar from "./Avatar";
const Header = ({
  showBack,
  withoutNotifications,
  withoutAvatar,
  notifications,
}) => {
  if (notifications) {
    return (
      <Container direction="row" justify="space-between" align="center" mh={20}>
        <Container direction="row" align="center">
          <Container bg="#E9F8FE" p={15} styles={{ borderRadius: 24 }}>
            <Feather name="bell" size={24} color={colors.primary2} />
          </Container>
          <GeneralText bold size={30} ml={20}>
            Notifications
          </GeneralText>
        </Container>

        <Entypo name="cross" size={24} color="black" />
      </Container>
    );
  }
  return (
    <Container
      ph={sizes.p_sm * 1.2}
      direction="row"
      justify="space-between"
      align="center"
    >
      {withoutNotifications && (
        <Container direction="row" align="center">
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="black"
            style={{ marginHorizontal: 10, marginRight: 10 }}
          />
          {!withoutAvatar && <Avatar sm rounded />}

          <GeneralText bold size={24} ml={10}>
            Business Name
          </GeneralText>
        </Container>
      )}
      {showBack && (
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
      )}

      {!showBack && !withoutNotifications && (
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
