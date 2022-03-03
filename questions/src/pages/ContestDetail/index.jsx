import {useEffect,useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom' 
import api from '../../services/api'

const ContestDetail = function(){
  
  const [contest, setContest] = useState()
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  useEffect(async () => {


    const response = await api.get(`contest/show/${params.contestId}`)
    setContest(response.data.data.contest)
    setQuestions(response.data.data.questions)
    console.log(response.data.data.contest)
    console.log(response.data.data.questions)
  },[])
  if(contest){
    return(
  
      <div className='container-fluid'>
        <button type="submit" className="btn me-2 btn-primary"
        
        onClick={() => {navigate(`/questao/criar/${contest.id}`)}}
        >
          Criar questao
        </button>


        <div className='card'>
          {contest.title}
          {contest.description}
        </div>
      {
        questions.map(el => {
          return(
          <div className="card">
            <div>{el.title}</div>
          </div>

          )  
        })
      }
          
          

          
      </div>
    )
  }
  return(<></>)
}

export default ContestDetail