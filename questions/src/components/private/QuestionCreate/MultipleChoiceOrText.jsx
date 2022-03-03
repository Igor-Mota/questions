import { useState, useCallback, memo } from "react";
import useQuestionContext from "../../../context/questionContext";

const MultipleChoice = function () {
  const { choices, setChoices } = useQuestionContext();
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
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              value="option2"
            />
            <label className="form-check-label">
              <input
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
            <button onClick={() => handleRemoveChoice(index)}>X</button>
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
