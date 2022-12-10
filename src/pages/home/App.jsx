import { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { Icon } from '@iconify/react';


function App() {
  const url = 'https://api.unsplash.com/photos/random/?client_id=l2yXgd4UaAleOP2j7R9VneHn_66R3_444bjxNkmVRwY&count=10';

  const [dados , setDados] = useState([]);
  const [erro , setErro] = useState(false);
  const getPhotos = async () =>{
    try {
      const response = await axios.get(url);
      if (response.data.length !== 0) {
        setErro(false);
        setDados([...dados,...response.data]);
      }
    } catch (error) {
        console.error("Erro: ", error);
        setErro(true);
    }
  }
  const handleLikeBtn = (index) => {
    const newDados = [...dados];
    newDados[index].liked_by_user = !newDados[index].liked_by_user;
    newDados[index].liked_by_user ? newDados[index].likes++ : newDados[index].likes--;
    setDados(newDados);
  }
  
  useEffect(()=>{
    getPhotos()
  }, [])

  
  return (
    <div className="main-container">
      {dados.map((item, index) => {

        return(
        <section className="container-componente-foto" key={item.id}  onDoubleClick={()=>handleLikeBtn(index)}>
          <div className="user-container">
           <img src={item.user.profile_image.medium} alt="user" className="foto-usuario" key={item.id}/>
            <span>{!item.sponsorship ? item.user.name : `${item.user.name} • Patrocinado`}</span>
          </div>
          <img className="foto" src={item.urls.regular} alt="" />
          <div className="container-legenda">
            <span>{`${!item.sponsorship ? item.alt_description : item.sponsorship.tagline}`}</span>
            <div key={item.id} className="likes">
              <button className='like-button' onClick={() => handleLikeBtn(index)}>
                <Icon icon={`${item.liked_by_user ? "flat-color-icons" : "icon-park-outline"}:like`} />
              </button>
              <span>{item.likes} Likes</span>
              </div>
            </div>
          </section>
      )})}
      {erro && <span>A conexão não pode ser estabelecida com o servidor. Por favor, tente novamente mais tarde</span>}
      <div className="mostrar-mais"><button onClick={getPhotos}>Ver outras</button>
      </div>
    </div>

  );
}

export default App;
