import { Flex, Box, Image, Text, Button, Icon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHome } from "react-icons/ai";
import ImageFallback from "../components/fallbackImage";
import Footer from "../components/footer";

const Property = () => {
  const { state } = useLocation();

  const { property } = state as any;

  const {
    Images,
    Price,
    Description,
    Bedrooms,
    Price_Per_Sqm,
    Floor_Area,
    Negotiator,
  } = property as any;

  const {
    Name: negotiatorName,
    Email,
    Phone,
    Designation,
    Image: negotiatorImage,
  } = Negotiator as {
    Name: string;
    Email: string;
    Phone: string;
    Designation: string;
    Image: { url: string };
  };

  return (
    <Flex width="100%" height="100%" direction="column" fontSize="14px">
      <Header />
      <Flex flex={1} p={10} direction="row">
        <Box width="50%">
          <Image
            width="100%"
            height="550px"
            src={Images[0].url}
            mb={2}
            fallback={<ImageFallback />}
          />
          <Flex>
            <Image
              width="50%"
              height="300px"
              src={Images[1].url}
              fallback={<ImageFallback />}
            />
            <Image
              width="50%"
              height="300px"
              src={Images[2].url}
              ml={2}
              fallback={<ImageFallback />}
            />
          </Flex>
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
              ${Price}
            </Text>
            <Text fontSize="12px">
              {Bedrooms} bed | {Floor_Area} sqm
            </Text>
          </Flex>
          <Text mb={3} fontSize="14px">
            {Bedrooms} bedroom apartment for sale in the frontvielle
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
                  Neighbourhood:{" "}
                </Text>
                <Text
                  color="blackAlpha.500"
                  textDecoration="underline"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  Frontvielle
                </Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Price per sqm:{" "}
                </Text>
                <Text color="blackAlpha.500">${Price_Per_Sqm}</Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Brochure:{" "}
                </Text>
                <Text
                  color="blackAlpha.500"
                  textDecoration="underline"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  Download Brochure
                </Text>
              </Flex>
              <Flex width="100%">
                <Text width="40%" mb={2} fontWeight="500">
                  Floor plan:{" "}
                </Text>
                <Text
                  color="blackAlpha.500"
                  textDecoration="underline"
                  cursor="pointer"
                  _hover={{
                    color: "blackAlpha.800",
                  }}
                >
                  View Floor Plan
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box dangerouslySetInnerHTML={{ __html: Description }} mb={12} />
          <Flex>
            <Image height="80px" src={negotiatorImage.url} mr={4} />
            <Box>
              <Text fontSize="18px" fontWeight="bold" mb={2}>
                {negotiatorName}
              </Text>
              <Text
                fontSize="12px"
                mb={2}
                fontWeight="semibold"
                color="blackAlpha.600"
              >
                {Designation}
              </Text>
              <Text mb={2} color="blackAlpha.600">
                +{Phone} |{" "}
                <Box as="span" textDecoration="underline" cursor="pointer">
                  {" "}
                  {Email}
                </Box>
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
