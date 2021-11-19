import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  Flex,
  Text,
} from "@chakra-ui/react";
import PasswordField from "../components/passwordField";
import { authentication } from "../actions/actions";
import { EMAIL, PASSWORD } from "../constants/constants";

type TFormData = {
  email: string;
  password: string;
};

const initialFormData: TFormData = {
  email: "",
  password: "",
};

const LoginIn = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const showToast = (status: "error" | "success", message: string) => {
    toast({
      title: message,
      status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email !== EMAIL) {
      showToast("error", "Invalid Email ID");
      return;
    }
    if (password !== PASSWORD) {
      showToast("error", "Wrong password");
      return;
    }
    dispatch(authentication());
    showToast("success", "You had been successfully logged In");
    history.push("/apartments");
  };

  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Stack align={"center"} mb={10}>
        <Heading fontSize={"6xl"} letterSpacing="10px" mb={2}>
          TIVAGO
        </Heading>
        <Text fontSize="14px" color="blackAlpha.800" fontWeight="medium">
          Please Sign In to view our properties
        </Text>
      </Stack>
      <Box
        maxW={"lg"}
        boxShadow="0 0 10px rgba(0,0,0,0.1)"
        width="600px"
        bg="white"
        borderRadius="md"
        m={3}
        p={8}
        py={16}
      >
        <Box>
          <form onSubmit={submitHandler}>
            <Box>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    id="email"
                    isRequired
                    onChange={(e) =>
                      handleInputChange(e.target.id, e.target.value)
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <PasswordField
                    id="password"
                    isRequired
                    onChange={(e) =>
                      handleInputChange(e.target.id, e.target.value)
                    }
                  />
                </FormControl>
              </Stack>

              <Stack mt={12}>
                <Button type="submit" colorScheme="primary" mb={2}>
                  LOGIN
                </Button>
              </Stack>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginIn;
