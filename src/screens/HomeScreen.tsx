import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";

import backgroundImage from "../../assets/bgs/background_v1.png";
import { Button, Text } from "../components";

const HomeScreen: FC = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.secondary,
  },
});

export default HomeScreen;
