import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',          // display: flex
    justifyContent: 'space-between', // justify-content: space-between
    alignItems: 'center',
    marginVertical: 5,             // margin: 5px 0
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    flex: 1,                        // width: 100% в RN flex:1
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    color: '#000',
  },
});