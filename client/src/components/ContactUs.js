import React, { useEffect } from "react"

// import Image from "../images/Red_Transparent_Decoration_PNG_Clipart.png"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import ContactForm from "./ContactForm.js"

const ContactUs = props => {

    const handleSubmit = message => {
        console.log(message)
    }
    useEffect(() => {
        window.scroll(0,0)

    }, [])

    return(
        <>
        <Header color={"red"}/>
        <div className="contact">
            <div>
                <main className="contactSection">
                    {/* <img src={Image} alt=""/> */}
                    <h1>Any questions? Send us an inquiry!</h1>
                    <ul>
                        <li>Tell us about your project(s).</li>
                        <li>What needs are you aiming to fill?</li>
                        
                        <li>What timetable you are working around?</li>
                        <li>Interested in more than one service?</li>
                        <li>Low budget? Ask us about our investment opportunities.</li>
                        
                        <li>New business? Let's get it off the ground.</li>
                    </ul>
                </main>
                <ContactForm 
                    className="webForm"
                    questions={[
                    {
                        question: "Name",
                        tag: "input",
                        objTag: "name"
                    },
                    {
                        question: "Company",
                        tag: "input",
                        objTag: "company"
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
                    state={
                        {
                            name: "",
                            company: "",
                            email: "",
                            message: ""
                        }
                    }
                    handleSubmit={handleSubmit} 
                /> 
            </div>
        </div>
        <Footer color={"red"}/>
        </>
    )
}

export default ContactUs;