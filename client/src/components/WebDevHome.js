import React, { useState, useEffect } from "react"
import Image from "../images/website-development.jpg"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import ContactForm from "./ContactForm.js"

const WebDevHome = props => {
    const [ position, setPosition ] = useState("50% 50%")
    const [ size, setSize ] = useState("125%")
    const [ transition, setTransition ] = useState(".5s")
    const [ timing, setTiming ] = useState("cubic-bezier(.09,1.44,.17,.24)")

    const handleSubmit = message => {
        console.log(message)
    }

    const changeBackground = num => {
        const randomNum1 = Math.floor(Math.random() * 100)
        setSize(`${125 + randomNum1}%`)
        const randomNum2 = Math.floor(Math.random() * 100)
        const randomNum3 = Math.floor(Math.random() * 100)
        setPosition(`${randomNum2}% ${randomNum3}%`)
        // const randomNum4 = Math.random() * 2 + 1
        setTransition(`${3}s`)
        const option1 = "cubic-bezier(1,.56,0,1.22)"
        const option2 = "cubic-bezier(.95,.69,.19,1.95)"
        const option3 = "cubic-bezier(.6,-0.95,0,1.17)"
        if (num % 3 === 0){
            setTiming(`${option1}`)
        } else if (num % 2 === 0 ){
            setTiming(`${option2}`)
        } else {
            setTiming(`${option3}`)
        }
    }
    const glitchOut = () => {
        let i = 1
        changeBackground(1)
        i++
        setInterval(() => {
            changeBackground(i)
            i++
            if (i > 3) i = 1;
        }, 3000);
    }
    useEffect(() => {
        glitchOut()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
        <Header />
        <div className="webHome" style={{ backgroundPosition: position, backgroundSize: `auto ${size}`, transition: `all ${transition} ${timing} 0s`}}>
            <div>
                <h1>Website Development</h1>
                <div>
                    <main>
                        <img src={Image} alt="Working on your Business"/>
                    </main>
                    <section>
                        <h2>Our Mission</h2>
                        
                    </section>
                    <section>
                        <h2>Services</h2>

                    </section>
                </div>
                <ContactForm 
                    className="webForm"
                    questions={[
                    {
                        question: "Name",
                        tag: "input",
                        objTag: "name"
                    },
                    {
                        question: "Email Address",
                        tag: "input",
                        objTag: "email"
                    },
                    {
                        question: "Telephone",
                        tag: "input",
                        objTag: "number"
                    },
                    {
                        question: "Name of the business:",
                        tag: "input",
                        objTag: "businessName"
                    },
                    {
                        question: "Describe the business:",
                        tag: "textarea",
                        objTag: "businessAbout"
                    },
                    {
                        question: "What would the website accomplish for the business?",
                        tag: "textarea",
                        objTag: "businessWebsite"
                    },
                    {
                        question: "Other:",
                        tag: "textarea",
                        objTag: "other"
                    }
                    ]}
                    handleSubmit={handleSubmit} />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default WebDevHome;