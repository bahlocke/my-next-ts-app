import GameList from './GameList';

const GAMEBRAIN_SEARCH_URL: string = `https://api.gamebrain.co/v1/games`;

interface GamesProps {
  offset: string,
  limit: string
}

async function Games({ searchParams }: any) {
  const { offset: offsetParam, limit = '10' }: GamesProps = await searchParams;
  const offset = parseInt(offsetParam || "1", 10);

  const games = await fetch(`https://jsonfakery.com/games/paginated?page=${offset}&limit=${limit}`, {
    headers: {
      "Authorization": `Bearer ${process.env.GAMEBRAIN_API_KEY}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch games")

      return res.json();
    })
    .then(json => json.data)
    .catch((err) => {
      console.error(err);
      return [];
    });

  const Navigation = () => (
    <div className='grid grid-cols-2 gap-2 justify-center my-5 w-full'>
      <a href={offset === 1 ? '#' : `?offset=${offset - 1}&limit=${limit}`} className={`flex justify-center text-3xl mr-10 bg-linear-to-r/srgb via-indigo-500 rounded-md ${ offset === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`}>
        Previous
      </a>
      <a href={`?offset=${(offset + 1)}&limit=${limit}`} className='bg-linear-to-r/srgb via-indigo-500  rounded-md flex justify-center text-3xl'>Next</a>
    </div>
  );

  return (
    <div className='m-auto ml-5 mr-5 '>
      <h1 className='max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>Games</h1>
      <Navigation />
      <GameList games={games}/>
      <Navigation />
    </div>
  );
}

export default Games;