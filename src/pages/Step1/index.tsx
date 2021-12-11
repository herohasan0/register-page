import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";
import ChangeLng from "../../components/ChangeLng";

import { useTranslation } from "react-i18next";

function Step1() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(d: any) {
    if (Object.keys(errors).length === 0) {
      navigate("./select-days");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Title Text="Let’s hear more about you to prepare your personal workout plan" />
          <ChangeLng />
        </Flex>

        <Flex flexDir={"column"}>
          <MainInput
            placeholder={t("STEP_1.HEIGHT_PLACEHOLDER")}
            label="height"
            register={register}
            required
          />
          {errors.height && <span>{t("STEP_1.HEIGHT_ERROR")}</span>}
          <MainInput
            placeholder={t("STEP_1.WEIGHT_PLACEHOLDER")}
            label="weight"
            register={register}
            required
          />
          {errors.weight && <span>{t("STEP_1.WEIGHT_ERROR")}</span>}
        </Flex>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={t("BUTTON.BACK")}
            disabled={true}
            isBack={true}
            func={handleSubmit(onSubmit)}
          />
          <MainButton
            title={t("BUTTON.NEXT")}
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
