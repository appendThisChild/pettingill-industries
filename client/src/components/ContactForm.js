import React, { useState } from "react"

const ContactForm = ({ questions, state, handleSubmit, className }) => {
    const [info, setInfo] = useState(state)
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
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
        setInfo(state)
    }

    const questionsMapped = questions.map((q, i) => {
        if (q.tag === "input"){
            return(
                <input key={i} type="text" name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={true} placeholder={`${q.question}...`} />
            )  
        } else if (q.tag === "textarea") {
            return(
                <textarea key={i} name={q.objTag} value={info[q.objTag]} onChange={handleChange} required={q.objTag === "other" ? false : true} placeholder={`${q.question}...`}/>
            ) 
        } else {
            return null
        }
    })
    return(
        <form className={className} onSubmit={preSubmit}>
            <h3><span>&#x2608;</span> Contact Us!</h3>
            {questionsMapped}
            <button><span>&#x2607;<span>Send</span></span></button>
        </form>
    )
}

export default ContactForm;