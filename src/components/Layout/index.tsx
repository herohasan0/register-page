import React, { Suspense } from "react";
import { Flex } from "@chakra-ui/react";

function Layout(props: any) {
  return (
    <Flex h="100vh" className="App">
      <Flex w="50%">
        <img src="./fitness.png" alt="" />
      </Flex>
      <Suspense fallback="loading">
        <Flex
          w="50%"
          flexDir={"column"}
          alignItems="center"
          justifyContent="center"
        >
          {props.children}
        </Flex>
      </Suspense>
    </Flex>
  );
}

export default React.memo(Layout);
