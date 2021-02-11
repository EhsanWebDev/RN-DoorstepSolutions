import React from "react";
import { TouchableOpacity, View } from "react-native";
import Container from "./Container";
import GeneralText from "./GeneralText";

// import { Container } from './styles';

const SpecialButton = ({
  primaryLight,
  primary,
  warning,
  warningLight,
  label = "Button",
  full,
  ph,
  pv,
}) => {
  return (
    <Container
      pv={pv ? pv : 10}
      ph={ph ? ph : 20}
      mv={10}
      styles={(!full && { alignSelf: "flex-start" }) || {}}
      bg={
        (primary && "#2575FC") ||
        (primaryLight && "#E8F1FF") ||
        (warningLight && "#FCF3ED") ||
        (warning && "#FEB167")
      }
      align="center"
    >
      <TouchableOpacity>
        <GeneralText
          color={
            (primary && "white") ||
            (primaryLight && "#2575FC") ||
            (warningLight && "#FEB167") ||
            (warning && "white")
          }
        >
          {label}
        </GeneralText>
      </TouchableOpacity>
    </Container>
  );
};

export default SpecialButton;
