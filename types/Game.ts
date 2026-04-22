export interface GameGenre {
  id: string;
  game_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface GamePlatform {
  id: string;
  game_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface GameScreenshot {
  id: string;
  game_id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface GameStore {
  id: string;
  game_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface GameTag {
  id: string;
  game_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Game {
  id: string;
  slug: string;
  name: string;
  playtime: number;
  released: string;
  tba: number;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_count: number;
  metacritic: number;
  suggestions_count: number;
  esrb_rating: null;
  created_at: string;
  updated_at: string;
  genres: GameGenre[];
  platforms: GamePlatform[];
  screenshots: GameScreenshot[];
  stores: GameStore[];
  tags: GameTag[];
}
