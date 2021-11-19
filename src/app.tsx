/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginIn from "./pages/loginPage";
import HomePage from "./pages/homePage";
import Property from "./pages/property";
import { getIsUserAuthenticated } from "./selectors";

const App = () => {
  const isUserAuthenticated = useSelector(getIsUserAuthenticated);
  const history = useHistory();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (location.pathname !== "/login" && !isUserAuthenticated) {
      history.push("/login");
    }
  }, []);
  return (
    <Box width="100vw" height="100vh">
      <Switch>
        <Route path="/login" exact>
          <LoginIn />
        </Route>
        <Route path="/property">
          <Property />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
