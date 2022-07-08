import React, { FC } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// Theme
import { colors } from "../../theme/colors";
// Types
import { TransactionAviProps } from "../../types/components";

const TransactionIcon: FC<TransactionAviProps> = ({ background, icon }) => {
  return (
    <View
      style={{
        backgroundColor: background,
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name={icon} size={30} color={colors.white} />
    </View>
  );
};

export default TransactionIcon;
