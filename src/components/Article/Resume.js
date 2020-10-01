import React from 'react'
import '../../Styles/Resume.css';

const Resume = () => {

    return (

        <div className = "Resume">

            <div className = "Resume-title">

                <h1>My <strong>Resume</strong></h1>

            </div>

            <div className = "Resume-box">

                <div className = "Resume-Education">

                    <div className = "Resume-Education-title">
                        <h1>Education</h1>
                    </div>

                    <div className = "Education-box">

                        <h4><i className = "far fa-calendar-check"></i>March 2014 - September 2018</h4>

                        <span>Faculty of Electronics, Telecommunications and Information Technology</span>
                        <p>
                            Used single-board computers like Raspberry Pi and
                            Arduino learning the programming language C , C++ , Python .
                        </p>

                        <p>
                            Took beginning classes for Web Dev , learning and creating small projects based on HTML/CSS/JS , <strong>ReactJS, Redux</strong>, GIT, SASS, BootStrap,
                            jQuery .
                        </p>
                        <h3>University Gheorghe Asachi of Iasi</h3>
                    </div>

                    <div className = "Education-box">

                        <h4><i className = "far fa-calendar-check"></i>March 2010 - September 2014</h4>

                        <span>Mathematics and Informatics </span>
                        <p>
                            Took classes for Network Software ,participated in a contest for Web Design . 
                        </p>
                        <p>
                            I learned the basic concept of Cisco Property and Protocols.
                        </p>
                        <h3>Pedagogical High School "Nicolae Iorga"</h3>
                    </div>

                </div>

                <div className = "Resume-Experience">

                    <div className = "Resume-Experience-title">
                        <h1>Experience</h1>
                    </div>

                    <div className = "Experience-box">

                        <h4><i className = "far fa-calendar-check"></i>December 2019 - May 2020</h4>

                        <span>Software Developer AUTOSAR</span>
                        <p>
                            Analyze customer requirements , prepare specifications, 
                            do implementation in the area of control and data acquisition systems 
                            based on AUTOSAR protocol and Matlab projects compiled on CodeBlocks.
                        </p>
                        <p>
                            Scripting code and solving the errors occurred during 
                            the testing process based on AUTOSAR procedure with Python as language.
                        </p>

                        <h3>EXPLEO Group Iasi </h3>

                    </div>

                    <div className = "Experience-box">

                        <h4><i className = "far fa-calendar-check"></i>October 2019 - December 2019</h4>
                        <span>Junior Software Tester</span>
                        <p>
                            Software implementation using C/C++ as main programming language.
                        </p>
                        <p>
                            Development using C/C++ and Python as secondary programming languages for specific tasks; 
                        </p>
                        <p>
                            Perform the set-up and maintain continuous integration and evaluation systems.
                        </p>

                        <h3>Continental Iasi </h3>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Resume
