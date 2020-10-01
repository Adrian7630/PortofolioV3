import React from 'react'
import '../Styles/Portofolio.css';
import Symbol from '../img/symbol.png';

const Card = ( { app, info, tool, web, code } ) =>{

    return (
        <div className = "Card">
            <div className = "Card-inner">
            <figure className = "Front-Card">

                <div className = "Logo">
                    <img src = { Symbol } alt = "Project Symbol"/>
                </div>
                   
                <h1> #{ app }</h1>

            </figure>

            <figure className = "Back-Card">
            
                <div className = "Info-Card">

                    <h1>{ app }</h1>

                    <p>{ info }</p>

                    <span>{ tool }</span>

                </div>

                <div className = "Icons">

                    <a href = { code } target = "_blank" rel = "noopener noreferrer"><i className = "far fa-file-code"></i></a>
                    <a href = { web } target = "_blank" rel = "noopener noreferrer"><i className = "far fa-eye"></i></a>

                </div>

            </figure>
            </div>
        </div>
    )
}

export default Card
