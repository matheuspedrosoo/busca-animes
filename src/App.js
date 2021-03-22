import './App.css'
import Tittle from './components/Tittle/Tittle'
import Busca from './components/Busca/Busca'
import { useEffect, useState } from 'react'
import Pagination from './components/utils/Pagination'
import qs from 'qs'

const api = 'https://kitsu.io/api/edge/'

const LIMIT = 15

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // setInfo({})

    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
    }

    if (text) {
      query.filter = {
        text,
      }
    }
    //`${api}anime?filter[text]=${text}&page[limit]=15`

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then(response => response.json())
      .then(response => {
        setInfo(response)
        console.log(response)
      })
  }, [text, offset])

  return (
    <div className="App">
      <Tittle />
      <Busca value={text} onChange={busca => setText(busca)} />
      {text && !info.data && <span>Carregando...</span>}
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
      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </div>
  )
}

export default App
