import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";

import backgroundImage from "../../assets/bgs/background_v1.png";
import { Button, Text } from "../components";

const WelcomeScreen: FC = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={backgroundImage}
        resizeMode="stretch"
        style={{ height: 400, width: "100%" }}
      />
      <View style={{ justifyContent: "flex-end", flex: 1, marginBottom: 50 }}>
        <Text style={{ width: "45%", marginLeft: 20 }} size="large">
          {"Best way to track your money"}
        </Text>
        <Text
          style={{ width: "70%", marginLeft: 20, marginVertical: 20 }}
          size="small"
        >
          {"Best payment method, connects your money to your friends, family"}
        </Text>

        <Button onPress={() => {}} title="Enter" activeOpacity={0.8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
