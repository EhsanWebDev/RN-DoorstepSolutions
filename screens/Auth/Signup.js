import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { images } from "../../constants/images";
import { layout, sizes } from "../../constants/theme";
import UnderLineButton from "../../components/UnderLineButton";
export default class Signup extends Component {
  render() {
    return (
      <Container flex={1}>
        <Container flex={1}>
          <Image
            source={images.logo}
            style={{ alignSelf: "center", width: 140, height: 140 }}
          />
          <GeneralText size={34} bold center mt={20}>
            Create New Account
          </GeneralText>
        </Container>
        <Container flex={1.5}>
          <Container flex={0} direction="row" justify="space-between">
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
          </Container>
          <Container flex={1}>
            <Input label="User name or Email" placeholder="johnDoe@email.co" />
            <Input label="Password" placeholder="********" />
          </Container>
          <Button width={layout.width * 0.95} br={0} />
        </Container>

        <Container mv={30} mh={10}>
          <GeneralText>Continue With</GeneralText>
          <Container direction="row" justify="space-between">
            <Button
              width={layout.width * 0.44}
              br={0}
              bgColor="#0a66c2"
              label="Facebook"
              social
              iconName="facebook"
              mt={sizes.m_sm}
            />
            <Button
              width={layout.width * 0.44}
              br={0}
              bgColor="#ea4335"
              label="Google"
              social
              iconName="google"
              mt={sizes.m_sm}
            />
          </Container>
        </Container>
        <Container direction="row" justify="center" mv={10}>
          <GeneralText mr={20}>Already Have an Account?</GeneralText>
          <UnderLineButton label="Sign in Here" />
        </Container>
      </Container>
    );
  }
}
