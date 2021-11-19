import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const ImageFallback = () => {
  return (
    <Flex
      height="250px"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default ImageFallback;
