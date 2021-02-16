import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import Separator from "../../components/Separator";
import { colors } from "../../constants/theme";
import SpecialButton from "../../components/SpecialButton";
export default class BookingDetails extends Component {
  state = {
    email: "",
    password: "",
    checked: null,
  };
  handleCheck = () => {
    const { checked } = this.state;
    if (checked) {
      this.setState({ checked: null });
    } else {
      this.setState({ checked: "check" });
    }
  };
  render() {
    const { checked } = this.state;
    return (
      <Container flex={1} ph={14} bg="white">
        <Container direction="row" align="center">
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <GeneralText size={24} bold ml={30}>
            Booking Details
          </GeneralText>
        </Container>
        <Separator />

        <GeneralText bold>Select Date & Time</GeneralText>
        <Container
          mt={10}
          direction="row"
          justify="space-between"
          align="center"
        >
          <Container>
            <GeneralText>Select Date</GeneralText>
            <Container bg="#F6F7FB" direction="row" align="center" p={8} mt={6}>
              <GeneralText
                color="#A9B3C3"
                ph={20}
                styles={{ borderRightColor: "#A9B3C3", borderRightWidth: 2 }}
              >
                Jan 10, 2021
              </GeneralText>

              <Ionicons
                name="ios-calendar"
                size={24}
                color="#A9B3C3"
                style={{ paddingHorizontal: 10 }}
              />
            </Container>
          </Container>
          <Container>
            <GeneralText>Select Time</GeneralText>
            <Container bg="#F6F7FB" direction="row" align="center" p={8} mt={6}>
              <GeneralText
                color="#A9B3C3"
                ph={20}
                styles={{ borderRightColor: "#A9B3C3", borderRightWidth: 2 }}
              >
                07:00 am
              </GeneralText>

              <MaterialCommunityIcons
                name="clock-outline"
                size={24}
                color="#A9B3C3"
                style={{ paddingHorizontal: 10 }}
              />
            </Container>
          </Container>
        </Container>
        <Separator mh={1} mv={16} />
        <GeneralText bold>Booking Detail</GeneralText>
        <Container mt={10}>
          <Container
            direction="row"
            justify="space-between"
            align="center"
            mt={5}
          >
            <GeneralText size={20}>Install New A.C</GeneralText>
            <Container direction="row" align="center">
              <GeneralText bold color={colors.primary2} size={20}>
                RS100
              </GeneralText>
              <TouchableOpacity
                style={{
                  marginLeft: 20,
                  borderColor: "#FEB36B",
                  borderWidth: 2,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 5,
                }}
              >
                <GeneralText color="#FEB36B" bold>
                  x
                </GeneralText>
              </TouchableOpacity>
            </Container>
          </Container>
          <Container
            direction="row"
            justify="space-between"
            align="center"
            mt={5}
          >
            <GeneralText size={20}>Install New A.C</GeneralText>
            <Container direction="row" align="center">
              <GeneralText bold color={colors.primary2} size={20}>
                RS100
              </GeneralText>
              <TouchableOpacity
                style={{
                  marginLeft: 20,
                  borderColor: "#FEB36B",
                  borderWidth: 2,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 5,
                }}
              >
                <GeneralText color="#FEB36B" bold>
                  x
                </GeneralText>
              </TouchableOpacity>
            </Container>
          </Container>
        </Container>
        <Container mv={20} direction="row" align="center">
          <TouchableOpacity
            onPress={this.handleCheck}
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.handleCheck}
              style={{
                height: 16,
                width: 16,
                borderWidth: 1,
                borderColor: !checked ? "#33414E" : "white",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checked ? "#33B199" : "white",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <FontAwesome5 name={checked} size={8} color={colors.white} />
            </TouchableOpacity>
            <GeneralText color="#77869E">One Time</GeneralText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleCheck}
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.handleCheck}
              style={{
                height: 16,
                width: 16,
                borderWidth: 1,
                borderColor: !checked ? "#33414E" : "white",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checked ? "#33B199" : "white",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <FontAwesome5 name={checked} size={8} color={colors.white} />
            </TouchableOpacity>
            <GeneralText color="#77869E">Daily</GeneralText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleCheck}
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.handleCheck}
              style={{
                height: 16,
                width: 16,
                borderWidth: 1,
                borderColor: !checked ? "#33414E" : "white",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checked ? "#33B199" : "white",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <FontAwesome5 name={checked} size={8} color={colors.white} />
            </TouchableOpacity>
            <GeneralText color="#77869E">Weekly</GeneralText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleCheck}
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.handleCheck}
              style={{
                height: 16,
                width: 16,
                borderWidth: 1,
                borderColor: !checked ? "#33414E" : "white",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checked ? "#33B199" : "white",
                marginRight: 10,
                borderRadius: 8,
              }}
            >
              <FontAwesome5 name={checked} size={8} color={colors.white} />
            </TouchableOpacity>
            <GeneralText color="#77869E">Monthly</GeneralText>
          </TouchableOpacity>
        </Container>
        <SpecialButton label="Add More Services" primary />
        <Separator mh={1} mv={16} />

        <GeneralText bold>Additional Detail</GeneralText>

        <Container mt={14}>
          <GeneralText>Location</GeneralText>
          <Container
            direction="row"
            align="center"
            justify="space-between"
            p={14}
            bg="#F6F7FB"
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder="Add Location"
              placeholderTextColor="#A9B3C3"
            />
            <Entypo name="location" size={24} color="#A9B3C3" />
          </Container>
        </Container>
        <Container mt={14} flex={1}>
          <GeneralText>Additional Notes</GeneralText>
          <Container direction="row" flex={1} p={14} bg="#F6F7FB">
            <TextInput
              style={{ flex: 1, height: 200, textAlignVertical: "top" }}
              multiline
              numberOfLines={8}
              placeholder="Lorem ipsum is a very good old tool for text"
              placeholderTextColor="#A9B3C3"
            />
          </Container>
        </Container>
        <Separator mh={1} mv={16} />
        <Container direction="row" align="center" justify="space-between">
          <Container>
            <GeneralText color="#A9B3C3" size={15}>
              Total Price
            </GeneralText>
            <GeneralText size={15}>Tax Included in price</GeneralText>
          </Container>
          <GeneralText bold size={24}>
            RS 200.00
          </GeneralText>
        </Container>
        <SpecialButton
          pv={12}
          label="Continue & Select Payment Method"
          primary
          full
        />
      </Container>
    );
  }
}
