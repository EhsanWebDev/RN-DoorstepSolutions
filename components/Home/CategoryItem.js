import React from "react";
import { View } from "react-native";
import Container from "../Container";
import Avatar from "../Avatar";
import GeneralText from "../GeneralText";
import StarRatings from "../StarRating";
import { colors } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CategoryItem = () => {
  return (
    <Container
      mh={20}
      pv={20}
      styles={{ borderBottomWidth: 2, borderBottomColor: colors.borderColor }}
    >
      <Container justify="space-between" direction="row" align="center">
        <Container direction="row" align="center">
          <Container>
            <Avatar sm rounded />
          </Container>
          <Container ml={10}>
            <GeneralText size={20}>Delivery Company</GeneralText>
            <StarRatings showCount stars={4} />
          </Container>
        </Container>
        <Container bg="#FCF3ED" pv={8} ph={16}>
          <GeneralText color="#FDD8B6" size={14} bold>
            Category
          </GeneralText>
        </Container>
      </Container>

      <Container direction="row" align="center" mt={20}>
        <MaterialCommunityIcons name="alarm" size={18} color={colors.muted} />
        <GeneralText color={colors.muted} size={14} bold ml={6}>
          9:00 am to 10:00 pm - Monday to Friday
        </GeneralText>
      </Container>
      <Container direction="row" align="center" mt={8}>
        <MaterialCommunityIcons name="map" size={18} color={colors.muted} />
        <GeneralText color={colors.muted} size={14} bold ml={6}>
          150, Sabzazar, Lahore
        </GeneralText>
      </Container>
    </Container>
  );
};

export default CategoryItem;
