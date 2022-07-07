import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../theme/colors";
import { StyleProp } from "react-native";

type ProfileProps = {
  img: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const Profile: FC<ProfileProps & TouchableOpacityProps> = ({
  img,
  containerStyle,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Image source={img} style={style} resizeMode={"cover"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    width: 40,
    height: 40,
    borderRadius: 40 / 3,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
