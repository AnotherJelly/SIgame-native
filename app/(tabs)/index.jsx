
import { useGame } from '@/context/GameContext';
import CategoryGrid from '../../components/CategoryGrid/Main/Main';

export default function HomeScreen() {
  const { rounds, playersData, handleAwardPoints, handleDeductPoints, handleResetAnswers } = useGame();

  return (
    <CategoryGrid 
        playersData={playersData}
        rounds={rounds}
        onAwardPoints={handleAwardPoints}
        onDeductPoints={handleDeductPoints}
        resetAnswers={handleResetAnswers}
    />
  );
}