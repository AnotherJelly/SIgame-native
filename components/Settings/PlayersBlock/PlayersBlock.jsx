import React, { useCallback, useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { generateId, settings } from "../../../utils/data";
import { InputWithDelete } from "../InputDelete/InputDelete";
import { InputText } from "../InputText/InputText";
import { styles } from "./PlayersBlock.styles";

export const SettingsPlayersBlock = React.memo(function SettingsPlayersBlock({
  playersData,
  newPlayers,
  setNewPlayers
}) {

  useEffect(() => {
    setNewPlayers(playersData);
  }, [playersData, setNewPlayers]);

  const handlePlayerChange = useCallback((id, value, type) => {
    setNewPlayers(prevPlayers => {
      return prevPlayers.map(player => {
        if (player.id !== id) return player;
        if (type === 'name') return { ...player, name: value };
        if (type === 'points') {
          const parsed = value === '' || value === '-' ? value : parseInt(value, 10);
          const newPoints = isNaN(parsed) ? value : parsed;
          return { ...player, points: newPoints };
        }
        return player;
      });
    });
  }, [setNewPlayers]);

  const addPlayer = useCallback(() => {
    setNewPlayers(prev => [
      ...prev,
      { id: generateId(), name: `Игрок ${prev.length + 1}`, points: 0, hasAnswered: false }
    ]);
  }, [setNewPlayers]);

  const removePlayer = useCallback(id => {
    setNewPlayers(prev => prev.filter(p => p.id !== id));
  }, [setNewPlayers]);

  return (
    <View style={styles.players}>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>Игроки</Text>
      </View>

      <ScrollView>
        {newPlayers.map((player, index) => (
          <View key={player.id} style={styles.playerBlock}>
            <InputWithDelete
              id={player.id}
              value={player.name}
              placeholder={`Имя игрока ${index + 1}`}
              maxlength={settings.maxLengthPlayer}
              onChange={value => handlePlayerChange(player.id, value, 'name')}
              onDelete={removePlayer}
            />
            <InputText
              id={player.id}
              text={"Очки"}
              value={player.points}
              placeholder={`Изменить очки ${player.name}`}
              maxlength={settings.maxLengthPoints}
              onChange={value => handlePlayerChange(player.id, value, 'points')}
            />
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={[
          styles.addButton,
          newPlayers.length > settings.maxPlayers && styles.addButtonDisabled
        ]}
        onPress={addPlayer}
        disabled={newPlayers.length > settings.maxPlayers}
      >
        <Text style={styles.addButtonText}>Добавить игрока</Text>
      </Pressable>
    </View>
  );
});