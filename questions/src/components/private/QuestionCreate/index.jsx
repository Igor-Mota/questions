import { useState, useRef, memo } from "react";
import TypeQuestions from "./MultipleChoiceOrText";
import { FaFileImage } from "react-icons/fa";
import "./styles.css";
import useQuestionContext from "../../../context/questionContext";

const { MultipleChoice, PlaintText } = TypeQuestions;

const QuestionCreate = function () {
  const { setChoices, questionType, setQuestionType, setEnunciate, setImage } =
    useQuestionContext();

  const handleAddChoice = () => {
    setChoices((current) => [...current, { choice: "", correct: false }]);
  };

  const inputFileRef = useRef(null);

  return (
    <div className="wrapper-question card-body">
      <div className="border-left"></div>
      <div className="create-question-content">
        <div className="create-question-header">
          <div className="question-text">
            <textarea
              onChange={setEnunciate}
              className="form-control"
              cols="50"
              id="comment"
            ></textarea>
          </div>
          <div className="image-push">
            <button
              onClick={() => {
                inputFileRef.current.click();
              }}
            >
              <FaFileImage size={24} color="gray" />
            </button>
            <input
              onChange={setImage}
              type="file"
              name="image-user"
              id="image-user"
              ref={inputFileRef}
              style={{ display: "none" }}
            />
          </div>
          <div className="type-question">
            <div className="nice-select  form-control wide" tabIndex={0}>
              <span className="current">mutipla escolha</span>
              <ul className="list">
                <li
                  data-value="Option 1"
                  className="option selected focus"
                  onClick={() => {
                    setQuestionType(0);
                  }}
                >
                  mutipla escolha
                </li>
                <li
                  data-value="Option 2"
                  className="option"
                  onClick={() => {
                    setQuestionType(1);
                  }}
                >
                  texto
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="create-question-content">
          {questionType === 0 ? <MultipleChoice /> : <PlaintText />}
          <button
            onClick={handleAddChoice}
            className="btn btn-primary"
            style={
              questionType === 0
                ? { display: "block", float: "right" }
                : { display: "none", float: "right" }
            }
          >
            adicionar
          </button>
        </div>
        <div className="create-question-footer"></div>
      </div>
    </div>
  );
};

export default QuestionCreate;
