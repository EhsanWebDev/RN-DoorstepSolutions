import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { images } from "../../constants/images";
import { colors, layout, sizes } from "../../constants/theme";
import UnderLineButton from "../../components/UnderLineButton";
export default class Login extends Component {
  render() {
    return (
      <Container flex={1}>
        <Container>
          <Image
            source={images.logo}
            style={{ alignSelf: "center", width: 140, height: 140 }}
          />
          <GeneralText size={32} bold center mt={20}>
            Login to Your Account
          </GeneralText>
        </Container>

        <Container flex={1} mt={35} mb={20}>
          <Input label="User name or Email" placeholder="johnDoe@email.co" />
          <Input label="Password" placeholder="********" />
          <Button width={layout.width * 0.95} br={0} />
        </Container>

        <Container mv={20} mh={10} direction="row" justify="space-between">
          <UnderLineButton label="Forgot Password" />
          <UnderLineButton label="Signup with Email" />
        </Container>

        <Container mv={10}>
          <Container
            styles={{
              width: layout.width,
              height: 1.5,
              backgroundColor: colors.borderColor,
            }}
          />
          <Container
            justify="center"
            align="center"
            styles={{
              width: 40,
              height: 40,
              borderColor: colors.borderColor,
              borderWidth: 1,
              borderRadius: 20,
              alignSelf: "center",
              position: "absolute",
              bottom: -18,
            }}
          >
            <GeneralText>OR</GeneralText>
          </Container>
        </Container>

        <Container mv={20} mh={10}>
          <GeneralText>Continue With</GeneralText>
          <Container direction="row" justify="space-between">
            <Button
              width={layout.width * 0.45}
              br={0}
              bgColor="#0a66c2"
              label="Facebook"
              social
              iconName="facebook"
              mt={sizes.m_sm}
            />
            <Button
              width={layout.width * 0.45}
              br={0}
              bgColor="#db4437"
              label="Google"
              social
              iconName="google"
              mt={sizes.m_sm}
            />
          </Container>
        </Container>
      </Container>
    );
  }
}
