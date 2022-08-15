import React from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/pages/home');
  };

  return (
    <>
      <div className="container-grid">
        <div>
          <h1 className="login-h1">P.A.M - Process Asset Management</h1>
          <h2 className="login-h2">Sistema de gerenciamento de ativos de processos para indústria siderúrgica.</h2>
        </div>
        <div>
        </div>
        <div>
          <img className='logo-image' src={require('../../assets/img/design-img.png')} alt=''/>
        </div>
        <div>
          <form className='sub-container-grid'>
            <div> 
              <label className='label'>ID ou Nome: </label> 
            </div> 
            <div>
              <input className='input-text' type="text" placeholder="Insira o ID ou Nome" name="username" required/>
            </div>
            <div> 
              <label className='label'>Senha: </label> 
            </div> 
            <div>
              <input className='input-text' type="password" placeholder="Insira a Senha" name="password" required/>
            </div>
            <div>
            </div>
            <div>
              <button className='enter-btn' type="submit" onClick={navigateHome}>Login</button> 
            </div>
          </form>  
        </div>
      </div>
    </>
  );
}

export default Login;
