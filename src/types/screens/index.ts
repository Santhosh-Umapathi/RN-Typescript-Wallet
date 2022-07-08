import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Types
import { RootStackParamList } from "../navigation";

export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type CardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Card"
>;
