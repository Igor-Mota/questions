import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import TypeQuestions from "./MultipleChoiceOrText";
import { FaFileImage } from "react-icons/fa";
import "./styles.css";
import useQuestionContext from "../../../context/questionContext";

const { MultipleChoice, PlaintText } = TypeQuestions;


const QuestionCreate = function () {
  const params = useParams()
  const[description, setDescription] = useState('')
  const [responseAnswer, setResponseAnswer] = useState('')

  const { setChoices, questionType, setQuestionType, setEnunciate, setImage, enunciate, choices, setCorrect,correct } =
    useQuestionContext();

  const handleAddChoice = () => {
    setChoices((current) => [...current, { choice: "", correct: false }]);
  };

const handleCreate = async () => {
  const data = {
    title: enunciate,
    responses:choices,
    description:description,
    reponse_type:'multiple_choice',
    response_answer:correct,
    answer_type:'multiple_choice',
    contest_id:params.contestId
  }

  console.log(data)
  const response = await   api.post('question/create',data)

    console.table(response)
  };

  const inputFileRef = useRef(null);

  return (
    <div className="wrapper-question card-body">
      <div className="border-left"></div>
      <div className="create-question-content">
        <div className="create-question-header">
          <div className="question-text">
            <textarea
              onChange={(e) => setEnunciate(e.target.value)}
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
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
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
          <button onClick={handleCreate} className="btn btn-primary">
            Criar
          </button>
        </div>
        <div className="create-question-footer"></div>
      </div>
    </div>
  );
};

export default QuestionCreate;
