import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";

function Step1() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(d: any) {
    if (Object.keys(errors).length === 0) {
      navigate("./about");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text="Let’s hear more about you to prepare your personal workout plan" />
        <Flex flexDir={"column"}>
          <MainInput
            placeholder="Your height (cm)"
            label="height"
            register={register}
            required
          />
          {errors.height && <span>Height field is required</span>}
          <MainInput
            placeholder="Your weight"
            label="weight"
            register={register}
            required
          />
          {errors.weight && <span>Weight field is required</span>}
        </Flex>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={"Back"}
            disabled={true}
            isBack={true}
            func={handleSubmit(onSubmit)}
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

export default React.memo(Step1);
