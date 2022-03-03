import React, { useState, useContext, createContext } from "react";

const ContextProvider = createContext({});

export const QuestionsContext = ({ children }) => {
  const [choices, setChoices] = useState([]);
  const [questionType, setQuestionType] = useState(0);
  const [enunciate, setEnunciate] = useState("");
  const [correct, setCorrect] = useState('')
  const [image, setImage] = useState(undefined);

  return (
    <ContextProvider.Provider
      value={{
        choices,
        setChoices,
        questionType,
        setQuestionType,
        enunciate,
        setEnunciate,
        correct,
        setCorrect,
        image,
        setImage,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export default function useQuestionContext() {
  const context = useContext(ContextProvider);

  const {
    choices,
    setChoices,
    questionType,
    setQuestionType,
    enunciate,
    setEnunciate,
    image,
    setImage,
    correct,
    setCorrect,
  } = context;

  return {
    choices,
    setChoices,
    questionType,
    setQuestionType,
    enunciate,
    setEnunciate,
    image,
    correct,
    setCorrect,
    setImage,
  };
}
