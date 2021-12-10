import React from "react";
import { Input } from "@chakra-ui/react";

function MainInput({ placeholder }: { placeholder: string }) {
  return (
    <Input
      backgroundColor="#F6F8F9"
      h="40px"
      w="375px"
      borderRadius="4px"
      placeholder={placeholder}
    />
  );
}

export default React.memo(MainInput);
