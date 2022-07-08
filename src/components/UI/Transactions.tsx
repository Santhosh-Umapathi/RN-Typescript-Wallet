import React, { useState, useEffect, FC } from "react";
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { colors } from "../../theme/colors";
import Text from "../Text";
import cardBg from "../../../assets/bgs/background_transparent.png";

export type TransactionType = {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
};

export type TransactionSection = {
  data: TransactionType[];
};

export type TransactionAviProps = {
  icon: string;
  background: string;
};

const CardItem: FC<{
  item: TransactionType;
  index: number;
  length: number;
}> = ({ item, index, length }) => {
  const lastItem = index === length - 1;

  return (
    <TouchableOpacity
      style={{ justifyContent: "center", marginBottom: lastItem ? 0 : 25 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: item.art.background,
              width: 50,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name={item.art.icon}
              size={30}
              color={colors.white}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: colors.grayDark,
                marginBottom: 5,
              }}
            >
              {item.title}
            </Text>
            <Text
              size={"small"}
              style={{
                color: colors.grayDark,
                opacity: 0.5,
              }}
            >
              {item.subtitle}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: colors.grayDark,
              marginBottom: 5,
            }}
          >
            {item.amount}
          </Text>
          <Text
            size={"small"}
            style={{
              color: colors.grayDark,
              opacity: 0.5,
            }}
          >
            {item.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Transactions: FC<TransactionSection> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 25,
        }}
      >
        <Text
          style={{
            color: colors.secondary,
          }}
        >
          Transactions
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            size="small"
            style={{ color: colors.secondary, marginRight: 5 }}
          >
            Recent
          </Text>

          <Ionicons name="caret-down" size={20} color={colors.secondary} />
        </View>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(key: TransactionType) => `${key.id}`}
        renderItem={({ item, index }) => {
          return <CardItem {...{ item, index, length: data.length }} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Transactions;
