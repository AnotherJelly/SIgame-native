import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 15,
  },
  addButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    maxWidth: '50%',
  },
  addButtonWide: {
    maxWidth: '100%',
  },
  addButtonDisabled: {
    backgroundColor: '#900000',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});