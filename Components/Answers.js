import React from 'react'

const [isHovering, setIsHovering] = React.useState(false);

function Answers(){

    const className = props.allChecked ?
                props.isCorrect ?
                    'correct' : props.isSelected ?
                    'wrong' : 'checked' :
                        props.isSelected ?
                            'selected' : 'answer'

}

export default Answers