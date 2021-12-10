import React from "react";
import { Box, useRadio, Flex, Text } from "@chakra-ui/react";

function Radio(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        justifyContent="space-between"
        alignItems="center"
        h="90px"
        w="375px"
        backgroundColor="#fff"
        paddingRight="20px"
        paddingLeft="20px"
        borderBottom="1px solid #9B9BEB"
      >
        <Flex>
          <img
            style={{ width: "20px", height: "20px" }}
            src={props.imgSrc}
            alt=""
          />
          <Text marginLeft="12px">{props.title}</Text>
        </Flex>
        <Box
          {...checkbox}
          _checked={{
            border: "7px solid #5453E3",
            bg: "#fff",
          }}
          w="20px"
          h="20px"
          border="1px solid #E3E8E9"
          borderRadius="20px"
        />
      </Flex>
    </Box>
  );
}

export default React.memo(Radio);
