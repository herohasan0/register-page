import React from "react";

import "../../App.css";

import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Text, Checkbox } from "@chakra-ui/react";

function Option({
  Title,
  Checked,
  register,
  required,
}: {
  Title?: string;
  Checked?: boolean;
  register?: any;
  required?: any;
}) {
  return (
    <>
      <Flex
        w="375px"
        h="49px"
        backgroundColor="#FFF"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #9B9BEB"
        paddingRight="20px"
        paddingLeft="20px"
        margin="0 !important"
        className="option"
      >
        <Checkbox {...register("selected-days")} value={Title}>
          <Text
            color={Checked ? "#183137" : "#C8D0D2"}
            fontWeight="400"
            fontSize="16px"
          >
            {Title}
          </Text>
        </Checkbox>
        <CheckIcon w="17px" h="17px" color={Checked ? "#5453E3" : "#C8D0D2"} />
      </Flex>
    </>
  );
}

export default React.memo(Option);
