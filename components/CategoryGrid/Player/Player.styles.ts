import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  player: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    justifyContent: "flex-end",
    gap: 5,
    flexBasis: "33%",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    fontSize: 18,
    padding: 5,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
  playerBlock: {
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  playerBlockScore: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  playerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonAnswer: {
    backgroundColor: "#900000",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    transform: [{ scale: 1 }],
  },
  buttonAnswerText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  timer: {
    width: "100%",
    height: 5,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  timerLine: {
    backgroundColor: "black",
    height: "100%",
  },
  blockIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 5,
  },
  buttonIcon: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconText: {
    color: "white",
    fontSize: 16,
  },
});
