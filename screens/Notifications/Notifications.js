import React, { Component } from "react";
import { Text, View } from "react-native";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import Separator from "../../components/Separator";
import { colors } from "../../constants/theme";

export default class Notifications extends Component {
  render() {
    return (
      <Container flex={1}>
        <Header notifications />
        <Separator mh={0} mv={10} />
        <Container direction="row" align="center" ph={24} mv={10}>
          <Avatar sm rounded />
          <GeneralText lines={3} styles={{ flex: 1 }} ph={10}>
            <GeneralText bold>Dorem Ipsum </GeneralText>
            It is a long established fact that a reader will be.
          </GeneralText>
          <Container
            bg={colors.green}
            styles={{ width: 14, height: 14, borderRadius: 7 }}
          />
        </Container>
        <Separator mh={0} mv={10} />
        <Container direction="row" align="center" ph={24} mv={10}>
          <Avatar sm rounded />
          <GeneralText lines={3} styles={{ flex: 1 }} ph={10}>
            <GeneralText bold>Dorem Ipsum </GeneralText>
            It is a long established fact that a reader will be.
          </GeneralText>
          <Container
            bg={colors.green}
            styles={{ width: 14, height: 14, borderRadius: 7 }}
          />
        </Container>
        <Separator mh={0} mv={10} />
        <Container direction="row" align="center" ph={24} mv={10}>
          <Avatar sm rounded />
          <GeneralText lines={3} styles={{ flex: 1 }} ph={10}>
            <GeneralText bold>Dorem Ipsum </GeneralText>
            It is a long established fact that a reader will be.
          </GeneralText>
          <Container
            bg={colors.green}
            styles={{ width: 14, height: 14, borderRadius: 7 }}
          />
        </Container>
        <Separator mh={0} mv={10} />
      </Container>
    );
  }
}
