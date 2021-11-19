import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import App from "./app";
import customTheme from "./theme";
import { store, persistor } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ChakraProvider theme={customTheme}>
          <Router>
            <App />
          </Router>
        </ChakraProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
