import React, { useState, useContext, createContext } from "react";

const ContextProvider = createContext({});

export const QuestionsContext = ({ children }) => {
  const [choices, setChoices] = useState([]);

  return (
    <ContextProvider.Provider
      value={{
        choices,
        setChoices,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export default function useQuestionContext() {
  const context = useContext(ContextProvider);

  const { choices, setChoices } = context;

  return {
    choices,
    setChoices,
  };
}
