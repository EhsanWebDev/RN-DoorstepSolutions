import React from "react";
import { StyleSheet, Image } from "react-native";
import { images } from "../constants/images";

const Avatar = ({ sm, rounded }) => {
  let styleSM = {};

  styleSM = sm && { width: 60, height: 60, borderRadius: rounded && 30 };

  return <Image source={images.men1} style={[styles.imgStyle, styleSM]} />;
};
const styles = StyleSheet.create({
  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
export default Avatar;
