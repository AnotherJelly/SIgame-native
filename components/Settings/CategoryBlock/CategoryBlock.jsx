import React, { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { settings } from "../../../utils/data";
import { SettingsCategoryElement } from "../CategoryElement/CategoryElement";
import { styles } from "./CategoryBlock.styles";

export const SettingsCategoryBlock = React.memo(function SettingsCategoryBlock({
  id,
  roundIndex,
  categories,
  setNewCategories,
  removeRound
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setNewCategories(categories, roundIndex);
  }, [categories, roundIndex, setNewCategories]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const removeCategory = useCallback((catId) => {
    setNewCategories(
      categories.filter(cat => cat.id !== catId),
      roundIndex
    );
  }, [categories, roundIndex, setNewCategories]);

  const addCategory = useCallback(() => {
    if (categories.length >= settings.maxCategories) return;

    const newQs = Array.from({ length: 5 }, (_, i) => ({
      id: `${roundIndex}-${categories.length}-${i}`,
      questionType: "ordinary",
      text: "",
      answer: ""
    }));
    const newCat = {
      id: `${roundIndex}-${categories.length}`,
      name: "",
      questions: newQs
    };

    setNewCategories(
      [...categories, newCat],
      roundIndex
    );
  }, [categories, roundIndex, setNewCategories]);

  const handleCategoryChange = useCallback((catId, categoryName, questionId, value, field) => {
    const updated = categories.map(cat => {
      if (cat.id !== catId) return cat;
      const copyCat = { ...cat };
      if (categoryName != null) copyCat.name = categoryName;
      if (questionId != null) {
        copyCat.questions = copyCat.questions.map(q =>
          q.id !== questionId ? q : { ...q, [field]: value }
        );
      }
      return copyCat;
    });
    setNewCategories(updated, roundIndex);
  }, [categories, roundIndex, setNewCategories]);

  return (
    <View style={styles.players}>
      <View style={styles.subtitle}>
        <View style={styles.subtitleDelete}>
          <Text style={styles.roundText}>Раунд {roundIndex + 1}</Text>
          <Pressable style={styles.deleteButton} onPress={() => removeRound(id)}>
            <Text style={styles.deleteButtonText}>×</Text>
          </Pressable>
        </View>
        <Pressable style={styles.collapseButton} onPress={toggleCollapse}>
          <Text>{isCollapsed ? 'Развернуть' : 'Свернуть'}</Text>
        </Pressable>
      </View>

      {!isCollapsed && (
        <ScrollView>
          {categories.map((category, catIndex) => (
            <SettingsCategoryElement
              key={category.id}
              category={category}
              catIndex={catIndex}
              removeCategory={removeCategory}
              handleCategoryChange={handleCategoryChange}
              roundIndex={roundIndex}
            />
          ))}

          <Pressable
            style={[
              styles.addButton,
              categories.length >= settings.maxCategories && styles.addButtonDisabled
            ]}
            onPress={addCategory}
            disabled={categories.length >= settings.maxCategories}
          >
            <Text style={styles.addButtonText}>Добавить категорию</Text>
          </Pressable>
        </ScrollView>
      )}
    </View>
  );
});