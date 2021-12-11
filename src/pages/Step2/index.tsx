import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, CheckboxGroup, HStack } from "@chakra-ui/react";

import Title from "../../components/Title";
import Option from "../../components/Option";
import MainButton from "../../components/MainButton";

function Step2() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(d: any) {
    if (Object.keys(errors).length === 0) {
      navigate("./select-goal");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text="Pick your workout days" />
        <CheckboxGroup defaultValue={["Sunday", "Friday"]}>
          <HStack as={Flex} flexDir={"column"}>
            {days.map((day) => (
              <Option register={register} Title={day} />
            ))}
          </HStack>
        </CheckboxGroup>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={"Back"}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
          />
          <MainButton
            title={"Next"}
            disabled={false}
            isBack={false}
            func={handleSubmit(onSubmit)}
          />
        </Flex>
      </Flex>
    </form>
  );
}

export default React.memo(Step2);
