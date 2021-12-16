import React from "react";
import { Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Title from "../../components/Title";
import { useTranslation } from "react-i18next";

function Step5() {
  const { t } = useTranslation();

  return (
    <Flex h="100%" flexDir={"column"} justifyContent={"space-around"}>
      <Flex flexDir={"column"} alignItems={"center"}>
        <CheckIcon mb="10px" w={10} h={12} color="green" />
        <Title Text={t("STEP_5.TITLE")} />
      </Flex>
    </Flex>
  );
}

export default React.memo(Step5);
