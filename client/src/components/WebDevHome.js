import React, { useState, useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import ContactForm from "./ContactForm.js"
import WebDevSection1 from "./WebDevSection1.js"
import WebDevSection2 from "./WebDevSection2.js"
import WebDevSection3 from "./WebDevSection3.js"

const WebDevHome = props => {
    const [divs, setDivs] = useState([])
    const [ glitchObj, setGlitchObj ] = useState({ position: "50% 50%", size: "250%", timing: "cubic-bezier(.09,1.44,.17,.24)" })
    const [ pulsingSize, setPulsingSize ] = useState("webDevBetweenSections1_0")
    const width = window.innerWidth
    let numberOfLines;
    if (width < 425){ numberOfLines = 15; } 
    else if (width < 768){ numberOfLines = 20; } 
    else if (width < 1024){ numberOfLines = 25; } 
    else { numberOfLines = 30; }
    const lineLengths = 75;
    const stepsBeforeTurn = 25;
    const lineSpeed = 50;
    let myInterval1 = 0;
    let myInterval2 = 0;
    let myInterval3 = 0;

    const handleSubmit = message => {
        console.log(message)
    }

    const changeBackground = num => {
        const randomNum1 = Math.floor(Math.random() * 100)
        const randomNum2 = Math.floor(Math.random() * 100)
        const randomNum3 = Math.floor(Math.random() * 100)
        const option1 = "cubic-bezier(1,.56,0,1.22)"
        const option2 = "cubic-bezier(.95,.69,.19,1.95)"
        const option3 = "cubic-bezier(.6,-0.95,0,1.17)"
        const size = `${150 + randomNum1}%`
        const position = `${randomNum2}% ${randomNum3}%`
        let timing = `${option3}`;
        if (num % 3 === 0){ timing = `${option1}`} 
        else if (num % 2 === 0 ){ timing = `${option2}` }
        setGlitchObj({ position, size, timing })
    }
    const glitchOut = () => {
        let i = 1
        changeBackground(i)
        myInterval1 = setInterval(() => {
            changeBackground(i++)
            if (i > 3) i = 1;
        }, 2250);
    }
    const pulsing = i => {
        if (i === 0){ setPulsingSize("webDevBetweenSections1_1") } 
        else { setPulsingSize("webDevBetweenSections1_0") }
    }
    const pulse = () => {
        let i = 0
        pulsing(i)
        myInterval2 = setInterval(() => {
            if ( i === 0){ pulsing(i++) } 
            else { pulsing(i--) }
        }, 1400)
    }
    const createDivs = () => {
        let divArr = []
        for (let i = 0; i < numberOfLines; i++){
            const insideArr = []
            const randomNum1 = Math.floor(Math.random() * 248)
            const randomNum2 = Math.floor(Math.random() * width - 2)
            insideArr.push([randomNum1, randomNum2])
            divArr.push([insideArr, null])
        }
        setDivs(divArr)
    }
    const numberBetween1And4ExceptFor = (num) => {
        let reverseDirection;
        if (num !== null) reverseDirection = num > 1 ? num - 2 : num + 2;
        const randomNum = Math.floor(Math.random() * 4)
        if (reverseDirection === randomNum){ return numberBetween1And4ExceptFor(num) } 
        else { return randomNum }
    }
    const newGridPoint = (top, left, prevPosition, sameDirection) => {
        const width = window.innerWidth
        let direction = prevPosition;
        if (!sameDirection) direction = numberBetween1And4ExceptFor(prevPosition);
        let newTop = top;
        let newLeft = left;
        if (direction === 0 || direction === 2) {
            const upDownMove = direction === 0 ? top + 2 : top - 2
            if (upDownMove > 248 || upDownMove < 0){ newTop = upDownMove > 248 ? upDownMove - 250 : upDownMove + 250 } 
            else { newTop = upDownMove }
        } else {
            const leftRightMove = direction === 1 ? left + 2 : left - 2
            if (leftRightMove > width || leftRightMove < 0) { newLeft = leftRightMove > width ? leftRightMove - width : leftRightMove + width } 
            else { newLeft = leftRightMove }
        }
        return [[newTop, newLeft], direction]
    }
    const gridPointMove = (iteration, topLeftArr, prevPosition) => {
        const newTopLeftArr = topLeftArr
        let direction = prevPosition
        const result = newGridPoint(topLeftArr[0][0], topLeftArr[0][1], prevPosition, iteration !== 1)
        if (iteration === 1) direction = result[1];
        newTopLeftArr.unshift(result[0])
        if (newTopLeftArr.length > lineLengths) newTopLeftArr.pop();
        return [newTopLeftArr, direction]
    }
    const loopThroughGridPoints = (iteration) => setDivs(prev => prev.map(element => gridPointMove(iteration, element[0], element[1])))
    const createCircuitry = () => {
        let i = 1
        myInterval3 = setInterval(() => {
            loopThroughGridPoints(i++)
            if (i > stepsBeforeTurn) i = 1;
        }, lineSpeed)
    }
    useEffect(() => {
        createDivs()
        glitchOut()
        pulse()
        createCircuitry()
        return () => {
            clearInterval(myInterval1)
            clearInterval(myInterval2)
            clearInterval(myInterval3)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const mappedDivArr = divs.map((element1 , i) => {
        return element1[0].map((element2, j) => {
            const arrLength = element1[0].length
            const adjustment = (j + (i * arrLength)) * 2
            const fade = 1 - (j / arrLength)
            return <aside key={`${i}.${j}`} style={{ top: `${element2[0] - adjustment}px`, left: `${element2[1]}px`, opacity: `${fade}`}}></aside>
        })
    })
    return(
        <>
        <Header />
        <div className="webDevBetweenSections2">
            {mappedDivArr}
            {/* <div>
                something
            </div> */}
        </div>
        <WebDevSection1 />
        <div className={`webDevBetweenSections1 ${pulsingSize}`} >
            <div>
                <h1>Streamlining</h1>
                <h1>Vital Processes</h1>
            </div>
        </div>
        <WebDevSection2 />
        <div className="webDevBetweenSections" style={{ backgroundPosition: glitchObj.position, backgroundSize: `${glitchObj.size}`, transition: `all 2.25s ${glitchObj.timing} 0s`}}>
            <div>
                <h1>Reclaiming</h1>
                <h1>Imaginative Design</h1>
            </div>
        </div>
        <WebDevSection3 />
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