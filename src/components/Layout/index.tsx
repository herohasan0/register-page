import React from "react";
import { Flex } from "@chakra-ui/react";

function Layout(props: any) {
  return (
    <Flex h="100vh" className="App">
      <Flex w="50%">
        <img src="./fitness.png" alt="" />
      </Flex>
      <Flex w="50%" alignItems="center" justifyContent="center">
        {props.children}
      </Flex>
    </Flex>
  );
}

export default React.memo(Layout);
