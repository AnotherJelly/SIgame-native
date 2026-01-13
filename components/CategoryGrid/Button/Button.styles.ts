import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonBlock: {
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "white",
    flexBasis: "33.33%",
    minHeight: 42,
  },
  buttonTable: {
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    color: "#3CFF00",
    fontSize: 24,
    textAlign: "center",
  },
  halfWidth: {
    flexBasis: "50%",
  },
  buttonAnswered: {
    opacity: 0,
  },
});