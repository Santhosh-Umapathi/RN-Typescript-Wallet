import React, { FC, ReactNode } from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextPropTypes,
  TextPropsIOS,
  TextProps,
} from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

type Size = "small" | "medium" | "large";

type Props = {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  size?: Size;
};

const TextComponent: FC<Props & TextProps> = ({
  children,
  style,
  size = "medium",
  ...props
}) => {
  return (
    <Text style={[{ ...styles[size] }, styles.text, style]} {...props}>
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
