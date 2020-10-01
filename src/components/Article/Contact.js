import React, { useState } from 'react';
import '../../Styles/Contact.css';

import * as emailjs from 'emailjs-com';

const Contact = () => {

    const [ans, setAns] = useState(0)

    const [color, setColor] = useState('on');

    const [msg1, setMsg1] = useState('');
    const [msg2, setMsg2] = useState('');
    const [msg3, setMsg3] = useState('');

    const test1 = (e) =>
    {
        setMsg1(e.target.value);
        setAns(1);
    }

    const test2 = (e) =>
    {
        setMsg2(e.target.value);
        setAns(1);
    }

    const test3 = (e) =>
    {
        setMsg3(e.target.value);
        setAns(1);
    }

    const sendMail = ( e ) =>
    {
        e.preventDefault();

        if ( ans === 1 )
        {
            emailjs.sendForm('gmail', 'portofolio_template', e.target, 'user_TVSiLna0aJ3sBylFvYN3R')
            .then( ( result ) => {
    
                console.log( result.text );
    
            }, ( error ) => {
    
                console.log( error.text );
    
            });
    
            e.target.reset()
    
            setMsg1('');
            setMsg2('');
            setMsg3('');

            setColor('on');
            setAns(0);

        }else{
            setColor('off')
        }

    }

    return (

        <div className = "Contact-box">

            <div className = "Contact">

                <div className = "Contact-title ">
                    <h1>Get <span>In Touch</span> !</h1>
                </div>

                <div className = "Contact-data">

                <div className = "Contact-details">

                    <div className = "Contact-person">My Contact </div>

                        <div className = "Contact-info">

                            <h4><i className = "fas fa-user-circle"></i> : <span>Prisacaru Adrian</span></h4>
                            <h4><i className = "fas fa-map-marked-alt"></i> : <span>Romania, Iasi</span></h4>
                            <h4><i className = "fas fa-map-marker-alt"></i> : <span>St.Vasile Lupu 116 Iași 707252</span></h4>           
                            <h4><i className = "fas fa-envelope"></i> : <span>prisacaru.adrian25@gmail.com</span></h4>
                            <h4><i className = "fab fa-skype"></i> : <span>live:.cid.689ba5290b78cf22</span></h4>
                            <h4><i className = "fas fa-mobile-alt"></i> : <span>+40 0748051195</span></h4>

                            <div className = "icons">

                                <a href = "https://github.com/Adrian7630" target = "_blank" rel = "noopener noreferrer"><i className = "fab fa-github"></i></a>
                                <a href = "https://www.linkedin.com/in/adrian-prisacaru-a9a45815b/" target = "_blank" rel = "noopener noreferrer"><i className = "fab fa-linkedin"></i></a>

                            </div>

                        </div>

                    </div>

                    <div className = "Contact-table">

                        <div className = "user">
                            <p>Ask a question </p>
                        </div>

                        <form onSubmit = { sendMail } encType="multipart/form-data" className = "Contact-text">

                            <input 
                                className = "name" 
                                type = "text"  
                                placeholder = "Your name.."
                                name = "name"
                                onChange = { test1 }
                                value = { msg1 } 
                            />
                            <input 
                                className = "email" 
                                type = "email" 
                                placeholder = "Your email.."
                                name = "mail"
                                onChange = { test2 }
                                value = { msg2 }
                            />
                            <textarea 
                                cols = "5" rows = "4"   
                                placeholder = "Write a message"
                                name = "msg"
                                onChange = { test3 }
                                value = { msg3 }
                            >
                            </textarea> 

                            <button type = "submit" value = "Send" >SEND MESSAGE</button>

                            <h1 className = { color }>Please fill the form ! </h1>

                        </form>

                    </div>

                  
                </div>

            </div>

        </div>
    )
}

export default Contact;
