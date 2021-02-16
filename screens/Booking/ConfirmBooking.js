import React, { Component } from "react";
import { Text, View } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Separator from "../../components/Separator";
import { colors } from "../../constants/theme";
import SpecialButton from "../../components/SpecialButton";
export default class ConfirmBooking extends Component {
  render() {
    return (
      <Container flex={1}>
        <Header withoutNotifications withoutAvatar />
        <Container ph={20}>
          <Container justify="center" align="center" mv={30}>
            <Container bg="#ECFCF9" styles={{ borderRadius: 120 }}>
              <AntDesign name="checkcircleo" size={120} color="#33B199" />
            </Container>

            <GeneralText size={24} bold mt={20}>
              Thank You For Your Order
            </GeneralText>
            <GeneralText center mt={10} lines={2}>
              Your order is being processed. You will receive a confirmation
              shortly
            </GeneralText>
          </Container>
          <Separator />

          <Container>
            <GeneralText size={18} bold>
              Booking Detail
            </GeneralText>

            <Container
              direction="row"
              justify="space-between"
              align="center"
              mt={5}
            >
              <GeneralText size={20}>Install New A.C</GeneralText>
              <Container direction="row" align="center">
                <GeneralText bold size={20}>
                  RS100
                </GeneralText>
              </Container>
            </Container>
            <Container
              direction="row"
              justify="space-between"
              align="center"
              mt={5}
            >
              <GeneralText size={20}>
                Install New A.C{"  "}
                <GeneralText color={colors.muted}>Weekly</GeneralText>
              </GeneralText>
              <Container direction="row" align="center">
                <GeneralText bold size={20}>
                  RS70
                </GeneralText>
              </Container>
            </Container>
          </Container>
          <Separator />
          <GeneralText size={20} bold styles={{ textAlign: "right" }}>
            Total : RS170.00
          </GeneralText>
        </Container>
        <Container flex={1} justify="flex-end" mh={20}>
          <SpecialButton label="Book Again" primary full />
        </Container>
      </Container>
    );
  }
}
