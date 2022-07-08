import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// Types
import { RootStackParamList } from "../navigation";

export type WelcomeScreen = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export type WelcomeScreenProps = {
  navigation: WelcomeScreen;
};
