import { Game } from "@/types/Game";

const formatEllipsis = (description?: string): string => {
  return description?.substring(0, 200) + '...';
};

interface GameCardProps {
  game: Game
};

function GameCard({ game }: GameCardProps) {
  return (
    <div className="card border-4 border-indigo-500 rounded-2xl h-125 grid">
      <section className="section p-2 bg-indigo-500 text-white rounded-t-sm flex flex-col justify-center max-h-35 overflow-hidden">
        <div className="text-xl font-bold flex justify-center align-middle">{game.name}</div>
      </section>
      <div className="flex justify-center">
        <img src={game.background_image} alt={game.name} className="rounded-full w-50 h-50 m-5 object-cover border-4 border-indigo-500"/>
      </div>
      <section className="section bg-indigo-500 text-white p-5 rounded-b-sm flex flex-col justify-center max-h-55 overflow-hidden">
        <div className="flex-col gap-3 align-middle">
          <div className="inline-flex">
            <p className="pr-3">Release</p><p className="">{game.released || 'N/A'}</p>
          </div>
          <div className="inline-flex" title={game.platforms.map(p => p.name).join(", ")}>
            <p className="pr-3">Platforms</p><p className="">{formatEllipsis(game.platforms.map(p => p.name).join(", ")) || 'N/A'}</p>
          </div>
          <div className="inline-flex">
            <p className="pr-3">Release</p><p className="">{game.released || 'N/A'}</p>
          </div>
        </div>
        <div className="flex-col overflow-hidden">
          {game.tags.slice(0,3).map(tag => (
            <div key={tag.id} className='flex-row m-2 bg-indigo-500 shadow-xs rounded-md flex justify-center'>{tag.name}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameCard;