import { memo, useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { styles } from './Button.styles';

export const Button = memo(function Button({ value, question, onClick, isButtonBlinking, isHalf, disabled }) {
  const opacity = useRef(new Animated.Value(1)).current;

  // мигание кнопки
  useEffect(() => {
    if (isButtonBlinking) {
      const blink = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
        ])
      );
      blink.start();
      return () => blink.stop();
    } else {
      opacity.setValue(1);
    }
  }, [isButtonBlinking, opacity]);

  return (
    <View style={[styles.buttonBlock, isHalf && styles.halfWidth]}>
      <Animated.View style={{ opacity, justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.buttonTable}
          onPress={() => onClick(value, question)}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, disabled && styles.buttonAnswered]}>{value}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
});