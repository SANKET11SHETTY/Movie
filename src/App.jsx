import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import movies from './movie.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Header/>
      <div className="main">
      {
        movies.map((e)=>{
          return(
        <Movie title={e.Title}
          year={e.Year}
          img={e.Poster}
          
        />
          )
        })
      }
       
      </div>
    </div>
    </>
  )
}

export default App
