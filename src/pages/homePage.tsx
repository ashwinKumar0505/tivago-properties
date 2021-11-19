/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Spinner,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/header";
import { BsChevronDown } from "react-icons/bs";
import {
  PROPERTY_URL,
  BED_ROOMS,
  MIN_PRICE,
  MAX_PRICE,
} from "../constants/constants";
import ImageFallback from "../components/fallbackImage";
import Footer from "../components/footer";

type TProperty = {
  Title: string;
  Bedrooms: number;
  Price: number;
  Images: {
    url: string;
  }[];
  _id: string;
};

const HomePage = () => {
  const [properties, setProperties] = useState<TProperty[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<TProperty[]>([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [bedRooms, setBedRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  useEffect(() => {
    axios.get(PROPERTY_URL).then((data: any) => {
      setProperties(data.data);
      setFilteredProperties(data.data);
      setIsLoading(false);
    });
  }, []);

  const propertyClickHandler = (property: TProperty) => {
    history.push({
      pathname: `/property/${property.Title}`,
      state: {
        property,
      },
    });
  };

  useEffect(() => {
    const filteredProps = properties.filter((property) => {
      if (bedRooms !== 0) {
        if (
          property.Bedrooms === bedRooms &&
          property.Price > minPrice &&
          property.Price < maxPrice
        ) {
          return property;
        } else {
          return null;
        }
      } else {
        if (property.Price > minPrice && property.Price < maxPrice) {
          return property;
        } else {
          return null;
        }
      }
    });
    setFilteredProperties(filteredProps);
  }, [bedRooms, minPrice, maxPrice]);

  return (
    <Flex width="100%" height="100%" direction="column" overflow="hidden">
      <Header />
      <Flex
        flex={1}
        pt={10}
        px={10}
        direction="column"
        textAlign="center"
        overflow="scroll"
      >
        <Heading mb={10} fontSize="30px" color="blackAlpha.800">
          Property for sales
        </Heading>
        <Flex
          py={5}
          borderTop="1px solid #CBD5E0"
          borderBottom="1px solid #CBD5E0"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex>
            <Box mr={12}>
              <Menu>
                <MenuButton
                  _hover={{
                    bg: "blackAlpha.100",
                  }}
                  p={2}
                  borderRadius="md"
                >
                  <Flex alignItems="center">
                    <Text mr={5}>
                      {bedRooms !== 0 ? bedRooms : "All"} Bed Rooms
                    </Text>
                    <Icon as={BsChevronDown} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  {BED_ROOMS.map((room) => (
                    <MenuItem onClick={() => setBedRooms(room)}>
                      {room}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box mr={12}>
              <Menu>
                <MenuButton
                  p={2}
                  borderRadius="md"
                  _hover={{
                    bg: "blackAlpha.100",
                  }}
                >
                  <Flex alignItems="center">
                    <Text mr={6}>
                      {minPrice !== 0 ? minPrice : "Min Price"}
                    </Text>
                    <Icon as={BsChevronDown} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  {MIN_PRICE.map((price) => (
                    <MenuItem onClick={() => setMinPrice(price)}>
                      {price}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box mr={12}>
              <Menu>
                <MenuButton
                  p={2}
                  borderRadius="md"
                  _hover={{
                    bg: "blackAlpha.100",
                  }}
                >
                  <Flex alignItems="center">
                    <Text mr={6}>
                      {" "}
                      {maxPrice !== 1000000 ? maxPrice : "Max Price"}
                    </Text>
                    <Icon as={BsChevronDown} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  {MAX_PRICE.map((price) => (
                    <MenuItem onClick={() => setMaxPrice(price)}>
                      {price}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          <Box>
            <Text fontWeight="semibold" fontSize="14px">
              {filteredProperties.length} Results found
            </Text>
          </Box>
        </Flex>
        {isLoading && (
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Spinner size="xl" mb={4} />
            <Text fontSize="22px" fontWeight="600">
              Loading properties ...
            </Text>
          </Flex>
        )}
        {!isLoading && filteredProperties.length === 0 && (
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Text fontSize="22px" fontWeight="600">
              Sorry!... No Properties found
            </Text>
          </Flex>
        )}
        {filteredProperties.length > 0 && (
          <Flex width="100%" flexWrap="wrap" paddingY={10}>
            {filteredProperties.map((property, index) => (
              <Box
                width="33%"
                fontSize="14px"
                key={property._id}
                marginBottom={10}
                paddingRight={(index + 1) % 3 === 0 ? 0 : "30px"}
                onClick={() => propertyClickHandler(property)}
              >
                <Box
                  boxShadow="0 0 10px rgba(0,0,0,0.1)"
                  pb={5}
                  _hover={{
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2) ",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    height="250px"
                    width="100%"
                    src={property.Images ? property.Images[0]?.url : ""}
                    mb={6}
                    fallback={<ImageFallback />}
                  />
                  <Box textAlign="center">
                    <Text mb={3}>{property.Title}</Text>
                    <Text mb={3}>
                      {property.Bedrooms} bedroom apartment for sale
                    </Text>
                    <Text fontWeight="semibold">$ {property.Price}</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        )}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default HomePage;
