import React, { useState } from "react"

const ContactForm = ({ questions, handleSubmit, className }) => {
    const [info, setInfo] = useState({})
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setInfo({
            ...info,
            [name]: value
        })
    }
    const preSubmit = e => {
        e.preventDefault()
        const entries = Object.entries(info)
        const message = entries.map(arr => {
            const question = questions.filter(obj => {
                return obj.objTag === arr[0]
            })
            return(
                {
                    q: question[0].question,
                    a: arr[1]
                }
            )
        })
        handleSubmit(message)
    }
    const questionsMapped = questions.map((q, i) => {
        if (q.tag === "input"){
            return(
                <div key={i}>
                    <p>{q.question}</p>
                    <input type="text" name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={true} />
                </div>
            )  
        } else if (q.tag === "textarea") {
            return(
                <div key={i}>
                    <p>{q.question}</p>
                    <textarea name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={q.objTag === "other" ? false : true}/>
                </div>
            ) 
        } else {
            return null
        }
    })
    return(
        <form className={className} onSubmit={preSubmit}>
            <h3>Contact Us!</h3>
            {questionsMapped}
            <button><span>&#x2609; <span>Send</span></span></button>
        </form>
    )
}

export default ContactForm;