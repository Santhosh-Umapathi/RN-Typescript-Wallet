import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
  TextProps,
} from "react-native";

export type CardType = {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
};

export type CardSection = {
  data: CardType[];
};

export type GreetingProps = {
  mainText: string;
  subText: string;
};

// Custome Types + Exisiting Types combined
export type ProfileProps = {
  img: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

export type TransactionType = {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
};

export type TransactionSection = {
  data: TransactionType[];
};

export type TransactionAviProps = {
  icon: string;
  background: string;
};

export type SendMoney = {
  id: number;
  name: string;
  amount: string;
  background: string;
  img: ImageSourcePropType;
};

export type SendMoneySection = {
  data: SendMoney[];
};

export type Size = "small" | "medium" | "large";

export type CustomTextProps = {
  style?: StyleProp<TextStyle>;
  size?: Size;
  bold?: boolean;
} & TextProps;

export type CustomButtonProps = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;
