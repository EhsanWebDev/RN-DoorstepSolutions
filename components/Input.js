import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { colors, sizes } from "../constants/theme";
import GeneralText from "./GeneralText";

const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{
        flex: 1,
        marginTop: sizes.m_sm * 2,
        marginHorizontal: sizes.m_sm + 5,
      }}
    >
      <GeneralText color={colors.dark} size={sizes.font_14}>
        {label}
      </GeneralText>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        style={styles.input_styles}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};
Input.defaultProps = {
  label: "Label",
  placeholder: "Type anything",
  flex: 0,
};

const styles = StyleSheet.create({
  input_styles: {
    flex: 1,
    backgroundColor: colors.light_gray,
    padding: sizes.p_sm,
    marginTop: sizes.m_sm - 5,
  },
});

export default Input;

// [
//   "default",
//   "email-address",
//   "numeric",
//   "phone-pad",
//   "number-pad",
//   "ascii-capable",
//   "numbers-and-punctuation",
//   "url",
//   "name-phone-pad",
//   "decimal-pad",
//   "twitter",
//   "web-search",
//   "ascii-capable-number-pad",
//   "visible-password",
// ];
