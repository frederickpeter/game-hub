import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
