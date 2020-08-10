import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './img/img_corona.png'
import Axios from 'axios'
import Moment from 'moment'
import Img2 from './img/brasil.png'
import Navbar from './components/Navbar'

function App() {

const [state, setState] = useState({posts: []})
const [state2, setState2] = useState({posts2: []})

useEffect(() => {
 Axios.get("https://covid19-brazil-api.now.sh/api/report/v1").then((response) => {
     console.log(response)
     setState({
       posts: response.data.data
      })
      console.log(response.data)
      console.log(response.data.data)
 })
}, [])

useEffect(() => {
  Axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil").then((response) => {
    console.log(response)

    setState2({
      posts2: response.data.data // Não é array não faz o map colcoa posts2.deathes direto
    })
    console.log(response.data)
    console.log(response.data.data)
  })
}, [])

const {posts} = state
const {posts2} = state2

  return (
    <div className="App">

    <Navbar/>
<br/>
<br/>
<div className="container">
  <div className="row">
  <div className="col-md">

<div class="card" id="card1">
  <div className="card-body">
         <p id="tituloCard1">Total de Mortes</p>
         <p id="result1">{posts2.deaths}</p>
         <hr id="hr"></hr>
         <p id="tituloCard1">Casos Confirmados</p>
        <p id="result1">{posts2.confirmed}</p>
  </div>
      
</div>
</div>
<div className="col-md">
<div class="card" id="card2">
  <div className="card-body">
 <p id="tituloCard1">Recuperados</p>
  <p id="result1">{posts2.recovered}</p>
  </div>
      
</div>
</div>
      <div className="col-md">
      <a href="/world"><button id="btn" className="btn btn-success">Lista de Paises</button></a>
<br></br>
<br></br>
<br/>
<br/>
        
            <h1>Lista Covid-19 Estados Brasileiros <img src={Img2} height="70px" width="70px"/></h1>
            <br/>
           <table border="2" id="table">
             <tr>
               <th>UF</th>
               <th>Estado</th>
               <th>Casos</th>
               <th>Mortes</th>
               <th>Suspeitos</th>
               <th>Descartados</th>
               <th>Data</th>
                      
             </tr>
             {
               posts.map(posts => 
                  <tr>
                    <td>{posts.uf}</td>
               <td>{posts.state}</td>
               <td>{posts.cases}</td>
               <td>{posts.deaths}</td>
               <td>{posts.suspects}</td>
               <td>{posts.refuses}</td>
               <td>{Moment(posts.datetime).format('DD-MM-YY, h:mm:ss a')}</td>
                    </tr>
        
               )
             } 
          
           </table>
        
      </div>
    </div>
</div>
    </div>
  );
}

export default App;
