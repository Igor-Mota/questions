import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthContext from '../../context/auth'
import api from '../../services/api'
import './styles.css'

const Dashboard = function() {
const navigate = useNavigate()
  const [contest, setContests] = useState([])
  const {user} = useAuthContext()
 
 
  useEffect(async () =>{
   const response = await api.get(`contest/${user.id}`)
   console.log(response)
   setContests(response.data.data)
  },[])

  return(
    <div className="container-fluid d-flex flex-column">
      <div className="dashboard-header">
       <button type="submit" className="btn me-2 btn-primary"
        style={{background:"#627EEA", borderColor:"#627EEA"}}
        onClick={() => {navigate('/concurso/criar')}}
        >
          Criar concurso
        </button>
      </div>

      <div className='contests-wrapper mt-5 row'>
        {contest.map((el) => {

          return(
            
            <div className='card d-flex flex-column contest-card col-6' key={el.id}>
            <button onClick={() => navigate(`/concurso/detalhe/${el.id}`)}>
              <div>{el.title}</div>
              <div>{el.description}</div>
            </button>
            </div>
          )
        })}
      </div>


    </div>
  )
}



export default Dashboard