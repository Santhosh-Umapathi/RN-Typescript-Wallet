import React, { FC } from "react";
import { View } from "react-native";
// Theme
import { colors } from "../../theme/colors";
// Components
import { Text } from "../../components";
// Types
import { GreetingProps } from "../../types/components";

const Greeting: FC<GreetingProps> = ({ mainText, subText }) => {
  return (
    <View>
      <Text style={{ color: colors.grayDark }}>{mainText}</Text>
      <Text size="small" style={{ color: colors.grayDark }}>
        {subText}
      </Text>
    </View>
  );
};

export default Greeting;
