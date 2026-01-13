import { memo, useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Player.styles";

export const Player = memo(
  function Player({
    player,
    onAwardPoints,
    onDeductPoints,
    isQuestionSelected,
    setIsTimerPaused,
    answerTime,
    specialQuestionType,
    handleSpecialLabelStart,
    bets,
    onBetChange,
    isEveryoneNull,
  }) {
    const [isCanAnswer, setIsCanAnswer] = useState(false);
    const animWidth = useRef(new Animated.Value(100)).current;

    useEffect(() => {
      setIsCanAnswer(false);
    }, [isQuestionSelected]);

    const canBet =
      specialQuestionType === "bet" && (isEveryoneNull || player.points > 0);

    const handleCanAnswer = () => {
      if (specialQuestionType === "cat" || specialQuestionType === "bet") {
        handleSpecialLabelStart(player.id);
      }
      setIsTimerPaused(true);
      setIsCanAnswer(true);
    };

    // анимация таймера (slide-out)
    useEffect(() => {
      if (isCanAnswer && isQuestionSelected) {
        animWidth.setValue(100);
        Animated.timing(animWidth, {
          toValue: 0,
          duration: answerTime * 1000,
          useNativeDriver: false,
          easing: Easing.linear,
        }).start();
      }
    }, [isCanAnswer, isQuestionSelected, animWidth, answerTime]);

    return (
      <View style={styles.player}>
        {/* Ввод ставки */}
        {specialQuestionType === "bet" && player.points > 0 && (
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(bets[player.id] || "")}
            onChangeText={(val) => onBetChange(player.id, Number(val))}
          />
        )}

        {/* Блок с таймером и кнопками */}
        {isQuestionSelected && !player.hasAnswered && isCanAnswer && (
          <>
            <View style={styles.timer}>
              <Animated.View
                style={[
                  styles.timerLine,
                  { width: animWidth.interpolate({
                      inputRange: [0, 100],
                      outputRange: ["0%", "100%"]
                    })
                  }, // ширина уменьшается
                ]}
              />
            </View>

            <View style={styles.blockIcons}>
              <TouchableOpacity
                style={[styles.buttonIcon, { backgroundColor: "#6E8817" }]}
                onPress={() => onAwardPoints(player.id)}
              >
                <Text style={styles.iconText}>✔</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonIcon, { backgroundColor: "#900000" }]}
                onPress={() => onDeductPoints(player.id)}
              >
                <Text style={styles.iconText}>✖</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* Кнопка "Ответить" */}
        {isQuestionSelected &&
          !isCanAnswer &&
          !player.hasAnswered &&
          (canBet || specialQuestionType !== "bet") && (
            <TouchableOpacity style={styles.buttonAnswer} onPress={handleCanAnswer}>
              <Text style={styles.buttonAnswerText}>Ответить</Text>
            </TouchableOpacity>
          )}

        {/* Имя и очки */}
        <View style={styles.playerBlock}>
          <Text style={styles.playerText}>{player.name}</Text>
        </View>

        <View style={[styles.playerBlock, styles.playerBlockScore]}>
          <Text style={styles.playerText}>{player.points}</Text>
        </View>
      </View>
    );
  },
  (prev, next) => {
    if (prev.player !== next.player) return false;
    if (prev.player.points !== next.player.points) return false;
    if (
      prev.isQuestionSelected !== next.isQuestionSelected ||
      prev.isShowAnswer !== next.isShowAnswer
    )
      return false;
    if ((prev.bets[prev.player.id] || 0) !== (next.bets[next.player.id] || 0))
      return false;
    if (prev.specialQuestionType !== next.specialQuestionType) return false;
    return true;
  }
);

