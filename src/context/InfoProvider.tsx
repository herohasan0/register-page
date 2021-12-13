import React, { createContext, useState, FC } from "react";

export type InfoContextState = {
  info: {};
  addInfo: (newInfo: {}) => void;
};

const contextDefaultValues: InfoContextState = {
  info: {},
  addInfo: () => {},
};

export const InfoContext =
  createContext<InfoContextState>(contextDefaultValues);

const InfoProvider: FC = ({ children }) => {
  const [info, setTodos] = useState<{}>(contextDefaultValues.info);

  const addInfo = (newTodo: {}) =>
    setTodos((info) => Object.assign(info, newTodo));

  return (
    <InfoContext.Provider
      value={{
        info,
        addInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
