import React, { Component } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import Separator from "../../components/Separator";
import StarRatings from "../../components/StarRating";
import { images } from "../../constants/images";
import { colors, layout } from "../../constants/theme";

export default class BuyDetails extends Component {
  render() {
    return (
      <Container>
        <Header withoutNotifications />
        <Separator />
        <Image
          source={images.women3}
          style={{ width: layout.width, height: layout.height / 3.5 }}
        />
        <Container ph={12}>
          <GeneralText bold size={22} mt={20}>
            iPhone 12 Pro Max
          </GeneralText>
          <GeneralText lines={3} mv={10} mb={20}>
            It is a long established fact that a reader will be distracted by
            the readable
          </GeneralText>

          <StarRatings showCount stars={4} />

          <GeneralText mt={30}>Select Quantity</GeneralText>
          <Container
            mt={10}
            direction="row"
            justify="space-between"
            align="center"
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.borderColor,
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <GeneralText size={24} bold color={colors.gray}>
                -
              </GeneralText>
            </TouchableOpacity>
            <TextInput
              placeholder="1"
              placeholderTextColor="black"
              keyboardType="numeric"
              style={{
                borderColor: colors.borderColor,
                borderWidth: 1,
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                textAlign: "center",
                fontSize: 20,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.borderColor,
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <GeneralText size={24} bold color={colors.gray}>
                +
              </GeneralText>
            </TouchableOpacity>
          </Container>
        </Container>
      </Container>
    );
  }
}
