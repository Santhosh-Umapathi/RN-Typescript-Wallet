import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../theme/colors";
import Greeting from "../components/UI/Greeting";
import Profile from "../components/UI/Profile";

import avatar from "../../assets/avi/avatar.png";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const MainStack: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTintColor: colors.secondary,
        headerShadowVisible: false,
      }}
    >
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerLeft: (props) => (
            <Greeting mainText="Hey Coby!" subText="Welcome back" {...props} />
          ),
          headerRight: (props) => (
            <Profile
              img={avatar}
              style={{ width: 40, height: 40 }}
              {...props}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default MainStack;
