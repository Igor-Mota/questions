import { useState, useCallback, memo } from "react";
import useQuestionContext from "../../../context/questionContext";

const MultipleChoice = function () {
  const { choices, setChoices, setCorrect } = useQuestionContext();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleRemoveChoice = (index) => {
    var tmp = [...choices];
    tmp.splice(index, 1);
    setChoices(tmp);
  };

  return (
    <>
      {choices.map((el, index) => {
        return (
          <div className="form-check option-wraper" key={index}>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                value="option2"
                onClick={() => {
                  var tmp = [...choices];
                  tmp.forEach((el) => {
                    el.correct = false;
                  });
                  tmp[index].correct = true;
                  setCorrect(tmp.choice)
                  setChoices(tmp);
                }}
              />
              <label className="form-check-label">
                <input
                  className="form-control input-default  answer"
                  placeholder="resposta"
                  type="text"
                  value={el.choice}
                  onChange={(e) => {
                    var tmp = choices;
                    el.choice = e.target.value;
                    setChoices(tmp);
                    forceUpdate();
                  }}
                />
              </label>
            </div>
            <button
              onClick={() => handleRemoveChoice(index)}
              className="remove-option"
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

const PlaintText = function () {
  return <div></div>;
};
export default {
  MultipleChoice: memo(MultipleChoice),
  PlaintText,
};
