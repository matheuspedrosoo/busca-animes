import './App.css'
import Tittle from './components/Tittle/Tittle'
import Busca from './components/Busca/Busca'
import { useEffect, useState } from 'react'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then(response => response.json())
        .then(response => {
          setInfo(response)
          console.log(response)
        })
    }
  }, [text])

  return (
    <div className="App">
      <Tittle />
      <Busca value={text} onChange={busca => setText(busca)} />

      {info.data && (
        <ul className="animes-list">
          {info.data.map(anime => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
