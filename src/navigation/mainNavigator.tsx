import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./AppStack";

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
