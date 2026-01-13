import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './InputDelete.styles';

export function InputWithDelete({ id, value, placeholder, maxlength, onChange, onDelete }) {
  return (
    <View key={id} style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        onChangeText={onChange} // onChangeText вместо onChange
        style={styles.input}
      />
      <Pressable style={styles.deleteButton} onPress={() => onDelete(id)}>
        <Text style={styles.deleteText}>×</Text>
      </Pressable>
    </View>
  );
}


