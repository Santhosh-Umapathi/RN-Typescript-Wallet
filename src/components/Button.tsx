import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// Theme
import { colors } from "../theme/colors";
// Components
import Text from "./Text";
// Types
import { CustomButtonProps } from "../types/components";

const Button: FC<CustomButtonProps> = ({
  title,
  textStyle,
  style,
  onPress,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <View style={[styles.button, style]}>
        <Text style={textStyle}>{title}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
  },
});

export default Button;
