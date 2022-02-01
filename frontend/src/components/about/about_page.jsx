import React from "react";

export default class AboutPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="about-container">
                    <div className="about-item" id="susan">
                        <img src="	https://avatars.githubusercontent.com/u/87621185?v=4" alt="" />
                        <div className="about-name">
                            <h3>Susan Zea</h3>
                        </div>
                        <div className="about-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla nobis nemo aliquid autem possimus ratione. Qui suscipit voluptatum eveniet laborum aperiam non, voluptates consectetur, sit iste fugit nesciunt ad?</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/susanzea" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/susanzea/" target="_blank">LinkedIn</a>
                            <a href="#" target="_blank">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item" id="alex">
                        <img src="https://cdn.discordapp.com/attachments/932517204983939152/937790963529711716/IMG_0143.JPG" alt="" />
                        <div className="about-name">
                            <h3>Alex Wong</h3>
                        </div>
                        <div className="about-bio">
                            <p>Hey there, I’m Alex, a full stack engineer.
 I’m an avid puzzle solver and I love finding the best way to solve them!
 If there’s a puzzle or a bug, I’m already on it!</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/AlexDoes" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/alwong191/" target="_blank">LinkedIn</a>
                            <a href="#" target="_blank">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item" id="steven">
                        <img src="https://endflix-seeds.s3.amazonaws.com/Profilepic.jpg" alt="" />
                        <div className="about-name">
                            <h3>Steven Sookhai</h3>
                        </div>
                        <div className="about-bio">
                            <p>Hello there, I'm Steven, I am a web developer with experience in Ruby on Rails, JavaScript, React, and Redux. I'm passionate about problem solving, debugging, and writing clean, semantic code.</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/StevenSookhai" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/steven-sookhai-37192a22a/" target="_blank">LinkedIn</a>
                            <a href="https://angel.co/u/steven-sookhai" target="_blank">Angelist</a>
                        </div>
                        
                    </div>
                    <div className="about-item" id="anthony">
                        <img src="https://endflix-seeds.s3.amazonaws.com/Kermit_the_Frog.jpeg" alt="" />
                        <div className="about-name">
                            <h3>Anthony Carroll</h3>
                        </div>
                        <div className="about-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nulla nobis nemo aliquid autem possimus ratione. Qui suscipit voluptatum eveniet laborum aperiam non, voluptates consectetur, sit iste fugit nesciunt ad?</p>
                        </div>
                        <div className="about-social-links">
                            <a href="https://github.com/tc8appdevelo" target="_blank">Github</a>
                            <a href="#" target="_blank">LinkedIn</a>
                            <a href="#" target="_blank">Angelist</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}