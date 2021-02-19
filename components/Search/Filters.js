import { useState } from "react";

import {
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  Stack,
  Radio,
  Checkbox,
} from "@chakra-ui/react";

const Filters = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Box borderBottom="1px" borderColor="gray.200" p={4}>
        <Text fontSize="md" fontWeight="semibold">
          Filters
        </Text>
        <Tabs variant="soft-rounded" colorScheme="green" mt={4}>
          <TabList>
            <Tab>$</Tab>
            <Tab>$$</Tab>
            <Tab>$$$</Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box borderBottom="1px" borderColor="gray.200" p={4}>
        <Text fontSize="md" fontWeight="semibold">
          Categories
        </Text>
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          mt={4}
          size="sm"
          orientation="vertical"
        >
          <TabList>
            <Tab mb={2}>Donuts</Tab>
            <Tab mb={2}>Food</Tab>
            <Tab>Products</Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box borderBottom="1px" borderColor="gray.200" p={4}>
        <Text fontSize="md" fontWeight="semibold">
          Distance
        </Text>
        <Stack mt={4}>
          <Radio size="md" name="1" colorScheme="green">
            <Text fontSize="sm">Driving (5 mi.)</Text>
          </Radio>
          <Radio size="md" name="1" colorScheme="green">
            <Text fontSize="sm">Biking (2 mi.)</Text>
          </Radio>
          <Radio size="md" name="1" colorScheme="green" defaultChecked>
            <Text fontSize="sm">Walking (1 mi.)</Text>
          </Radio>
        </Stack>
      </Box>
      <Box borderBottom="1px" borderColor="gray.200" p={4}>
        <Text fontSize="md" fontWeight="semibold">
          Neighborhoods
        </Text>
        <Stack mt={4} spacing={1}>
          <Checkbox
            colorScheme="green"
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            <Text fontSize="sm">Brickell</Text>
          </Checkbox>
          <Checkbox
            colorScheme="green"
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            <Text fontSize="sm">Miami Beach</Text>
          </Checkbox>
        </Stack>
      </Box>
    </>
  );
};
export default Filters;
