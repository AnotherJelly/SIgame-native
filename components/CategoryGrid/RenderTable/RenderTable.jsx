import { Text, TouchableOpacity, View } from "react-native";
import { Category } from "../Category/Category";
import { Timer } from "../Timer/Timer";
import { styles } from "./RenderTable.styles";

export function RenderTable({
  showRoundIntro,
  specialLabel,
  selectedQuestion,
  roundIntroText,
  setSelectedQuestion,
  setSpecialLabel,
  isShowAnswer,
  isShowTimer,
  timer,
  isTimerPaused,
  handleShowAnswer,
  handleAnswer,
  isDisabledCloseBtn,
  categories,
  handleButtonClick,
  answeredQuestions,
  isButtonBlinking,
  activeRoundIndex,
}) {
  if (showRoundIntro) {
    return <RenderRoundIntro text={roundIntroText} />;
  } else if (specialLabel) {
    return (
      <RenderSpecialLabel
        label={specialLabel}
        setSelectedQuestion={setSelectedQuestion}
        setSpecialLabel={setSpecialLabel}
      />
    );
  } else if (selectedQuestion) {
    return (
      <RenderSelectedQuestion
        question={selectedQuestion.question}
        isShowAnswer={isShowAnswer}
        isShowTimer={isShowTimer}
        timer={timer}
        isTimerPaused={isTimerPaused}
        handleShowAnswer={handleShowAnswer}
        handleAnswer={handleAnswer}
        isDisabledCloseBtn={isDisabledCloseBtn}
      />
    );
  } else {
    return (
      <RenderCategories
        categories={categories}
        handleButtonClick={handleButtonClick}
        answeredQuestions={answeredQuestions}
        isButtonBlinking={isButtonBlinking}
        activeRoundIndex={activeRoundIndex}
      />
    );
  }
}

function RenderSelectedQuestion({
  question,
  isShowAnswer,
  isShowTimer,
  timer,
  isTimerPaused,
  handleShowAnswer,
  handleAnswer,
  isDisabledCloseBtn,
}) {
  return (
    <View style={styles.questionContainer}>
      {!isShowAnswer && isShowTimer && (
        <Timer timer={timer} isTimerPaused={isTimerPaused} />
      )}

      {!isShowAnswer ? (
        <>
          <Text style={styles.questionText}>{question.text}</Text>
          <TouchableOpacity style={styles.button} onPress={handleShowAnswer}>
            <Text style={styles.buttonText}>Показать ответ</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={[styles.questionText, styles.answerText]}>
            {question.answer}
          </Text>
          {!isDisabledCloseBtn && (
            <TouchableOpacity style={styles.button} onPress={handleAnswer}>
              <Text style={styles.buttonText}>Закрыть вопрос</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
}

function RenderRoundIntro({ text }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{text}</Text>
    </View>
  );
}

function RenderSpecialLabel({ label, setSelectedQuestion, setSpecialLabel }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={[styles.questionText, styles.specialLabel]}>{label.label}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSelectedQuestion({ value: label.value, question: label.question });
          setSpecialLabel(null);
        }}
      >
        <Text style={styles.buttonText}>Показать вопрос</Text>
      </TouchableOpacity>
    </View>
  );
}

function RenderCategories({
  categories,
  handleButtonClick,
  answeredQuestions,
  isButtonBlinking,
  activeRoundIndex,
}) {
  return (
    <>
      {categories.map((category) => (
        <Category
          key={category.id}
          name={category.name}
          questions={category.questions}
          onClick={handleButtonClick}
          answeredQuestions={answeredQuestions}
          questionText={isButtonBlinking}
          roundIndex={activeRoundIndex}
        />
      ))}
    </>
  );
}