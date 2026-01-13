import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 5,
  },
  questionBlock: {
    justifyContent: 'space-around',
    gap: 5, // RN 0.70+ поддерживает gap, иначе можно margin
    marginVertical: 5,
  },
  collapseButton: {
    margin: 3,
    padding: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-start',
  },
  collapseText: {
    fontSize: 12,
  },
  selectContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  selectOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 5,
  },
  selectOptionActive: {
    backgroundColor: '#ddd',
  },
  selectText: {
    fontSize: 12,
  },
});