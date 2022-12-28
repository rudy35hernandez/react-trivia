import React from 'react'
import Opening from "./Opening.js"
import Questions from "./Components/Questions.js"
import {nanoid} from 'nanoid'


// import {nanoid} from "nanoid"

function App(){
    
    const [startGame, setStartGame] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [newGame, setNewGame] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [allChecked, setChecked] = React.useState(false)
    
    const apiPage = "https://opentdb.com/api.php?amount=5"
    
    React.useEffect(()=>{
        fetch(apiPage)
            .then(res => res.json())
            .then(data => {
               setQuestions(newQuestions(data.results))
            })
    }, [newGame])
    
    
   
    
    function getAnswersArray(elem){
        let allAnswers = elem.incorrect_answers.map(answer => {
            return {
                answer: answer,
                id: nanoid(),
                isCorrect: false,
                isSelected: false,
                isChecked: false
            }
        })
        
        allAnswers.push({
            answer: elem.correct_answer,
            id: nanoid(),
            isCorrect: true,
            isSelected: false,
            isChcked: false
        })
        
        return allAnswers
    }
    
    
    function newQuestions(data){
        const questions = data.map(el => {
            return {
                id: nanoid(),
                question: el.question,
                answers: getAnswersArray(el)
            }
        })
        return questions
    }
    
    
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


    function clickStart(){
        setStartGame(true)
    }
    

  
 
    const questionEl = questions.map(el => {
        return (
            <div key={nanoid()}>
                <Questions 
                    questions={el.question}
                    key={el.id}
                />
            </div>
        )
    })
    
    
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