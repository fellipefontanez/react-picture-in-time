import {useEffect} from 'react';
import './index.css';
import axios from 'axios';
import data from '../../objeto.json'


function App() {

  const dados = data;

  return (
    <div className="main-container">
      
      {dados.map(item => {
        return(
        <div className="container-componente-foto" key={item.id} >
          <div className="user-container">
            <div className="foto-user"><img src={item.user.profile_image.medium} alt="user" className="foto-usuario" key={item.id}/></div>
            <div key={item.id} className="nome-usuario"><span>{item.user.name}</span></div>
          </div>
          <div key={item.id} className="foto" ><img src={item.urls.small} alt="" /></div>
          <div className="container-legenda">
            <div className="legenda"><span className="legenda-foto">{item.alt_description}</span></div>
            <div key={item.id} className="likes">
              <span className="like-count">{item.likes} Likes</span>
            </div>
          </div>
          </div>
      )})}

      <div className="mostrar-mais"><button onClick={App}>Ver outras</button>
      </div>
    </div>

  );
}

export default App;
