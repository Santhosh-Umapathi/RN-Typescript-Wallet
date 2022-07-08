import { colors } from "../theme/colors";
//Types
import { CardSection, TransactionSection } from "../types/components";

export const CARDS_DATA: CardSection["data"] = [
  {
    id: 1,
    accountNo: "1234",
    balance: 100,
    alias: "Chase",
    logo: require("../../assets/cards/mc.png"),
  },
  {
    id: 2,
    accountNo: "1789",
    balance: 500,
    alias: "Bank of America",
    logo: require("../../assets/cards/visa_white.png"),
  },
  {
    id: 3,
    accountNo: "1729",
    balance: 4000,
    alias: "Sandler",
    logo: require("../../assets/cards/visa_white.png"),
  },
];

export const TRANSACTION_DATA: TransactionSection["data"] = [
  {
    id: 1,
    title: "Taxt",
    subtitle: "Uber Car",
    amount: "-$10",
    date: "20/2/2022",
    art: {
      icon: "local-taxi",
      background: colors.primary,
    },
  },
  {
    id: 2,
    title: "Shopping",
    subtitle: "Amazon books",
    amount: "-$30",
    date: "10/5/2022",
    art: {
      icon: "shopping-cart",
      background: colors.secondary,
    },
  },
  {
    id: 3,
    title: "Travel",
    subtitle: "Expedia - Venice Trip",
    amount: "-$300",
    date: "1/3/2022",
    art: {
      icon: "flight",
      background: colors.tertiary,
    },
  },
];
