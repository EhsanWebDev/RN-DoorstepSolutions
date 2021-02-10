import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { images } from "../../constants/images";
import { colors, layout } from "../../constants/theme";
import Container from "../Container";
import GeneralText from "../GeneralText";
import AboutPage from "./AboutPage";
import ReviewsPage from "./ReviewsPage";
import ServicesPage from "./ServicesPage";

const TabView = () => {
  const [active, setActive] = useState(1);
  const setTabActive = (value) => {
    setActive(value);
  };

  return (
    <Container flex={1}>
      <Container
        direction="row"
        justify="space-between"
        ph={12}
        styles={{
          borderBottomColor: colors.borderColor,
          borderBottomWidth: 2,
        }}
      >
        <Container>
          <TouchableOpacity onPress={() => setTabActive(1)}>
            <GeneralText
              size={20}
              ph={20}
              pv={10}
              color={active === 1 ? colors.black : "#BEC5D1"}
              styles={
                active === 1
                  ? { borderBottomColor: "blue", borderBottomWidth: 3 }
                  : {}
              }
            >
              About
            </GeneralText>
          </TouchableOpacity>
        </Container>

        <TouchableOpacity onPress={() => setTabActive(2)}>
          <GeneralText
            size={20}
            ph={20}
            pv={10}
            color={active === 2 ? colors.black : "#BEC5D1"}
            styles={
              active === 2
                ? { borderBottomColor: "blue", borderBottomWidth: 3 }
                : {}
            }
          >
            Services
          </GeneralText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabActive(3)}>
          <GeneralText
            size={20}
            ph={20}
            pv={10}
            color={active === 3 ? colors.black : "#BEC5D1"}
            styles={
              active === 3
                ? { borderBottomColor: "blue", borderBottomWidth: 3 }
                : {}
            }
          >
            Reviews
          </GeneralText>
        </TouchableOpacity>
      </Container>
      {active === 1 && <AboutPage />}
      {active === 2 && <ServicesPage />}
      {active === 3 && <ReviewsPage />}
    </Container>
  );
};

export default TabView;
