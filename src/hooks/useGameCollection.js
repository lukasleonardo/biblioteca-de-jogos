import { useState } from "react"
export default function useGameCollection(){
  const [games, setGames] = useState(()=>{
    const storedGames = localStorage.getItem("obc-game-stateLib")
    if(!storedGames) return[]
    const gamesArray = JSON.parse(storedGames)
    return gamesArray
  })
  
  const addGame = ({title, cover})=>{
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(state => {
      const gameState = [...state, game]
      localStorage.setItem("obc-game-stateLib", JSON.stringify(gameState))
      return gameState
    })
  }
  
  const removeGame = (id)=>{
    setGames(
      state=> {  
      const gameState =  state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-stateLib",JSON.stringify(gameState))  
      return gameState
    })
  }

  return {games,addGame,removeGame}
}