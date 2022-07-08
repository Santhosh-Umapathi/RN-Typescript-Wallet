import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
// Theme
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { CustomTextProps } from "../types/components";

const TextComponent: FC<CustomTextProps> = ({
  children,
  style,
  size = "medium",
  bold = false,
  ...props
}) => {
  return (
    <Text
      style={[{ ...styles[size] }, styles.text, style, bold && styles.bold]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: fonts.latoBold,
  },
  text: { color: colors.white },
  medium: {
    fontSize: 18,
    fontFamily: fonts.lato,
  },
  large: {
    fontSize: 32,
    fontFamily: fonts.latoBold,
  },
  small: {
    fontSize: 14,
    fontFamily: fonts.lato,
  },
});

export default TextComponent;
