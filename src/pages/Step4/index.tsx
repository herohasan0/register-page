import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";

function Step4() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(d: any) {
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(d));
      // navigate("./final");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text="Final step. Complete your registration" />

        <Flex flexDir={"column"}>
          <Flex flexDir={"column"}>
            <MainInput
              placeholder="Name"
              label="name"
              register={register}
              required
            />
            {errors.name && <span>Name is required</span>}

            <MainInput
              placeholder="Surname"
              label="surname"
              register={register}
              required
            />
            {errors.surname && <span>Surname is required</span>}
          </Flex>

          <Flex flexDir={"column"} marginTop={"47px"}>
            <MainInput
              placeholder="E-mail"
              label="email"
              register={register}
              required
            />
            {errors.email && <span>Surname is required</span>}

            <MainInput
              placeholder="Password"
              label="password"
              register={register}
              required
            />
            {errors.password && <span>Surname is required</span>}
          </Flex>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={"Back"}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
          />
          <MainButton
            title={"Save"}
            disabled={false}
            isBack={false}
            func={handleSubmit(onSubmit)}
          />
        </Flex>
      </Flex>
    </form>
  );
}

export default React.memo(Step4);
