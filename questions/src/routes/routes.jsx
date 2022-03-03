import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CreateContest from "../pages/CreateContest";
import ContestDetail from '../pages/ContestDetail'
import Create from "../pages/Create";

import Login from "../pages/Auth/Login";

import useAuthContext from "../context/auth";
import Layout from "../layout";

import { useEffect } from "react";

const AppRoutes = function () {

  const {isLogged} = useAuthContext()

  if(isLogged){
    return (
      <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/concurso/criar" element={<CreateContest />} />
          <Route path="/concurso/detalhe/:contestId" element={<ContestDetail />} />
          <Route path="/questao/criar/:contestId" element={<Create />} />
        </Routes>
      </BrowserRouter>
      </Layout>
    );
  }else{
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    )
  }

};

const Redirect = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/dashboard')

  },[])


  return(
    <>
    fdsfdsfdsfdsfsd
    </>
  )
}

export default {
AppRoutes
};
