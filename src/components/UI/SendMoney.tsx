import React, { FC, ReactNode, useRef } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";
// Components
import Text from "../Text";
// Types
import { SendMoneySection } from "../../types/components";
// Theme
import { colors } from "../../theme/colors";

const SendMoney: FC<SendMoneySection> = ({ data }) => {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints: (number | string)[] = [280, 85];

  const renderContent = (): ReactNode => {
    const sendMoneyHandler = (): void => sheetRef.current?.snapTo(1);
    const openSheet = (): void => sheetRef.current?.snapTo(0);
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
          <Text bold style={{ color: colors.grayDark }}>
            {"Send Money to"}
          </Text>
          <TouchableOpacity onPress={openSheet}>
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
              <TouchableOpacity onPress={sendMoneyHandler}>
                <View
                  style={{
                    backgroundColor: item.background,
                    width: 100,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
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
              </TouchableOpacity>
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

export default SendMoney;
