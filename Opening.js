import React from 'react'

function Opening(props){
    return (
     
            <div className="title-page">
                <h1 className="opening-title"> Quizzacal </h1>
                <p className="opening-p">Some description if needed </p>
                <button className="start-button" onClick={props.clickStart}> Start Quiz </button>
            </div>
    )
}

export default Opening