import React from "react";
import Container from "./Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GeneralText from "./GeneralText";
import { colors } from "../constants/theme";

const StarRatings = ({ stars, size, showCount, bg }) => {
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
        <MaterialCommunityIcons
          key={index}
          name={path}
          size={size ? size : 18}
          color={path === "star" ? "#33B199" : "#77869E"}
        />
      );
    }
    return totalStars;
  };

  return (
    <Container flex={1} direction="row" align="center">
      <Container direction="row" bg={bg ? bg : "white"}>
        {retStars()}
      </Container>
      {showCount && (
        <GeneralText
          mt={5}
          ml={10}
          color={colors.muted}
          size={15}
        >{`${stars}.0`}</GeneralText>
      )}
    </Container>
  );
};

export default StarRatings;
