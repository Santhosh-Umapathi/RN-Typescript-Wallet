import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
//Theme
import { colors } from "../theme/colors";
// Types
import { CardScreenProps } from "../types/screens/index";
// Components
import { Button, Text } from "../components";
import { CardItem } from "../components/UI/Cards";
// Data
import { CARDS_DATA } from "../data";

const CardScreen: FC<CardScreenProps> = ({ navigation, route }) => {
  const item = route.params;

  const goBack = (): void => navigation.goBack();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text size="small" style={{ color: colors.grayDark, marginBottom: 10 }}>
          Total Balance
        </Text>
        <Text size="large" style={{ color: colors.grayDark }}>
          ${item.balance}
        </Text>
      </View>
      <View
        style={{
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 100,
        }}
      >
        <CardItem
          item={item}
          index={item.id - 1}
          length={CARDS_DATA.length}
          cardScreen
        />
      </View>
      <Button title="Cancel" style={{ marginHorizontal: 60 }} onPress={goBack}>
        <Ionicons
          name="card"
          size={20}
          color={colors.white}
          style={{ marginLeft: 10 }}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
  },
});

export default CardScreen;
