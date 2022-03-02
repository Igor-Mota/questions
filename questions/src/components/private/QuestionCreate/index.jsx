import { useState, useEffect, useRef } from 'react'
import {MultipleChoice, PlaintText} from './MultipleChoiceOrText'
import {FaFileImage} from 'react-icons/fa'
import './styles.css'

const QuestionCreate = function(){
    const [questionType, setQuestionType] = useState(0)
    const inputFileRef  = useRef(null)


    useEffect(() =>{
    
    },[])
    return (
        <div className="wrapper-question card-body">
            <div className="border-left"></div>
            <div className="create-question-content">
                <div className="create-question-header">
                    <div className="question-text">
                        <textarea name="question" id="question" cols="60" rows="3"></textarea>
                    </div> 
                    <div className="image-push">
                        <button onClick={() => {inputFileRef.current.click()}}>
                            <FaFileImage size={24} color='gray'/>
                        </button>
                        <input type="file"  name="image-user" id="image-user" ref={inputFileRef} style={{display:'none'}}/>
                    </div>
                    <div className="type-question">
                        <select name="question-type" id="question-type">
                            <option value="0">Mutipla escolha</option>
                            <option value="0">Texto</option>
                        </select>
                    </div>
                </div>
                <div className="create-question-content">
                    {questionType === 0 ? <MultipleChoice /> : <PlaintText />}
                </div>
                <div className="create-question-footer">

                </div>
            </div>
        </div>
    )
}

export default QuestionCreate