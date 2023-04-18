import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div>
      {/* on mobile, show only 2 rows each with 1 column: nav and main  */}
      {/* on large screens show 2 rows, each with 2 columns. "nav nav" as row1, "aside main" as row 2 */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {/* Show - allows us to control when something is visible */}
        {/* in this case aside will only show on lg and above */}
        <Show above="lg">
          <GridItem area="aside">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
