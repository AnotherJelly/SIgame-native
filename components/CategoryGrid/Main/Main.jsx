import { ScrollView, View } from "react-native";
import { useCategoryGrid } from "../../../hooks/useCategoryGrid";
import { settings } from "../../../utils/data";
import { Player } from "../Player/Player";
import { styles } from './Main.styles';

export default function CategoryGrid({
  playersData,
  rounds,
  onAwardPoints,
  onDeductPoints,
  resetAnswers,
}) {
  const { state, setState, handlers, computed } = useCategoryGrid({
    playersData,
    rounds,
    onAwardPoints,
    onDeductPoints,
    resetAnswers,
  });

  return (
    <ScrollView style={styles.scrollView}>      
        <View style={styles.deskGrid}>{computed.mainArea}</View>

        <View style={styles.players}>
          {playersData.map((player) => (
            <Player
              key={player.id}
              player={player}
              onAwardPoints={handlers.handleAward}
              onDeductPoints={handlers.handleDeduct}
              isQuestionSelected={state.isQuestionSelected}
              isShowAnswer={state.isShowAnswer}
              setIsTimerPaused={setState.setIsTimerPaused}
              answerTime={settings.answerTime}
              specialQuestionType={state.specialLabel?.question.questionType}
              handleSpecialLabelStart={handlers.handleSpecialLabelStart}
              bets={state.bets}
              onBetChange={handlers.handleBetChange}
              isEveryoneNull={computed.isEveryoneNull}
            />
          ))}
        </View>
    </ScrollView>
  );
}