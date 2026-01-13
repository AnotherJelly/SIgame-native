import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./Timer.styles";

export function Timer({ timer, isTimerPaused }) {
  const [time, setTime] = useState(timer);

  useEffect(() => {
    if (time > 0 && !isTimerPaused) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isTimerPaused]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{time}</Text>
    </View>
  );
}