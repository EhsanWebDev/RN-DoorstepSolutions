import React from "react";
import { Image, ScrollView, View } from "react-native";
import { images } from "../../constants/images";
import { layout } from "../../constants/theme";
import Container from "../Container";
import GeneralText from "../GeneralText";
import Separator from "../Separator";

const AboutPage = () => {
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 12 }}>
      <Image
        source={images.location}
        style={{
          width: layout.width,
          height: layout.height / 3.5,
          resizeMode: "contain",
        }}
      />

      <GeneralText bold mt={10}>
        Timing
      </GeneralText>
      <Container direction="row" align="center" mt={12}>
        <GeneralText styles={{ width: "20%" }} bold>
          Monday
        </GeneralText>
        <GeneralText bold color="#B2BAC8" ml={40}>
          9:00 am to 10:00 pm
        </GeneralText>
      </Container>
      <Container direction="row" align="center" mt={12}>
        <GeneralText styles={{ width: "20%" }} bold>
          Tuesday
        </GeneralText>
        <GeneralText bold color="#B2BAC8" ml={40}>
          9:00 am to 10:00 pm
        </GeneralText>
      </Container>
      <Container direction="row" align="center" mt={12}>
        <GeneralText styles={{ width: "20%" }} bold>
          Wednesday
        </GeneralText>
        <GeneralText bold color="#B2BAC8" ml={40}>
          9:00 am to 10:00 pm
        </GeneralText>
      </Container>
      <Container direction="row" align="center" mt={12}>
        <GeneralText styles={{ width: "20%" }} bold>
          Thursday
        </GeneralText>
        <GeneralText bold color="#B2BAC8" ml={40}>
          9:00 am to 10:00 pm
        </GeneralText>
      </Container>
      <Container direction="row" align="center" mt={12}>
        <GeneralText styles={{ width: "20%" }} bold>
          Friday
        </GeneralText>
        <GeneralText bold color="#B2BAC8" ml={40}>
          9:00 am to 10:00 pm
        </GeneralText>
      </Container>
      <Separator />

      <Container>
        <GeneralText bold size={20}>
          About Business
        </GeneralText>
        <GeneralText styles={{ textAlign: "justify" }} color="#8C99AE">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </GeneralText>
      </Container>
      <Separator />
      <Container>
        <GeneralText bold size={20}>
          Contact Detail
        </GeneralText>
        <GeneralText bold>Phone Number</GeneralText>
        <GeneralText styles={{ textAlign: "justify" }} color="#8C99AE">
          xxxx-xxxx-xxx
        </GeneralText>
      </Container>
    </ScrollView>
  );
};

export default AboutPage;
