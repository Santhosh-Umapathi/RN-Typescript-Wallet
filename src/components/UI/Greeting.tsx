import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../../theme/colors";

import { Button, Text } from "../../components";

type GreetingProps = {
  mainText: string;
  subText: string;
};

const Greeting: FC<GreetingProps> = ({ mainText, subText }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.grayDark }}>{mainText}</Text>
      <Text size="small" style={{ color: colors.grayDark }}>
        {subText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.secondary,
  },
});

export default Greeting;
