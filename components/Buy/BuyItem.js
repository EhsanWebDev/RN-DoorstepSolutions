import React from "react";
import { Image, View } from "react-native";
import Container from "../Container";
import Avatar from "../Avatar";
import GeneralText from "../GeneralText";
import StarRatings from "../StarRating";
import { colors, layout } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "../../constants/images";
import SpecialButton from "../SpecialButton";

const BuyItem = () => {
  return (
    <Container
      // m={20}
      // ph={20}
      styles={{
        borderWidth: 1,
        borderColor: colors.borderColor,
        width: layout.width / 2.1,
        // overflow: "hidden",
      }}
    >
      <Container>
        <Container>
          <Image source={images.men2} style={{ width: "100%", height: 200 }} />
        </Container>
        <Container
          pv={10}
          direction="row"
          align="center"
          justify="space-around"
        >
          <Container>
            <GeneralText bold size={18}>
              RS2000
            </GeneralText>
            <GeneralText>Mackbook Pro</GeneralText>
          </Container>
          <Container
            bg={colors.greenLight}
            align="center"
            p={5}
            ph={10}
            direction="row"
            justify="center"
          >
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={colors.green}
              style={{ marginRight: 5 }}
            />
            <GeneralText bold size={14}>
              4.0
            </GeneralText>
          </Container>
        </Container>
        <Container
          direction="row"
          align="center"
          justify="space-around"
          flex={1}
        >
          <SpecialButton label="Add to cart" labelSize={14} ph={8} pv={8} />
          <SpecialButton
            label="Buy Now"
            primaryLight
            labelSize={14}
            ph={10}
            pv={8}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default BuyItem;
