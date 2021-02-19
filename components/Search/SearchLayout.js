import { Grid, GridItem, Box } from "@chakra-ui/react";
import Filters from "./Filters";
import SearchResults from "./SearchResults";

const SearchLayout = () => (
  <Grid
    templateColumns="repeat(12, minmax(0, 1fr))"
    gap={4}
    borderTop="1px"
    borderColor="gray.100"
  >
    <GridItem
      colSpan={[12, 8]}
      borderRight="1px"
      borderColor="gray.100"
      h={["100%", "100vh"]}
    >
      <Grid templateColumns="repeat(8, minmax(0, 1fr))">
        <GridItem
          colSpan={[8, 8, 8, 2]}
          borderRight="1px"
          borderColor="gray.100"
          h={["100%", "100%", "100%", "100vh"]}
        >
          <Filters />
        </GridItem>

        <GridItem colSpan={[8, 8, 8, 6]} pt={4} px={[4, 6]}>
          <SearchResults />
        </GridItem>
      </Grid>
    </GridItem>
    <GridItem colSpan={[12, 4]}>
      <Box h="100vh" mt={6}>
        Map
      </Box>
    </GridItem>
  </Grid>
);

export default SearchLayout;
