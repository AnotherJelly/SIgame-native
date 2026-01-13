
import React from 'react';
import SettingsScreen from "../../components/Settings/Main/Main";
import { useGame } from "../../context/GameContext";

export default function TabTwoScreen() {
  const { rounds, playersData, handleSaveSettings } = useGame();
  
  return (
    <SettingsScreen
      rounds={rounds}
      playersData={playersData}
      handleSaveSettings={handleSaveSettings}
    />
  );
}