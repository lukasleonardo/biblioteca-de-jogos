import { useState } from 'react'
import PropTypes from 'prop-types'
import InputText from './inputText'

FormGame.propTypes ={
  addGame: PropTypes.func
}

export default function FormGame({addGame}){
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title,cover})
    setTitle("")
    setCover("")
  }

  return(
  <form onSubmit={handleSubmit}>
    <InputText id="title" label="Título :" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
    <InputText id="cover" label="Capa :" value={cover} onChange={(ev) => setCover(ev.target.value)}/>
    <button type="submit">Adicionar</button>
  </form>
  )
}