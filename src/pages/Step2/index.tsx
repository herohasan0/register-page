import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, CheckboxGroup, HStack } from "@chakra-ui/react";

import Title from "../../components/Title";
import Option from "../../components/Option";
import MainButton from "../../components/MainButton";

import { useTranslation } from "react-i18next";

import { InfoContext } from "../../context/InfoProvider";

function Step2() {
  const { addInfo } = React.useContext(InfoContext);
  const { t } = useTranslation();

  const days = [
    t("STEP_2.DAYS.DAY_1"),
    t("STEP_2.DAYS.DAY_2"),
    t("STEP_2.DAYS.DAY_3"),
    t("STEP_2.DAYS.DAY_4"),
    t("STEP_2.DAYS.DAY_5"),
    t("STEP_2.DAYS.DAY_6"),
    t("STEP_2.DAYS.DAY_7"),
  ];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(value: any) {
    if (Object.keys(errors).length === 0) {
      addInfo({ days: value["selected-days"] });
      navigate("./goal");
    }
  }
  return (
    <form style={{ height: "100%" }}>
      <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
        <Title Text={t("STEP_2.TITLE")} />
        <CheckboxGroup defaultValue={["Sunday", "Friday"]}>
          <HStack as={Flex} flexDir={"column"}>
            {days.map((day) => (
              <Option register={register} Title={day} />
            ))}
          </HStack>
        </CheckboxGroup>

        <Flex justifyContent={"space-between"}>
          <MainButton
            title={t("BUTTON.BACK")}
            disabled={false}
            isBack={true}
            func={() => navigate(-1)}
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

export default React.memo(Step2);
