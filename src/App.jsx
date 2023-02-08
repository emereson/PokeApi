import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  // para guardar la informacion de la API
  const [pokemon, setpokemon] = useState()
  // Para guardar lo que ingresamos en el input
  const [inputValue, setinputValue] = useState('pikachu')
  // para controlar el error de la Api
  const [hasError, sethasError] = useState(false)
  // para generar una pantalla de carga
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    // *se hace la peticion dependiendo de inputValue
    // *el valos de isLoading cambia apenas se haga la repeticion
    // *Al ejecutar el catch , colocamos en true el estado hasHerror
    // *Al 
    const url =`https://pokeapi.co/api/v2/pokemon/${inputValue}`
    setisLoading(true)
    axios.get(url)
    .then(res => {
      setpokemon(res.data)
      sethasError(false)})
    .catch(err => {
      console.log(err)
      sethasError(true)})
      .finally(() => {
        // setTimeout(() =>setisLoading(false),3000)
        setisLoading(false)
        })
        // El callback de useEffect SE EJECUTA EN EL primer renderizado y cada vez que cambia el calor de inputVlue
  },[inputValue])

  const handleSubmit = e => {
    // prevent Default  es un metodo que no deja que se recargue la pagina  al hacer submit
    e.preventDefault()
    setinputValue(e.target.namePoke.value);
  }
  console.log(inputValue);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='namePoke' type="text"  placeholder='pokemon name'/>
        <button className='button'>Search</button>
      </form>
      <h1>PokeApi</h1>
      {
        isLoading?
        <h1>Loading...</h1>
        :
          hasError ?
            <h1>Pokemon not font</h1>
          :
          <Pokemon pokemon={pokemon}/>
      }
    </div>
  )
}

export default App
