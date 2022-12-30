import React from 'react'

function Answers(props){
    
    const [isHovering, setIsHovering] = React.useState(false);
    
    const styles = {
        backgroundColor: props.isSelected ? "gray" : "white",  
    }
    
    const changeColor = () => {
        setIsHovering(true)
    }
    
    const removeChangeColor = () => {
        setIsHovering(false)
    }
    
        
    return (
        <div>
            <button onMouseEnter={changeColor} 
                onMouseLeave={removeChangeColor} 
                onClick={props.answerSelected}
                className="answers" 
                style={styles}>
                {props.answer}
            </button>
        </div>
    )
}

export default Answers