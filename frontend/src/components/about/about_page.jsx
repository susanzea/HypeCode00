import React from "react";

export default class AboutPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="about-container">
                    <div className="about-item">
                        <img src="	https://avatars.githubusercontent.com/u/87621185?v=4" alt="" />
                        <div className="about-name">
                            <h3>Suzan Zea</h3>
                        </div>
                        <div className="about-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla nobis nemo aliquid autem possimus ratione. Qui suscipit voluptatum eveniet laborum aperiam non, voluptates consectetur, sit iste fugit nesciunt ad?</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/susanzea">Github</a>
                            <a href="https://www.linkedin.com/in/susanzea/">LinkedIn</a>
                            <a href="#">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item">
                        <img src="https://cdn.discordapp.com/attachments/932517204983939152/937790963529711716/IMG_0143.JPG" alt="" />
                        <div className="about-name">
                            <h3>Alex Wong</h3>
                        </div>
                        <div className="about-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla nobis nemo aliquid autem possimus ratione. Qui suscipit voluptatum eveniet laborum aperiam non, voluptates consectetur, sit iste fugit nesciunt ad? </p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/AlexDoes">Github</a>
                            <a href="https://www.linkedin.com/in/alwong191/">LinkedIn</a>
                            <a href="#">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item">
                        <img src="https://endflix-seeds.s3.amazonaws.com/Profilepic.jpg" alt="" />
                        <div className="about-name">
                            <h3>Steven Sookhai</h3>
                        </div>
                        <div className="about-bio">
                            <p>Hello there, I'm Steven, I am a web developer with experience in Ruby on Rails, JavaScript, React, and Redux. I'm passionate about problem solving, debugging, and writing clean, semantic code.</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/StevenSookhai">Github</a>
                            <a href="https://www.linkedin.com/in/steven-sookhai-37192a22a/">LinkedIn</a>
                            <a href="https://angel.co/u/steven-sookhai">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item">
                        <img src="https://endflix-seeds.s3.amazonaws.com/Kermit_the_Frog.jpeg" alt="" />
                        <div className="about-name">
                            <h3>Anthony Carroll</h3>
                        </div>
                        <div className="about-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla nobis nemo aliquid autem possimus ratione. Qui suscipit voluptatum eveniet laborum aperiam non, voluptates consectetur, sit iste fugit nesciunt ad?</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/tc8appdevelo">Github</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Angelist</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}