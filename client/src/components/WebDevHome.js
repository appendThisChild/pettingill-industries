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
    const [ position, setPosition ] = useState("50% 50%")
    const [ size, setSize ] = useState("250%")
    const [ pulsingSize, setPulsingSize ] = useState("webDevBetweenSections1_0")
    const [ timing, setTiming ] = useState("cubic-bezier(.09,1.44,.17,.24)")
    let myInterval1 = 0;
    let myInterval2 = 0;
    let myInterval3 = 0;

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
    const createDivs = () => {
        let divArr = []
        const width = window.innerWidth
        for (let i = 0; i < 5; i++){
            const randomNum1 = Math.floor(Math.random() * 248)
            const randomNum2 = Math.floor(Math.random() * width - 2)
            let insideArr = []
            for (let j = 0; j < 100; j++){
                insideArr.push([randomNum1, randomNum2])
            }
            divArr.push([insideArr, null])
        }
        setDivs(divArr)
    }
    const numberBetween1And4ExceptFor = (num) => {
        let reverseDirection = num
        if (num !== null) reverseDirection = num > 1 ? num - 2 : num + 2;
        const randomNum = Math.floor(Math.random() * 4)
        if (reverseDirection === randomNum){
            return numberBetween1And4ExceptFor(num)
        } else {
            return randomNum
        }
    }
    const newGridPoint = (top, left, prevPosition, spacesMoved) => {
        const direction = numberBetween1And4ExceptFor(prevPosition)
        let newTop = top;
        let newLeft = left;
        if (direction === 0 || direction === 2) {
            const upDownMove = direction === 0 ? top + spacesMoved * 2 : top - spacesMoved * 2
            // moving the element 2px up or down
            if (upDownMove > 248 || upDownMove < 0){
                newTop = upDownMove > 248 ? upDownMove - 250 : upDownMove + 250
            } else {
                newTop = upDownMove
            }
        } else {
            const width = window.innerWidth
            const leftRightMove = direction === 1 ? left + spacesMoved * 2 : left - spacesMoved * 2
            // moving the element 1% left or right
            if (leftRightMove > width || leftRightMove < 0) {
                newLeft = leftRightMove > width ? leftRightMove - width : leftRightMove + width
            } else {
                newLeft = leftRightMove
            }
        }
        return [[newTop, newLeft], direction]
    }
    const gridPointMove = (topLeftArr, prevPosition) => {
        let prevGridPoint;
        let firstMove;
        let direction;
        const spacesMoved = 5;
        const newTopLeftArr = topLeftArr.map((element, i) => {
            if (i === 0){
                prevGridPoint = element
                const result = newGridPoint(element[0], element[1], prevPosition, spacesMoved)
                direction = result[1]
                firstMove = result[0]
                return result[0]
            } else if (i < spacesMoved) {
                // difference between the elements 
                
                const lastPoint = prevGridPoint
                let top = lastPoint[0]
                let left = lastPoint[1]
                console.log(firstMove)
                console.log(element)
                console.log(firstMove[0] - element[0])
                console.log(firstMove[1] - element[1])
                if (firstMove[1] - element[1] === 0){
                    if (direction === 0){
                        // positive number
                        console.log(firstMove[0] - 2 * i)
                        top = firstMove[0] - 2 * i
                    } else {
                        console.log(firstMove[0] + 2 * i)
                        // negative number
                        top = firstMove[0] + 2 * i
                    }
                } else {
                    if (direction === 1){
                        // positive number
                        console.log(firstMove[1] - 2 * i)
                        left = firstMove[1] - 2 * i
                    } else {
                        // negative number
                        console.log(firstMove[1] + 2 * i)
                        left = firstMove[1] + 2 * i
                    }
                }

                prevGridPoint = [top, left]
                return [top, left]
            } else {
                const lastPoint = prevGridPoint
                prevGridPoint = element
                return lastPoint
            }
        })
        return [newTopLeftArr, direction]
    }
    const loopThroughGridPoints = () => {
        setDivs(prev => (
            prev.map((element, i) => {
                const newGridPoint = gridPointMove(element[0], element[1])
                return newGridPoint
            })
        ))
        
    }
    const createCircuitry = () => {
        myInterval3 = setInterval(() => {
            loopThroughGridPoints()
        }, 1000)
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
            // console.log(fade)
            return <aside key={`${i}.${j}`} style={{ top: `${element2[0] - adjustment}px`, left: `${element2[1]}px`, opacity: `${fade}`}}></aside>
        })
    })
    // console.log(divs)
    return(
        <>
        <Header />
        <div className="webDevBetweenSections2">
            {mappedDivArr}

        </div>
        <WebDevSection1 />
        <div className={`webDevBetweenSections1 ${pulsingSize}`} >
            <div>
                <h1>Streamlining</h1>
                <h1>Vital Processes</h1>
            </div>
        </div>
        <WebDevSection2 />
        <div className="webDevBetweenSections" style={{ backgroundPosition: position, backgroundSize: `${size}`, transition: `all 2.25s ${timing} 0s`}}>
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