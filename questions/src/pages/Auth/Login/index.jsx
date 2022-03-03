import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../../../context/auth'
import './styles.css'
const Login = function(){

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const {signIn, isLogged} = useAuthContext()

  function hadlelogin(){
    console.log(email, password)
    signIn(email, password)

    if(isLogged === true){
      navigate('/dashboard')
    }
  }

    return(
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}} >
        <div className="card login-card  d-flex align-items-center justify-content-between">
          <div className="card-header border-0 pb-0 d-flex justify-content-center">
            <h5 className="card-title">Login</h5>
          </div>    
            <div className='d-flex flex-column justify-content-between login-form'>
              <input type="email" className="form-control input-default " placeholder="email"
               onChange={(e) => setEmail(e.target.value)} />
              <input type="password" className="form-control input-default " placeholder="senha"
               onChange={(e) => setPass(e.target.value)}/>
              <button type="submit" className="btn btn-primary" onClick={hadlelogin}>Entrar</button>
            </div>
        <div></div>           
        </div>     
      </div>
    )
}


export default Login