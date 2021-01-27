import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../constants/theme";
import GeneralText from "./GeneralText";

const UnderLineButton = ({ label = "", onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <GeneralText size={14} styles={{ textDecorationLine: "underline" }}>
        {label}
      </GeneralText>
    </TouchableOpacity>
  );
};

export default UnderLineButton;
