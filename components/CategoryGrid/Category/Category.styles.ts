import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titleWrapper: {
    flexBasis: "100%",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    color: "white",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    minHeight: 50,
    textAlignVertical: 'center'
  },
  buttonBlock: {
    borderWidth: 1,
    borderColor: "white",
    flexBasis: "33.33%",
    minHeight: 44,
  },
  halfWidth: {
    flexBasis: "50%",
  },
});