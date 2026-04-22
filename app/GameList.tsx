
import { Game } from '@/types/Game';
import GameCard from './GameCard';

interface GameListProps {
  games?: Game[];
}

function GameList({ games }: GameListProps) {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-10">
      {games?.map((game) => (
        <div key={game.id} className="cols-sm">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
}

export default GameList;