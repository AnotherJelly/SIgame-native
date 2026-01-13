import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialPlayers, playersReducer } from "../hooks/playersReducer";
import { fetchRounds, saveRounds } from "../services/api";
import { validatePlayers, validateRounds } from "../utils/validate";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [playersData, dispatchPlayers] = useReducer(playersReducer, initialPlayers);
  const [rounds, setRounds] = useState([]);

  // загрузка данных
  useEffect(() => {
    async function loadRounds() {
      try {
        const data = await fetchRounds();
        setRounds(data);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
        alert(`Ошибка загрузки: ${err}`);
      }
    }
    loadRounds();
  }, []);

  const handleSaveSettings = async (newPlayers, newRounds) => {
    if (!validateRounds(newRounds)) {
      alert('Невозможно сохранить: проверьте все поля раундов');
      return;
    }
    if (!validatePlayers(newPlayers)) {
      alert('Невозможно сохранить: проверьте все поля игроков');
      return;
    }

    dispatchPlayers({ type: 'SET', payload: newPlayers });
    setRounds(newRounds);
    try {
      await saveRounds(newRounds);
      alert('Данные успешно сохранены');
    } catch (err) {
      console.error("Ошибка сохранения:", err);
      alert(`Ошибка сохранения: ${err}`);
    } finally {  
      
    }
  };

  const handleAwardPoints = (playerId, value) => {
    dispatchPlayers({ type: 'AWARD_POINTS', payload: { playerId, value } });
  };

  const handleDeductPoints = (playerId, value) => {
    dispatchPlayers({ type: 'DEDUCT_POINTS', payload: { playerId, value } });
  };

  const handleResetAnswers = (updatedPlayers) => {
    if (updatedPlayers) {
      dispatchPlayers({ type: 'SET', payload: updatedPlayers });
    } else {
      dispatchPlayers({ type: 'RESET_ANSWERS' });
    }
  };

  return (
    <GameContext.Provider
      value={{
        playersData,
        rounds,
        handleSaveSettings,
        handleAwardPoints,
        handleDeductPoints,
        handleResetAnswers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);