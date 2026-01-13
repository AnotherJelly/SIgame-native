
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  players: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 15,
  },
  subtitle: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  playerBlock: {
    marginVertical: 5,
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
  addButtonDisabled: {
    backgroundColor: '#900000',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});