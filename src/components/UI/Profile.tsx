import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
// Theme
import { colors } from "../../theme/colors";
// Types
import { ProfileProps } from "../../types/components";

const Profile: FC<ProfileProps> = ({
  img,
  containerStyle,
  style,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
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
