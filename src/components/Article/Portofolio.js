import React from 'react'
import '../../Styles/Portofolio.css';
import Card from '../Card';
import CardData from '../CardData';

const Portofolio = () =>{

    return (
        <div className = " Portofolio ">
            
            <div className = "Portofolio-box">

                <div className = "Portofolio-title">
                    <h1> Featured <strong>Portofolio</strong> !</h1>
                </div>

                <div className = "Portofolio-card">

                    {CardData.map( (data, index) => (

                        <Card 
                            app = { data.app } 
                            url = { data.web } 
                            info = { data.description} 
                            tool = {data.tools}
                            web = { data.web }
                            code = { data.code }
                            key = { index }
                        />

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Portofolio;