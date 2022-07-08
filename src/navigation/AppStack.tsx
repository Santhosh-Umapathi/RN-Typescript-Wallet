import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { colors } from "../theme/colors";
// Components
import { Greeting, Profile } from "../components/UI";
//Image
import avatar from "../../assets/avi/avatar.png";
// Screens
import { WelcomeScreen, HomeScreen, CardScreen } from "../screens";
//Types
import { RootStackParamList } from "../types/navigation";
import { TouchableOpacity } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const MainStack: FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.graylight,
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
      <Screen
        name="Card"
        component={CardScreen}
        options={({ route, navigation }) => ({
          headerTitle: route?.params?.alias,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={25}
                color={colors.secondary}
                style={{
                  marginLeft: -5,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <Profile
              img={avatar}
              style={{ width: 40, height: 40 }}
              activeOpacity={0.6}
              {...props}
            />
          ),
        })}
      />
    </Navigator>
  );
};

export default MainStack;
