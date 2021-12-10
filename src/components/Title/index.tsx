import React from "react";
import { Heading } from "@chakra-ui/react";

function Title({ Text }: { Text: string }) {
  return (
    <Heading
      as="h2"
      fontSize="20px"
      fontWeight="600"
      lineHeight="26px"
      textAlign="center"
      w="375px"
      color="#183137"
    >
      {Text}
    </Heading>
  );
}

export default React.memo(Title);
