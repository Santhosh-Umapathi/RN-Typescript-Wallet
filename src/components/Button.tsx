import React, { FC } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../theme/colors";
import Text from "./Text";

type Props = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const Button: FC<Props & TouchableOpacityProps> = ({
  title,
  textStyle,
  style,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <View style={[styles.button, style]}>
        <Text style={textStyle}>{title}</Text>
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
  },
});

export default Button;
