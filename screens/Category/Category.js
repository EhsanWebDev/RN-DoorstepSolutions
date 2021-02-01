import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import CatComp from "../../components/Home/CategoryCard";
import CategoryItem from "../../components/Home/CategoryItem";
import Pill from "../../components/Pill";
import SearchBar from "../../components/SearchBar";

export default class Category extends Component {
  render() {
    return (
      <Container styles={{ flex: 1 }}>
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
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ScrollView>
      </Container>
    );
  }
}
