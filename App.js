import React from 'react'
import Opening from "./Opening.js"
import GamePage from "./GamePage.js"
import Question from "./Question.js"
import Answers from "./Answers.js"
import IncorrectAnswer from "./IncorrectAnswer.js"

function App(){
    
    const [startGame, setStartGame] = React.useState(false)
    const [apiReturn, setApiReturn] = React.useState([])
    const [select, setSelect] = React.useState(false)
    
    
    React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
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

function checkId(id){
    console.log(id)
}




  const questionEl = apiReturn.map(api => {
    //   console.log(api)
//    console.log(api.incorrect_answers)
   
let a = api.incorrect_answers

let b = a.map((str, index) => ({id: Math.random() * 100, value: str}))

// console.log(b);
 
       return (
           <div>
                <Question 
                    question={api.question} 
                /> 
                <Answers 
                    answer={api.correct_answer}
                />
                <IncorrectAnswer
                    incorrectTest={b}
                    checkId={checkId}
                    id={b.id}
                />
            </div>
            )
        })



 
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
         {questionEl}
       </div>
    
        
    )
}

export default App