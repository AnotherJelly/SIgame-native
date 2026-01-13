import React, { useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { generateId, settings } from "../../../utils/data";
import { SettingsCategoryBlock } from "../CategoryBlock/CategoryBlock";
import { styles } from "./RoundBlock.styles";

export const SettingsRoundBlock = React.memo(function SettingsRoundBlock({ newRounds, setNewRounds }) {

  const removeRound = useCallback((id) => {
    setNewRounds(prev => prev.filter(r => r.id !== id));
  }, [setNewRounds]);

  const addRound = useCallback(() => {
    setNewRounds(prev => {
      if (prev.length >= settings.maxRounds) return prev;
      const index = prev.length;
      const newRound = {
        id: generateId(),
        name: `Round ${index + 1}`,
        categories: [
          {
            id: generateId(),
            name: "",
            questions: Array.from({ length: 5 }, () => ({
              id: generateId(),
              questionType: "ordinary",
              text: "",
              answer: ""
            }))
          }
        ]
      };
      return [...prev, newRound];
    });
  }, [setNewRounds]);

  const setNewCategories = useCallback((updatedCategories, roundIndex) => {
    setNewRounds(prev => {
      const updatedRounds = [...prev];
      updatedRounds[roundIndex] = {
        ...updatedRounds[roundIndex],
        categories: updatedCategories
      };
      return updatedRounds;
    });
  }, [setNewRounds]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {newRounds.map((round, roundIndex) => (
          <SettingsCategoryBlock
            key={round.id}
            id={round.id}
            roundIndex={roundIndex}
            categories={round.categories}
            setNewCategories={setNewCategories}
            removeRound={removeRound}
          />
        ))}

        <Pressable
          style={[
            styles.addButton,
            styles.addButtonWide,
            newRounds.length >= settings.maxRounds && styles.addButtonDisabled
          ]}
          onPress={addRound}
          disabled={newRounds.length >= settings.maxRounds}
        >
          <Text style={styles.addButtonText}>Добавить раунд</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
});