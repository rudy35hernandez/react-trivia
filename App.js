import React from 'react'
import Opening from "./Opening.js"
import GamePage from "./GamePage.js"
import Question from "./Question.js"

function App(){
    
    const [startGame, setStartGame] = React.useState(false)
    const [apiReturn, setApiReturn] = React.useState([])
    
    React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
        .then(res => res.json())
        .then(data => setApiReturn(data.results))
    }, [])
    
    
function escapeHTML(str){
    
 return str.replace(/[&<>'"]/g, 
  tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag]))
}

console.log(escapeHTML(`In what sport is a &quot;shuttlecock&quot; used?`))

    function apiEl(){
        return apiReturn.map(api => {
            return (
                <Question 
                    question={api.question}
                />
            )
        })
    }
    
    
    
    
    
    function clickStart(){
        setStartGame(true)
    }
    
    
    
    return (
        !startGame ? 
        <Opening 
            clickStart={clickStart}
        /> 
        
        :
       <div>
        {apiEl()}
       </div>
        
    )
}

export default App