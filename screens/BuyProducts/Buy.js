import React, { Component } from "react";
import { ScrollView } from "react-native";
import BuyItem from "../../components/Buy/BuyItem";
import Container from "../../components/Container";

import Header from "../../components/Header";

import Pill from "../../components/Pill";
import SearchBar from "../../components/SearchBar";

export default class Buy extends Component {
  render() {
    return (
      <Container flex={1}>
        <Header showBack />
        <SearchBar showFilter />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Pill active />
          <Pill label="Category 1" />
          <Pill label="Category 2" />
          <Pill label="Category 3" />
          <Pill label="Category 4" />
        </ScrollView>

        <ScrollView style={{ marginVertical: 20 }}>
          <Container
            direction="row"
            align="center"
            justify="space-around"
            mb={20}
          >
            <BuyItem />
            <BuyItem />
          </Container>
          <Container
            direction="row"
            align="center"
            justify="space-around"
            mb={20}
          >
            <BuyItem />
            <BuyItem />
          </Container>
          <Container
            direction="row"
            align="center"
            justify="space-around"
            mb={20}
          >
            <BuyItem />
            <BuyItem />
          </Container>
        </ScrollView>
      </Container>
    );
  }
}
