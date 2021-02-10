import React from "react";
import { ScrollView, View, StyleSheet, Animated, Text } from "react-native";
import Avatar from "../Avatar";
import Container from "../Container";
import GeneralText from "../GeneralText";
import ProgressBar from "../ProgressBar";
import Separator from "../Separator";
import SpecialButton from "../SpecialButton";
import StarRatings from "../StarRating";

const ReviewsPage = () => {
  return (
    <Container flex={1} ph={14} mv={4}>
      <ScrollView style={{ flex: 1 }}>
        <Container direction="row" justify="space-between" mv={10}>
          <Container
            bg="#F6F7FB"
            mr={10}
            p={10}
            ph={20}
            justify="center"
            align="center"
          >
            <GeneralText size={50} bold>
              4.0
            </GeneralText>
            <StarRatings bg="#F6F7FB" showCount={false} />
            <GeneralText center>25,00</GeneralText>
          </Container>
          <Container flex={2} bg="#F6F7FB" ph={12}>
            <ProgressBar progress="100" count={5} />
            <ProgressBar progress="60" count={4} />
            <ProgressBar progress="45" count={3} />
            <ProgressBar progress="20" count={2} />
            <ProgressBar progress="10" count={1} />
          </Container>
        </Container>

        <Container mt={10}>
          <Container>
            <GeneralText bold size={22}>
              Excellent Service
            </GeneralText>
            <StarRatings showCount stars={5} />
            <GeneralText styles={{ textAlign: "justify" }} color="#8693A8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </GeneralText>
            <Container direction="row" align="center" mv={10}>
              <Avatar sm rounded />
              <GeneralText ml={10} size={18} bold>
                Ehsan Ahmad
              </GeneralText>
            </Container>
            <Separator />
          </Container>
        </Container>
        <Container mt={10}>
          <Container>
            <GeneralText bold size={22}>
              Excellent Service
            </GeneralText>
            <StarRatings showCount stars={5} />
            <GeneralText styles={{ textAlign: "justify" }} color="#8693A8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </GeneralText>
            <Container direction="row" align="center" mv={10}>
              <Avatar sm rounded />
              <GeneralText ml={10} size={18} bold>
                Ehsan Ahmad
              </GeneralText>
            </Container>
            <Separator />
          </Container>
        </Container>
        <Container mt={10}>
          <Container>
            <GeneralText bold size={22}>
              Excellent Service
            </GeneralText>
            <StarRatings showCount stars={5} />
            <GeneralText styles={{ textAlign: "justify" }} color="#8693A8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </GeneralText>
            <Container direction="row" align="center" mv={10}>
              <Avatar sm rounded />
              <GeneralText ml={10} size={18} bold>
                Ehsan Ahmad
              </GeneralText>
            </Container>
            <Separator />
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ReviewsPage;
