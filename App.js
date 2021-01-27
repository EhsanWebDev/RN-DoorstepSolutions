import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "./components/Container";
import Login from "./screens/Auth/Login";
import * as Font from "expo-font";
import Signup from "./screens/Auth/Signup";
import Home from "./screens/Home/Home";
export default function App() {
  const [loaded, setLoaded] = useState(null);
  const loadFonts = async () => {
    await Font.loadAsync({
      Nunito: require("./assets/fonts/Poppins-Regular.ttf"),
      NunitoBold: require("./assets/fonts/Poppins-Bold.ttf"),
    })
      .then(() => {
        setLoaded(true);
      })
      .catch((e) => {
        setLoaded(false);
      });
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (!loaded) {
    return null;
  }
  return (
    <Container flex={1} mt={60}>
      <Login />
      {/* <Signup /> */}
      {/* <Home /> */}
    </Container>
  );
}
