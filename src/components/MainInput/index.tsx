import React from "react";
import { Input } from "@chakra-ui/react";

function MainInput({
  label,
  register,
  required,
  placeholder,
}: {
  label: any;
  register: any;
  required: any;
  placeholder: any;
}) {
  return (
    <Input
      backgroundColor="#F6F8F9"
      h="40px"
      w="375px"
      borderRadius="4px"
      placeholder={placeholder}
      {...register(label, { required })}
    />
  );
}

export default React.memo(MainInput);
