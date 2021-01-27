import React from "react";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Container from "./Container";
import { colors, sizes } from "../constants/theme";

const SearchBar = () => {
  return (
    <Container
      direction="row"
      mv={sizes.m_sm * 2}
      mh={sizes.m_sm * 1.2}
      p={sizes.p_sm}
      bg={"#f1f2f6"}
      styles={{
        // elevation: 4,
        // borderColor: colors.dark2,
        // borderWidth: 0.3,
        borderRadius: 6,
      }}
    >
      <FontAwesome
        name="search"
        size={24}
        color={colors.dark}
        style={{ paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search Businesses"
        placeholderTextColor={colors.dark}
        style={{ flex: 1, fontSize: 18 }}
      />
    </Container>
  );
};

export default SearchBar;
