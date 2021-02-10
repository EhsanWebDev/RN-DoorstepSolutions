import React from "react";
import { StyleSheet } from "react-native";
import Container from "./Container";
import GeneralText from "./GeneralText";

const ProgressBar = ({ progress = "30", count }) => {
  return (
    <Container direction="row" align="center" justify="space-between" mv={1}>
      <GeneralText bold>{count}</GeneralText>
      <Container
        styles={{
          flexDirection: "row",
          height: 12,
          width: "90%",
          backgroundColor: "#E2E2E2",
          borderColor: "#F6F7FB",
          borderWidth: 1,
          borderRadius: 25,
        }}
      >
        <Container
          styles={
            ([StyleSheet.absoluteFill],
            {
              backgroundColor: "#2575FC",
              width: `${progress}%`,
              borderRadius: 20,
            })
          }
        />
      </Container>
    </Container>
  );
};

export default ProgressBar;
