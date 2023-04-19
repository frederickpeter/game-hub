import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // an array of objects where each object has a property called platform
  metacritic: number;
}

interface Response {
  count: number;
  results: Game[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
