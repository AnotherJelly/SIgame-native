import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(39 9 131)",
  },
  categoryGrid: {
    flexGrow: 1, // важно, чтобы контент мог растягиваться
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100%",
  },
  deskGrid: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(0,4,81,1)",
    borderWidth: 20,
    borderColor: "black",
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
    maxWidth: "90%",
    alignContent: "center",
  },
  players: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
});