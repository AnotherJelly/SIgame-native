import { Text, TextInput, View } from 'react-native';
import { styles } from './InputText.styles';

export function InputText({ id, text, value, placeholder, maxlength, onChange }) {
  return (
    <View key={id} style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}