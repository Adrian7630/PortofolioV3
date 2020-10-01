import React from 'react';
import '../../Styles/About.css';
import Smile from '../../img/ME.JPG';
import { Link } from 'react-router-dom';

import CV from '../../CV/CV-EN.pdf';

const About = () =>{

    return (

        <div className = "About">

            <div className = "About-box">

                <div className = "About-avatar">   
                    <img src = { Smile } alt = "Adrian"></img>
                </div>

                <div className = "About-data">

                    <div className = "About-title">

                        <span>About <strong>Me</strong></span>

                        <p> 
                            While working as a Software Developer in 2018,
                            I was introduced to ReactJS by a close friend.
                            I've always been curious about 
                            software development but after creating some 
                            small projects i was officially <strong>hooked</strong>.
                        </p>

                        <p>
                            Since being introduced to ReactJS 
                            i have watched and read as much material as one can possibly go through, finding something to be passion about and love. 
                        </p>

                    </div>
                        <div className = "About-btn">

                            <Link to = '/Contact' >   
                                <button className = "btnHire"> HIRE ME </button>
                            </Link>
                            
                            <Link to = "route" onClick={(event) => { event.preventDefault(); window.open(CV); }}>
                                <button className = "btnDwl">DOWNLOAD CV</button>
                            </Link>

                        </div>
                    </div>

            </div>

        </div>
    )
}

export default About;
