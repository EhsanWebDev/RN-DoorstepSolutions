import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GeneralText from "./GeneralText";
import { colors } from "../constants/theme";
// import { Container } from './styles';

const Pill = ({ label = "ALL", active }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",

        borderColor: active ? "" : colors.p,
        borderWidth: active ? 0 : 1,
        padding: 8,
        alignItems: "center",
        marginHorizontal: 8,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: active ? colors.primary : "white",
      }}
    >
      <GeneralText color={active ? colors.white : colors.black}>
        {label}
      </GeneralText>
    </TouchableOpacity>
  );
};

export default Pill;
