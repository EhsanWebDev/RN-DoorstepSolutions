import React from "react";
import Container from "./Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GeneralText from "./GeneralText";
import { colors } from "../constants/theme";

const StarRatings = ({ stars }) => {
  const retStars = () => {
    let totalStars = [];
    for (let index = 1; index <= 5; index++) {
      // Set the path to filled stars
      let path = "star";
      // If ratings is lower, set the path to unfilled stars
      if (index > stars) {
        path = "star-outline";
      }
      // Push the Image tag in the stars array
      totalStars.push(
        <MaterialCommunityIcons name={path} size={18} color="green" />
      );
    }
    return totalStars;
  };

  return (
    <Container direction="row" align="center">
      <Container direction="row" justify="center" mr={10}>
        {retStars()}
      </Container>

      <GeneralText
        mt={5}
        color={colors.muted}
        size={15}
      >{`${stars}.0`}</GeneralText>
    </Container>
  );
};

export default StarRatings;
