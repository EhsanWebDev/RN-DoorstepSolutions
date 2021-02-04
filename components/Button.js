import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors, layout, sizes } from "../constants/theme";
import Container from "./Container";
import GeneralText from "./GeneralText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Button = ({
  width,
  label = "Continue",
  bgColor = colors.primary,
  br = 8,
  text_color = colors.white,
  iconName,
  social,
  mt = sizes.m_sm * 3,
  handlePress,
}) => {
  return (
    <Container
      mt={mt}
      styles={{
        width: width ? width : layout.width * 0.75,
        elevation: 6,
        borderRadius: br,
        alignSelf: "center",
        backgroundColor: bgColor,
      }}
    >
      <TouchableOpacity
        style={{
          padding: 12,
          flexDirection: social ? "row" : "column",
          justifyContent: social ? "center" : "flex-start",
          alignItems: "center",
        }}
        onPress={handlePress}
      >
        {social && (
          <MaterialCommunityIcons
            name={iconName}
            size={26}
            style={{ marginRight: 5, paddingBottom: 5 }}
            color="white"
          />
        )}
        <GeneralText
          color={text_color}
          center
          size={sizes.font_18}
          styles={{ textAlignVertical: "center" }}
        >
          {label}
        </GeneralText>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
