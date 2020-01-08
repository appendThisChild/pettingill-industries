import React, { useEffect } from "react"

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
        <Header />
        <div>
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
        </div>
        <Footer />
        </>
    )
}

export default ContactUs;