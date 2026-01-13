import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { settings } from "../../../utils/data";
import { InputWithDelete } from "../InputDelete/InputDelete";
import { InputText } from "../InputText/InputText";
import { styles } from "./CategoryElement.styles";

export function SettingsCategoryElement({
  category,
  catIndex,
  removeCategory,
  handleCategoryChange,
  roundIndex
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <View style={styles.block} key={category.id}>
      <InputWithDelete
        id={category.id}
        value={category.name}
        placeholder={`Название категории ${catIndex + 1}`}
        maxlength={settings.maxLengthCategory}
        onChange={value => handleCategoryChange(category.id, value)}
        onDelete={removeCategory}
      />

      <Pressable style={styles.collapseButton} onPress={toggleCollapse}>
        <Text style={styles.collapseText}>
          {isCollapsed ? 'Развернуть' : 'Свернуть'}
        </Text>
      </Pressable>

      {!isCollapsed &&
        category.questions.map((curQuestion, qIndex) => (
          <View style={styles.questionBlock} key={curQuestion.id}>
            <View>
              <InputText
                id={curQuestion.id}
                text={`${100 * (roundIndex + 1) * (qIndex + 1)}:`}
                value={curQuestion.text ?? ''}
                placeholder={`Вопрос ${qIndex + 1}`}
                maxlength={settings.maxLengthQuestion}
                onChange={value =>
                  handleCategoryChange(category.id, null, curQuestion.id, value, 'text')
                }
              />
              {/* Замена select */}
              <View style={styles.selectContainer}>
                {['ordinary', 'cat', 'bet'].map(option => (
                  <Pressable
                    key={option}
                    style={[
                      styles.selectOption,
                      curQuestion.questionType === option && styles.selectOptionActive
                    ]}
                    onPress={() =>
                      handleCategoryChange(category.id, null, curQuestion.id, option, 'questionType')
                    }
                  >
                    <Text style={styles.selectText}>
                      {option === 'ordinary' ? 'Стандартный' : option === 'cat' ? 'Кот в мешке' : 'Со ставкой'}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <InputText
              id={curQuestion.id}
              text={"Ответ:"}
              value={curQuestion.answer ?? ''}
              placeholder={`Ответ ${qIndex + 1}`}
              maxlength={settings.maxLengthQuestion}
              onChange={value =>
                handleCategoryChange(category.id, null, curQuestion.id, value, 'answer')
              }
            />

            
          </View>
        ))}
    </View>
  );
}