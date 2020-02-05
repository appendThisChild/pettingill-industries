import React, { useState, useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import WebDevSection1 from "./WebDevSection1.js"
import WebDevSection2 from "./WebDevSection2.js"
import WebDevSection3 from "./WebDevSection3.js"

const WebDevHome = props => {
    const [ divs, setDivs ] = useState([])
    const [ pulsingSize, setPulsingSize ] = useState("webDevBetweenSections1_0")
    let changeBorder = "";
    let width = window.innerWidth
    let height = 300;
    let numberOfLines = 10;
    if (width > 425 && width < 768){ numberOfLines = 15; } 
    else if (width >= 768){ 
        if (width > 1024) numberOfLines = 20;
        width = width / 3;
        height = 550;
        changeBorder = "1px solid black";
    } 
    const lineLengths = 75;
    const stepsBeforeTurn = 25;
    const lineSpeed = 50;
    const dotSize = 2;
    const myIntervals = [];
    const randomNumberGenerator = (num) => Math.floor(Math.random() * num)
    const pulsing = i => {
        if (i === 0){ setPulsingSize("webDevBetweenSections1_1") } 
        else { setPulsingSize("webDevBetweenSections1_0") }
    }
    const pulse = () => {
        let i = 0
        const myInterval = setInterval(() => {
            if ( i === 0){ pulsing(i++) } 
            else { pulsing(i--) }
        }, 1550)
        myIntervals.push(myInterval)
    }
    const createDivs = () => {
        let divArr = []
        for (let i = 0; i < numberOfLines; i++){
            const insideArr = []
            insideArr.push([randomNumberGenerator(height - dotSize), randomNumberGenerator(width - dotSize)])
            divArr.push([insideArr, null])
        }
        setDivs(divArr)
    }
    const numberBetween1And4ExceptFor = (num) => {
        let reverseDirection;
        if (num !== null) reverseDirection = num > 1 ? num - 2 : num + 2;
        const randomNum = randomNumberGenerator(4)
        if (reverseDirection === randomNum){ return numberBetween1And4ExceptFor(num) } 
        else { return randomNum }
    }
    const newGridPoint = (top, left, prevPosition, sameDirection) => {
        let direction = prevPosition;
        if (!sameDirection) direction = numberBetween1And4ExceptFor(prevPosition);
        let newTop = top;
        let newLeft = left;
        if (direction === 0 || direction === 2) {
            const upDownMove = direction === 0 ? top + dotSize : top - dotSize
            if (upDownMove > height - dotSize || upDownMove < 0){ newTop = upDownMove > height - dotSize ? upDownMove - height + dotSize : upDownMove + height - dotSize } 
            else { newTop = upDownMove }
        } else {
            const leftRightMove = direction === 1 ? left + dotSize : left - dotSize
            if (leftRightMove > width - dotSize || leftRightMove < 0) { newLeft = leftRightMove > width - dotSize ? leftRightMove - width + dotSize : leftRightMove + width - dotSize } 
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
        const myInterval = setInterval(() => {
            loopThroughGridPoints(i++)
            if (i > stepsBeforeTurn) i = 1;
        }, lineSpeed)
        myIntervals.push(myInterval)
    }
    useEffect(() => {
        window.scroll(0,0)
        createDivs()
        pulse()
        createCircuitry()
        return () => myIntervals.forEach(interval => clearInterval(interval))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const mappedDivArr = divs.map((element1 , i) => {
        return element1[0].map((element2, j) => {
            const arrLength = element1[0].length
            const adjustment = (j + (i * arrLength)) * dotSize
            const fade = 1 - (j / arrLength)
            return <aside key={`${i}.${j}`} style={{ top: `${element2[0] - adjustment}px`, left: `${element2[1]}px`, opacity: `${fade}`, height: `${dotSize}px`, width: `${dotSize}px`}}></aside>
        })
    })
    return(
        <>
        <Header color={"blueviolet"} />
        <div className="webFlexMove" >
            <div className="webDevBetweenSections2">{mappedDivArr}</div>
            <WebDevSection1 open={changeBorder === "" ? false : true}/>
        </div>
        <div className="webFlexMove">
            <WebDevSection3 open={changeBorder === "" ? false : true}/>
        </div>
        <div className="webFlexMove" style={{ flexDirection: 'row-reverse'}}>
            <div className={`webDevBetweenSections1 ${pulsingSize}`} ></div>
            <WebDevSection2 open={changeBorder === "" ? false : true}/>
        </div>
        
        <Footer color={"blueviolet"} />
        </>
    )
}

export default WebDevHome;