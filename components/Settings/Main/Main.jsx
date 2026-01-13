import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { SettingsPlayersBlock } from "../PlayersBlock/PlayersBlock";
import { SettingsRoundBlock } from "../RoundBlock/RoundBlock";
import { styles } from "./Main.styles";

export default function SettingsScreen({ rounds, playersData, handleSaveSettings }) {
  const [newRounds, setNewRounds] = useState(rounds);
  const [newPlayers, setNewPlayers] = useState(playersData);

  useEffect(() => {
    setNewRounds(rounds);
    setNewPlayers(playersData);
  }, [rounds, playersData]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Настройки</Text>

      <SettingsPlayersBlock
        playersData={playersData}
        newPlayers={newPlayers}
        setNewPlayers={setNewPlayers}
      />

      <SettingsRoundBlock
        newRounds={newRounds}
        setNewRounds={setNewRounds}
      />

      <Pressable
        style={styles.saveButton}
        onPress={() => handleSaveSettings(newPlayers, newRounds)}
      >
        <Text style={styles.saveButtonText}>Сохранить изменения</Text>
      </Pressable>
    </ScrollView>
  );
}