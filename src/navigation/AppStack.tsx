import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Theme
import { colors } from "../theme/colors";
// Components
import { Greeting, Profile } from "../components/UI";
//Image
import avatar from "../../assets/avi/avatar.png";
// Screens
import { WelcomeScreen, HomeScreen } from "../screens";
//Types
import { RootStackParamList } from "../types/navigation";

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
              activeOpacity={0.6}
              {...props}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default MainStack;
