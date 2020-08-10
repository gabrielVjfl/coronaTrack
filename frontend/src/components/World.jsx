import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import Moment from 'moment'
const CovidWorld = () => {

const [state, setState] = useState({posts: []})

useEffect(() => {
Axios.get("https://covid19-brazil-api.now.sh/api/report/v1/countries").then((response) => {
    console.log(response)

    setState({
        posts: response.data.data
    })
    console.log(response.data)
    console.log(response.data.data)
})
}, [])

const {posts} = state

    return (
<div>
    <Navbar/>
    <div className="app">
      <div className="container">
          <div className="row">
              <div className="col-md">
                  <h1 id="titulo2">Lista de Países Covid-19</h1>
                  <br></br>
                  <br></br>
                  <div className="col-md">
                      <table border="2" id="table">
                      <tr>
                          <th>País</th>
                          <th>Casos</th>
                          <th>Confirmados</th>
                          <th>Mortes</th>
                          <th>Recuperados</th>
                          <th>Data</th>
                      </tr>
                      {
                          posts.map(posts => 
                            <tr>
                           <td>{posts.country}</td>
                          <td>{posts.cases}</td>
                          <td>{posts.confirmed}</td>
                          <td>{posts.deaths}</td>
                          <td>{posts.recovered}</td>
                          <td>{Moment(posts.updated_at).format("DD-MM-YY, h:mm:ss a")}</td>
                            </tr>
                            )
                      }
                      </table>
                  </div>
              </div>
          </div>
      </div>
</div>
</div>
    )
}
export default  CovidWorld