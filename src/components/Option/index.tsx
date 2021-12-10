import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Option({ Title, Checked }: { Title: string; Checked: boolean }) {
  return (
    <Flex
      w="375px"
      h="49px"
      backgroundColor="#FFF"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #9B9BEB"
      paddingRight="20px"
      paddingLeft="20px"
    >
      <Text
        color={Checked ? "#183137" : "#C8D0D2"}
        fontWeight="400"
        fontSize="16px"
      >
        {Title}
      </Text>
      <CheckIcon w="17px" h="17px" color={Checked ? "#5453E3" : "#C8D0D2"} />
    </Flex>
  );
}

export default React.memo(Option);
