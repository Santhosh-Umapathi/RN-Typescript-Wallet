import React, { FC, ReactNode, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../Text";
import { SendMoneySection } from "../../types/components";
import { colors } from "../../theme/colors";
import { SEND_MONEY_DATA } from "../../data";

const SendMoney: FC<SendMoneySection> = ({ data }) => {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints: (number | string)[] = [280, 85];

  const renderContent = (): ReactNode => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          minHeight: 280,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 25,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: colors.grayDark }}>{"Send Money to"}</Text>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name={"add"} size={20} color={colors.accent} />

              <Text size="small" style={{ color: colors.accent }}>
                {"Add"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(key) => `${key.id}`}
          contentContainerStyle={{ paddingHorizontal: 25, height: 140 }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: item.background,
                  width: 100,
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  borderRadius: 10,
                  marginRight: 25,
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.img}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                  resizeMode="cover"
                />
                <Text
                  size="small"
                  style={{
                    marginTop: 20,
                    width: "100%",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text size="small">{item.amount}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      initialSnap={1}
      borderRadius={25}
      enabledContentTapInteraction={false}
      enabledBottomInitialAnimation={true}
      overflow="hidden"
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default SendMoney;
