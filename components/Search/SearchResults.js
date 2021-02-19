import {
  Box,
  Image,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { BsStarFill, BsCheck } from "react-icons/bs";

const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const SearchResults = () => (
  <>
    <Breadcrumb
      spacing="8px"
      separator={<AiOutlineRight fill="grey" size="10px" />}
      fontSize="small"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#" size="sm">
          Miami
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Wynwood</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" size="md" mt={2}>
      Lokaal food near Wynwood, Miami, FL
    </Heading>
    <Box borderWidth="1px" borderRadius="md" p={[2, 6]} mt={8}>
      <Box d="flex">
        <Image
          src="https://bit.ly/2Z4KKcF"
          alt="Rear view of modern home with pool"
          w={["120px", "230px"]}
          h={["150px", "200px"]}
          fit="cover"
          borderRadius="md"
        />
        <Box ml={4} fontWeight="semibold">
          <Text fontSize="md">1. Homemade Donuts</Text>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <BsStarFill
                  key={i}
                  fill={i < property.rating ? "#F56565" : "#CBD5E0"}
                  size="15px"
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
          <Text fontSize="sm" mt={2} as="i" color="gray.600" fontWeight="light">
            American
          </Text>

          <Flex align="center" mt={6}>
            <BsCheck fill="green" size="20px" />
            <Text
              fontSize="sm"
              align="center"
              color="gray.600"
              fontWeight="medium"
              ml={1}
            >
              Delivery
            </Text>
          </Flex>

          <Text fontSize="sm" mt={4} color="gray.600" fontWeight="medium">
            "Soo yummy! They filled donuts are soo good!"
          </Text>
        </Box>
      </Box>
    </Box>
  </>
);

export default SearchResults;
