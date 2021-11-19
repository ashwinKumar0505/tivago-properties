import { Avatar } from "@chakra-ui/avatar";
import { Button, Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getIsUserAuthenticated } from "../../selectors/index";
import { logout } from "../../actions/actions";

const Header = () => {
  const history = useHistory();
  const isUserAuthenticated = useSelector(getIsUserAuthenticated);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <Flex
      boxShadow="0 0 10px rgba(0,0,0,0.1)"
      px={8}
      py={4}
      justifyContent="space-between"
      width="100%"
      height={20}
    >
      <Heading cursor="pointer" onClick={() => history.push("/")}>
        TIVAGO
      </Heading>
      {isUserAuthenticated && (
        <Menu>
          <MenuButton>
            <Avatar name="Ashwin kumar" size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )}
      {!isUserAuthenticated && (
        <Flex>
          <Button
            mr={2}
            colorScheme="primary"
            onClick={() => history.push("/sign-in")}
          >
            LOGIN
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
