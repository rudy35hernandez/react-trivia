import React from 'react'

const [isHovering, setIsHovering] = React.useState(false);

function Answers(){

    const className = props.allChecked ?
                props.isCorrect ?
                    'correct' : props.isSelected ?
                    'wrong' : 'checked' :
                        props.isSelected ?
                            'selected' : 'answer'

    const styles = {
        background: isHovering ? "orange" : ""
    }


    function hovering(){
        setIsHovering(true)
    }
    
    function notHovering(){
        setIsHovering(false)
    }
    
    return (
        <div>
            <button 
                className={className}
                style={styles}
                onMouseEnter={hovering}
                onMouseLeave={notHovering}
                onClick={props.answerSelected}
            >
                {props.answer}
            </button>
        </div>
    )

}

export default Answers