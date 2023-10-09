import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import Carta from './components/carta/Carta'

function App() {

  const [movies, setMovies] = useState(null)
  const [query, setQuery] = useState('avengers')

  async function getMovies() {
    try {
      const res = await axios.get(`${'https://omdbapi.com/?apikey=1d7a32f1&s='}${query}`)
      setMovies(res.data.Search)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  function hadleInputChange(e) {
    setQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getMovies()
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className="border-2 border-gray-200 gridsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-400 rounded-xl items-center">
        <h1 className="min-w-[800px] p-2 text-2xl font-black">Buscador de Peliculas</h1>
        <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit} >
          <input className="w-[60%] p-2 rounded-2xl mb-3 text-center text-stone-400"
            type="text" placeholder='Busca aqui la pelicula por nombre'
            onChange={hadleInputChange} />
          <button className="bg-gray-200 p-4 w-[20%] mb-4 mt-2  text-slate-800 font-semibold hover:bg-slate-800 hover:text-gray-200">BUSCAR</button>
        </form>

        <div >
          <div className='min-w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
              bg-slate-800 rounded-b-xl gap-2 pt-6'>
            {movies && movies.map((movie) => (
              <Carta movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
