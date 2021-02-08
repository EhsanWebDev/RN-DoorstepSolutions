import React from "react";
import { ScrollView, View } from "react-native";
import Container from "../Container";
import GeneralText from "../GeneralText";
import Separator from "../Separator";
import SpecialButton from "../SpecialButton";

const ServicesPage = () => {
  return (
    <Container flex={1} ph={12} mv={4}>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Container mt={20}>
            <Container direction="row" align="center" justify="space-between">
              <GeneralText size={20} bold>
                Install New A.C
              </GeneralText>
              <GeneralText color="#2575FC" bold size={18}>
                RS-2000
              </GeneralText>
            </Container>
            <GeneralText
              styles={{ textAlign: "justify" }}
              mt={10}
              color="#A0AABB"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </GeneralText>
            <SpecialButton warningLight label="Service Added" />
            <Separator />
          </Container>
          <Container mt={20}>
            <Container direction="row" align="center" justify="space-between">
              <GeneralText size={20} bold>
                Install New A.C
              </GeneralText>
              <GeneralText color="#2575FC" bold size={18}>
                RS-2000
              </GeneralText>
            </Container>
            <GeneralText
              styles={{ textAlign: "justify" }}
              mt={10}
              color="#A0AABB"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </GeneralText>
            <SpecialButton warning label="Service Added" />
            <Separator />
          </Container>
        </Container>
      </ScrollView>

      <SpecialButton primary full label="Continue" />
    </Container>
  );
};

export default ServicesPage;
