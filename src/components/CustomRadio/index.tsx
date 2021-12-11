import React from "react";
import { Flex, Text, Radio } from "@chakra-ui/react";

function CustomRadio({
  label,
  register,
  imgSrc,
}: {
  imgSrc?: any;
  label?: any;
  register?: any;
}) {
  return (
    <Radio
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
      h="90px"
      w="375px"
      backgroundColor="#fff"
      paddingRight="20px"
      paddingLeft="20px"
      borderBottom="1px solid #9B9BEB"
      {...register("goal")}
      value={label}
    >
      <Flex>
        <Text marginLeft="12px" marginRight="12px">
          {label}
        </Text>
        <img style={{ width: "20px", height: "20px" }} src={imgSrc} alt="" />
      </Flex>
    </Radio>
  );
}

export default React.memo(CustomRadio);
