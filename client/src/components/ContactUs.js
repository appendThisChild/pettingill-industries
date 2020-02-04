import React, { useEffect } from "react"
import { useToasts } from "react-toast-notifications"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import ContactForm from "./ContactForm.js"

//provider
import { useContactMessage } from "../context/ContactMessageProvider.js"

const ContactUs = () => {
    const { sendMessage } = useContactMessage()
    const { addToast } = useToasts()

    const handleSubmit = message => {
        sendMessage(message, (result) => {
            if (result === "Successful"){
                addToast('Message Sent!', { 
                    appearance: 'success',
                    autoDismiss: true,
                })
            } else {
                addToast('Wrong went Wrong!', { 
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        })
    }
    
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return(
        <>
            <Header color={"greenyellow"}/>
            <div className="contact">
                <div>
                    <main className="contactSection">
                        <h1><span>&#x2633;</span> Any questions? Send us an inquiry!</h1>
                        <ul>
                            <li>Tell us about your project(s).</li>
                            <li>What needs are you aiming to fill?</li>
                            
                            <li>What timetable you are working around?</li>
                            <li>Interested in more than one service?</li>
                            <li>Low budget? Ask us about our investment opportunities.</li>
                            
                            <li>New business? Let's get it off the ground.</li>
                            <li>Leave your contact info and we'll reach out.</li>
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
            <Footer color={"greenyellow"}/>
        </>
    )
}

export default ContactUs;