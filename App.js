import React from 'react'
import Opening from "./Opening.js"
import GamePage from "./GamePage.js"

function App(){
    
    const [startGame, setStartGame] = React.useState(false)
    // const [apiReturn, setApiReturn] = React.useState({})
    
    // React.useEffect(() => {
    // fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
    //     .then(res => res.json())
    //     .then(data => setApiReturn(data.results))
    // }, [])

    
    
    // console.log(apiReturn)
        
    
    
    function clickStart(){
        setStartGame(true)
    }
    
    console.log(startGame)
    
    return (
        !startGame ? 
        <Opening 
            clickStart={clickStart}
        /> 
        
        :
    <GamePage />
        
        
        
    )
}

export default App