import { Flex, Box, Image, Text, Button, Icon, Avatar } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHome } from "react-icons/ai";
import ImageFallback from "../components/fallbackImage";
import Footer from "../components/footer";
import owners from "../constants/owner.json";
import facilities from "../constants/facilities.json";

const Property = () => {
  const { state } = useLocation();

  const { property } = state as any;

  const {
    Image_url,
    Price,
    BHK,
    Furnished,
    Floors,
    Negotiator,
    Property_id
  } = property as any;

  const propertyOwner = owners.find(owner => owner.Property_id ===Property_id);
  const propertyFacility = facilities.find(facility => facility.Property_id);

  return (
    <Flex width="100%" height="100%" direction="column" fontSize="14px">
      <Header />
      <Flex flex={1} p={10} direction="row">
        <Box width="50%">
          <Image
            width="100%"
            height="550px"
            src={Image_url}
            mb={2}
            fallback={<ImageFallback />}
          />
        </Box>
        <Box width="50%" px={10}>
          <Box width="100%">
            <Flex
              justifyContent="flex-end"
              borderBottom="1px solid #CBD5E0"
              py={5}
            >
              <Icon
                as={AiOutlineHeart}
                fontSize="2xl"
                cursor="pointer"
                mr={2}
              />
              <Icon as={AiOutlineShareAlt} fontSize="2xl" cursor="pointer" />
            </Flex>
          </Box>
          <Flex mb={3} alignItems="center" mt={4}>
            <Text fontWeight="600" mr={5} fontSize="22px">
              Rs.{Price}
            </Text>
            <Text fontSize="12px">
              {BHK} bed | {Floors} floor
            </Text>
          </Flex>
          <Text mb={3} fontSize="14px">
            {BHK} bedroom apartment for sale in the frontvielle
          </Text>
          <Flex>
            <Icon
              as={AiFillHome}
              fontSize="xs"
              color="yellow.500"
              mr={1}
              mt="3px"
            />
            <Text
              fontSize="12px"
              fontWeight="semibold"
              color="yellow.500"
              textDecoration="underline"
              mb={6}
              cursor="pointer"
            >
              Please Contact Us
            </Text>
          </Flex>
          <Button
            width="100%"
            bg="black"
            color="white"
            mb={4}
            _hover={{ bg: "blackAlpha.800" }}
          >
            Contact Agency
          </Button>
          <Box mb={10}>
            <Text fontSize="18px" mb={3}>
              FACTS &amp; FEATURES
            </Text>
            <Box
              borderTop="1px solid #CBD5E0"
              pt={4}
              pb={4}
              borderBottom="1px solid #CBD5E0"
            >
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Water Supply:{" "}
                </Text>
                <Text
                  color="blackAlpha.500"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  {propertyFacility?.Water_supply}
                </Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Furnished
                </Text>
                <Text color="blackAlpha.500">{Furnished}</Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Rating:{" "}
                </Text>
                <Text
                  color="blackAlpha.500"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  {propertyFacility?.Rating}
                </Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Power Backup
                </Text>
                <Text
                  color="blackAlpha.500"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  {property.Power_backup}
                </Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Parking
                </Text>
                <Text
                  color="blackAlpha.500"
                  textDecoration="underline"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  {property.Parking}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box dangerouslySetInnerHTML={{ __html: "The apartment consists of a large bright bedroom with a comfy king-sized bed, a modern fully-equipped kitchen and a sunlit living room with Apple TV and free Netflix account. It is the perfect place to stay for couples looking for a romantic location in the historic centre, within walking distance of some of the most beautiful sceneries you can find in the city and all famous landmarks. The sofa in the living room can also serve as an additional bed for a 3rd guest. Located in a side street between the ___ river bank and the leafy ___ hill park, the apartment is very quiet at night. Please note, my apartment is on the 3rd floor with no elevator. I am more than happy to help you with your luggage! " }} mb={12} />
          <Flex>
            <Avatar height="30px" name={propertyOwner?.Name} mr={4} />
            <Box>
              <Text fontSize="18px" fontWeight="bold" mb={2}>
                {propertyOwner?.Name}
              </Text>
              <Text
                fontSize="12px"
                mb={2}
                fontWeight="semibold"
                color="blackAlpha.600"
              >
                {propertyOwner?.Address}
              </Text>
              <Text mb={2} color="blackAlpha.600">
                +{propertyOwner?.Phone_number}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Property;
