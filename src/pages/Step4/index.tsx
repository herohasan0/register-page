import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";

import { useTranslation } from "react-i18next";

import { InfoContext } from "../../context/InfoProvider";

import { addData } from "../../services/firestore";

function Step4() {
  const { info, addInfo } = React.useContext(InfoContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(value: any) {
    if (Object.keys(errors).length === 0) {
      addInfo(value);

      addData(info).then((res) => {
        navigate(`./${res}`);
      });
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text={t("STEP_4.TITLE")} />

        <Flex flexDir={"column"}>
          <Flex flexDir={"column"}>
            <MainInput
              placeholder={t("STEP_4.NAME_PLACEHOLDER")}
              label="name"
              register={register}
              required
            />
            {errors.name && <span>{t("STEP_4.NAME_ERROR")}</span>}

            <MainInput
              placeholder={t("STEP_4.SURNAME_PLACEHOLDER")}
              label="surname"
              register={register}
              required
            />
            {errors.surname && <span>{t("STEP_4.SURNAME_ERROR")}</span>}
          </Flex>

          <Flex flexDir={"column"} marginTop={"47px"}>
            <MainInput
              placeholder={t("STEP_4.EMAIL_PLACEHOLDER")}
              label="email"
              register={register}
              required
            />
            {errors.email && <span>{t("STEP_4.EMAIL_ERROR")}</span>}

            <MainInput
              placeholder={t("STEP_4.PASSWORD_PLACEHOLDER")}
              label="password"
              register={register}
              required
            />
            {errors.password && <span>{t("STEP_4.PASSWORD_ERROR")}</span>}
          </Flex>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={t("BUTTON.BACK")}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
          />
          <MainButton
            title={t("BUTTON.SAVE")}
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
