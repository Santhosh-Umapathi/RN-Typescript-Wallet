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
import { colors } from "../../theme/colors";
import Text from "../Text";
import cardBg from "../../../assets/bgs/background_transparent.png";

type CardType = {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
};

type CardSection = {
  data: CardType[];
};

const CardItem: FC<{ item: CardType; index: number; length: number }> = ({
  item,
  index,
  length,
}) => {
  const lastItem = index === length - 1;

  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        width: 320,
        marginRight: lastItem ? 10 : 40,
        overflow: "hidden",
        borderRadius: 25,
      }}
    >
      <ImageBackground
        source={cardBg}
        style={{
          backgroundColor:
            index % 2
              ? colors.accent
              : lastItem
              ? colors.grayDark
              : colors.primary,
          height: "100%",
          borderRadius: 25,
          overflow: "hidden",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ color: colors.white, marginTop: 20, marginLeft: 20 }}
          >{`******${item.accountNo}`}</Text>

          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                size="small"
                style={{
                  color: lastItem ? colors.white : colors.secondary,
                  marginBottom: 5,
                }}
              >{`Total Balance`}</Text>

              <Text
                style={{ color: lastItem ? colors.white : colors.secondary }}
              >{`$ ${item.balance}`}</Text>
            </View>

            <Image
              source={item.logo}
              style={{ height: 30, width: 100 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Cards: FC<CardSection> = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(key: CardType) => `${key.id}`}
        renderItem={({ item, index }) => {
          return <CardItem {...{ item, index, length: data.length }} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        style={{ height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 30,
  },
});

export default Cards;
