import React, { useState, useContext, createContext, useEffect } from "react";
import api from '../../services/api'

const ContextProvider = createContext({});

export const AuthContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() =>{
    session()
  },[])

  async function session(){
    try{

    
      const token = JSON.parse(localStorage.getItem('token'))
     
      api.defaults.headers['Authorization'] = 'Bearer '+ token.token
      
      const response = await api.get('session')

      
      if(response.status === 200){

        api.defaults.headers['Authorization'] = 'Bearer '+response.data.token.token
        localStorage.setItem('token', JSON.stringify(response.data.token))
        setUser(response.data.message)
        setIsLogged(true)
      }
      if(response.status === 404){
        return
      }
    }catch(e){

    }

  }

  async function singOut(){

    localStorage.clear()
    setIsLogged(false)
    
  }


   async function signIn (email,password){
    const response = await api.post('login',{email, password})
    localStorage.setItem('token',JSON.stringify(response.data.token))
    
    if(response.status === 200){
      console.log(response)
      api.defaults.headers['Authorization'] = 'Bearer '+response.data.token.token
      setUser(response.data.Message)
      setIsLogged(true)
    }
  }


  return (
    <ContextProvider.Provider
      value={{
        isLogged,
        setIsLogged,
        signIn,
        user,
        singOut
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export default function useAuthContext() {
  const context = useContext(ContextProvider);

  const {
    isLogged,
    setIsLogged,
    signIn,
    user,
    singOut
  } = context;

  return {
    isLogged,
    setIsLogged,
    signIn,
    user, 
    singOut
  };
}
