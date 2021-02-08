import React, { Component } from "react";
import { ScrollView } from "react-native";
import TabView from "../../components/Category/TabView";
import Container from "../../components/Container";

import Header from "../../components/Header";

export default class CategoryDetails extends Component {
  render() {
    return (
      <Container flex={1}>
        <Header withoutNotifications />
        <TabView />
      </Container>
    );
  }
}
