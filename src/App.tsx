import LoadingLogo from "assets/logo-loading.gif";
import { Image, VStack, Heading } from "@chakra-ui/react";
import SignUpForm from "components/signup-form";

function App() {
  return (
    <VStack justifyContent="center" alignItems="center" width="100vw  " height="100vh" gap={10}>
      <Heading textAlign="center" mb={-50}>Something great is being welded together...</Heading>
      <Image
        boxSize="300px"
        filter="grayscale(30%)"
        src={LoadingLogo}
      />
      <SignUpForm />
    </VStack>
  );
}

export default App;
