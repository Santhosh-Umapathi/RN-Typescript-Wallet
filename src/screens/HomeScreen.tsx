import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";

import backgroundImage from "../../assets/bgs/background_v1.png";
import { Button, Text } from "../components";
import Cards from "../components/UI/Cards";
import { DATA } from "../data";

const HomeScreen: FC = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Cards data={DATA} />
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
