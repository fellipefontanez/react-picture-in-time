import React from 'react';
import './index.css';
import axios from 'axios';
import data from '../../objeto.json'


function App() {
  console.log(data[0]);

  return (
    <div className="main-container">
      {data.map(item => {
      return(
      <div className="container-componente-foto" key={item.id}>
        <div className="foto"><img src={item.urls.small} alt="" /></div>
        <div className="container-legenda">
          <div className="legenda"><span className="legenda-foto">{item.alt_description}</span></div>
          <div className="likes"><span className="like-count">{item.likes} Likes</span></div>
        </div>
      </div>
      )})}
    </div>
  );
}

export default App;
