import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  timerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: [{ translateY: -50 }, { translateX: 35 }],
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 10,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  timerText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});