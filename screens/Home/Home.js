import React, { Component } from "react";
import { Image } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

import { images } from "../../constants/images";
import { layout, sizes } from "../../constants/theme";

export default class Home extends Component {
  render() {
    return (
      <Container flex={1}>
        <Header />
        <SearchBar />
      </Container>
    );
  }
}
