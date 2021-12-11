import React from "react";
import { Button } from "@chakra-ui/react";

function MainButton({
  title,
  disabled,
  isBack,
  func,
}: {
  title: string;
  disabled: boolean;
  isBack: boolean;
  func: any;
}) {
  return (
    <Button
      disabled={disabled}
      w="170px"
      backgroundColor={isBack ? "#5453E3" : "#4140E5"}
      color="#fff"
      borderRadius="4px"
      h="48px"
      fontSize="16px"
      fontWeight="600"
      onClick={func}
    >
      {title}
    </Button>
  );
}

export default React.memo(MainButton);
