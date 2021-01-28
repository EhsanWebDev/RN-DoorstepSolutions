import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Container from "./Container";
import { colors, sizes } from "../constants/theme";

const SearchBar = ({ showFilter }) => {
  return (
    <Container
      mh={sizes.m_sm * 1.2}
      direction={showFilter ? "row" : "column"}
      justify="space-between"
      align="center"
    >
      <Container
        flex={showFilter ? 0.98 : 0}
        direction="row"
        align="center"
        mv={sizes.m_sm * 2}
        p={sizes.p_sm}
        bg={"#f1f2f6"}
        styles={{
          borderRadius: 6,
        }}
      >
        <Feather
          name="search"
          size={22}
          color={colors.gray}
          style={{ paddingHorizontal: 10 }}
        />
        <TextInput
          placeholder="Search Businesses"
          placeholderTextColor={colors.gray}
          style={{ flex: 1, fontSize: 18 }}
        />
      </Container>
      {showFilter && (
        <TouchableOpacity style={{ backgroundColor: "#f1f2f6", padding: 10 }}>
          <FontAwesome name="filter" size={24} color={colors.gray} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default SearchBar;
