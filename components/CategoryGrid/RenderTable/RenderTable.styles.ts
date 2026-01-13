import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  questionContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    opacity: 1,
    width: "100%",
  },
  questionText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#900000",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    transform: [{ scale: 1 }],
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  answerText: {
    opacity: 1,
  },
  specialLabel: {
    fontStyle: "italic",
  },
});
