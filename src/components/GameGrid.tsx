import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";

function GameGrid(){
    const {games, error, isLoading} = useGames()
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing='10px' padding='10px'>
        {isLoading && skeletons.map(skeleton => <GamecardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
