import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
//Theme
import { colors } from "../theme/colors";
// Components
import { Cards, Transactions } from "../components/UI";
// Data
import { CARDS_DATA, TRANSACTION_DATA } from "../data";

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Cards data={CARDS_DATA} />

      <Transactions data={TRANSACTION_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
