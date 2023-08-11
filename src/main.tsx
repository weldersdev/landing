import ReactDOM from "react-dom/client";
import App from "App";

import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      bg: "#0d1117",
    },
    '::placeholder': {
      color: '#e6edf0'
    },
    input: {
      boxShadow: 'unset',
      focus:{
        outline: 'none',
        boxShadow: 'none',
      }
    },
    button: {
      color: '#e6edf3',
      _hover:{
        color: 'black',
        backgroundColor: '#e6edf3'
      }
    },
    '#root': {
      minWidth: '100vw',
      minHeight: '100vh',
      color: '#e6edf3'
    }
  }),
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={extendTheme({ config, styles })}>
    <App />
  </ChakraProvider>
);
