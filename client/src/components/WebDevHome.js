import React, { useState, useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import ContactForm from "./ContactForm.js"
import WebDevSection1 from "./WebDevSection1.js"
import WebDevSection2 from "./WebDevSection2.js"

const WebDevHome = props => {
    const [ position, setPosition ] = useState("50% 50%")
    const [ size, setSize ] = useState("250%")
    const [ pulsingSize, setPulsingSize ] = useState("webDevBetweenSections1_0")
    const [ timing, setTiming ] = useState("cubic-bezier(.09,1.44,.17,.24)")
    let myInterval1 = 0;
    let myInterval2 = 0;

    const handleSubmit = message => {
        console.log(message)
    }

    const changeBackground = num => {
        const randomNum1 = Math.floor(Math.random() * 100)
        setSize(`${150 + randomNum1}%`)
        const randomNum2 = Math.floor(Math.random() * 100)
        const randomNum3 = Math.floor(Math.random() * 100)
        setPosition(`${randomNum2}% ${randomNum3}%`)
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
        changeBackground(i)
        myInterval1 = setInterval(() => {
            i++
            changeBackground(i)
            if (i > 3) i = 1;
        }, 2250);
    }
    const pulsing = i => {
        if ( i === 0){
            setPulsingSize("webDevBetweenSections1_1")
        } else {
            setPulsingSize("webDevBetweenSections1_0")
        }
    }
    const pulse = () => {
        let i = 0
        pulsing(i)
        myInterval2 = setInterval(() => {
            if ( i === 0){
                i++
                pulsing(i)
                
            } else {
                i--
                pulsing(i)
                
            }
        }, 1250)
    }
    useEffect(() => {
        glitchOut()
        pulse()
        return () => {
            clearInterval(myInterval1)
            clearInterval(myInterval2)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
        <Header />
        
        <div className="webHome" style={{ backgroundPosition: position, backgroundSize: `${size}`, transition: `all 2.25s ${timing} 0s`}}>
            <div>
                <h1>Website Design</h1>
                <h1>Reclaiming Imagination</h1>
            </div>
        </div>
        <WebDevSection1 />
        {/* style={{ backgroundSize: `${pulsingSize}`}} */}
        <div className={`webDevBetweenSections1 ${pulsingSize}`} ></div>
        <WebDevSection2 />
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
                question: "Message",
                tag: "textarea",
                objTag: "message"
            }
            ]}
            handleSubmit={handleSubmit} />
        <Footer />
        </>
    )
}

export default WebDevHome;