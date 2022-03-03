import TitleCreate from "../../components/private/TitleCreate";
import QuestionCreate from "../../components/private/QuestionCreate";
import { QuestionsContext } from "../../context/questionContext";

const Create = function () {
  return (
    <QuestionsContext>
      <div className="row">
        <TitleCreate />
        <QuestionCreate />
      </div>
    </QuestionsContext>
  );
};

export default Create;
