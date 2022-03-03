import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import useAuthContext from '../../context/auth/index'

const CreateContest = function () {
  const {user} = useAuthContext()
  const navigate = useNavigate()
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(){

    const data = new FormData()
    data.append('title',title)
    data.append('description', description)
    data.append('user_id', user.id)

    const response = await api.post('contest',data)
    
    if(response.status === 201){
      navigate('/dashboard')
    }
  
  }


  return (
    <div className="container-fluid">
      <div className="wrapper-title card-body">
        <div className="border"></div>
        <input
          type="text"
          className="create-input create-title-input"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="create-input create-desc-input"
          placeholder="descricao"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          class="btn me-2 btn-primary"
          onClick={handleSubmit}
        >
          Criar o concurso
        </button>
      </div>
    </div>
  );
};

export default CreateContest;
