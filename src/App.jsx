import Game from "./components/gameCard"
import FormGame from "./components/formGame"
import useGameCollection from "./hooks/useGameCollection"

export default function App(){
  const {games, addGame ,removeGame} = useGameCollection()
  return(
    <div className="App">
      <h1> Biblioteca de Jogos </h1>
      <FormGame addGame={addGame}/>
      <div className="games">
        {games.length > 0 ? games.map((game)=>(
          <Game 
          key={game.id}
          title={game.title}
          cover ={game.cover}
          onRemove = {()=>removeGame(game.id)}
          />)): 
          (<h2 style={{margin:"4rem auto"}}> Parece que não há nada aqui!</h2>)}
      </div>
    </div>
  )
}