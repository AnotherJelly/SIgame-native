import React from "react";
import { Text, View } from "react-native";
import { Button } from "../Button/Button";
import { styles } from './Category.styles';

export const Category = React.memo(function Category({
  name,
  questions,
  onClick,
  answeredQuestions,
  questionText,
  roundIndex,
}) {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.titleWrapper}>
        <Text
          style={styles.categoryTitle}
          numberOfLines={2} // максимум две строки
          adjustsFontSizeToFit={true} // уменьшает шрифт, если не влезает
        >
          {name}
        </Text>
      </View>
      {questions.map((question, index) => {
        const isAnswered = answeredQuestions.includes(question.id);
        const isHalf = index > 2;

        return (
          <Button
            key={question.id}
            value={100 * (roundIndex + 1) * (index + 1)}
            question={question}
            onClick={onClick}
            isButtonBlinking={questionText === question}
            isHalf={isHalf}
            disabled={isAnswered}
          />
        );
      })}
    </View>
  );
});