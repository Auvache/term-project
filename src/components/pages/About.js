import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className="about-page">
                <h2>About</h2>
                <p>This is my experience learning react</p>
                <p>
                    The memory game app was a fun project for learning how to use reactjs. Although understanding components, props, and state were difficult at first, they have proved to be
                    very useful in building this game application.
                </p>
                <p>
                    Because I am not great at learning coding concepts from lectures, I wasn't making much progress in understanding react until I found a tutorial on YouTube for a to do list application.
                    Following along through that code helped me to gain an understanding of components and states that I then used in my memory game application. The to do list application is included as 
                    the last page in my project. 
                </p>
                <p>
                    The hardest portion of the project was getting the tiles to shuffle and randomize because I didn't understand setting state. Once I understood how to shuffle the cards, there was no 
                    functionality that I felt I couldn't program on the app. There are some animations that I wanted to do originally, but I abandoned them when I changed to the vinyl backgrounds on the 
                    memory tiles. Adding players was another feature of which I was uncertain until I decided that it would be most aesthetically pleasing to not have an input box present and to give the
                    players static names. I learned that having a plan before programming is a best practice, and that refactoring isn't all that difficult if you have well organized code. 
                </p>
                <p>
                    I am still in the dark on good practices for react programming and efficient programming, but this project fulfilled its purpose for me; to help me understand the basics of react 
                    and make a fun application for my IS 542 term project.
                </p>
            </div>
        </React.Fragment>
    )
}

export default About;