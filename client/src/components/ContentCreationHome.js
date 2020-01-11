import React, { useState, useEffect } from "react"

//components
import Footer from "./Footer.js"
import Header from "./Header.js"
import SlideShow from "./SlideShow.js"

const ContentCreationHome = props => {
    const [explosion, setExplosion] = useState([])
    const [divs, setDivs] = useState([])

    let myInterval = 0;

    const randomNumberGenerator = (num) => Math.floor(Math.random() * num)
    const createDivs = () => {
        const divArr = []
        for (let i = 0; i < 100; i++){
            const insideArr = [];
            for (let j = 0; j < 4; j++){ insideArr.push(randomNumberGenerator(100) + 100) }
            divArr.push(insideArr)
        }
        setDivs(divArr)
    }
    const createArt = () => {
        tripleFlash()
        myInterval = setInterval(() => { tripleFlash() }, 2000);
    }
    const tripleFlash = () => { for (let i = 0; i < 1; i++){ setTimeout(() => { openExplosion() }, 0 * (i + 1)) } }
    const openExplosion = (isTrue) => { setExplosion(prev => ([randomNumberBetween0and100(prev)])) }
    const randomNumberBetween0and100 = (array) => {
        const randomNumber = randomNumberGenerator(100)
        if (array.some((number) => number === randomNumber)) return randomNumberBetween0and100(array);
        return randomNumber
    }
    const shineSide = (column, row, degree) => {
        let result = false;
        if (degree === 0){ if (column < 5) result = true; }
        else if (degree === 1){ if (column < 5 && row < 5) result = true; }
        else if (degree === 2){ if (row < 5) result = true; }
        else if (degree === 3){ if (column >= 5 && row < 5) result = true; }
        return result
    }









    useEffect(() => {
        window.scroll(0,0)
        createDivs()
        createArt()

        return () => clearInterval(myInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mappedDivArr = divs.map((element, i) => {
        const num = i / 10
        const column = Number((num % 1).toFixed(1)) * 10
        const row = Math.floor(num)
        const isExplosion = explosion.some((number) => number === i)
        const highestNumber = element.sort((a, b) => b - a)
        if (!isExplosion){
            const mappedElements = element.map((width, j) => <div key={j + 2000} style={{ transform: `rotate(${j * 45}deg)`}}>{shineSide(column, row, j) ? <><section style={{ flex: `1`}}></section><div style={{ flex: `2`}}></div></> : <><div style={{ flex: `5`}}></div><section style={{ flex: `1`}}></section></>}</div>)
            const reMappedDivs = null // || divs.map((element, k) => <aside key={k + 3000} style={{ transform: `rotate(${k / 100 * 360}deg)`, width: "0px"}}></aside>)
            return <div key={i + 4000} className='gridPoint' style={{ gridColumn: `${column + 1}/${column + 2}`, gridRow: `${row + 1}/${row + 2}`}}><div className="stillGridPoint">{mappedElements}{reMappedDivs}</div></div>
        } else {
            const mappedElements = element.map((width, j) => <div key={j + 2000} style={{ transform: `rotate(${j * 45}deg)`, width: `${width}px`}}>{shineSide(column, row, j) ? <><section style={{ flex: `1`}}></section><div style={{ flex: `2`}}></div></> : <><div style={{ flex: `5`}}></div><section style={{ flex: `1`}}></section></>}</div>)
            const reMappedDivs = null // || divs.map((element, k) => <aside key={k + 3000} style={{ transform: `rotate(${k / 100 * 360}deg)`, width: `${highestNumber[0] / 5 + 25}px`, height: "1px"}}></aside>)
            return <div key={i + 4000} className='gridPoint' style={{ gridColumn: `${column + 1}/${column + 2}`, gridRow: `${row + 1}/${row + 2}`}}><div className="explosionGridPoint" style={{ width: `${highestNumber[0] / 5}px`, height: `${highestNumber[0] / 5}px`}}>{mappedElements}{reMappedDivs}</div></div>
        }
        
    })
    // console.log(Portfolio)
    return(
        <>+ 
        <Header />
        {/* <div className="starBurst">
            {mappedDivArr}
            <main>
                <div>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                    <p>Text Here...</p>
                </div>
            </main>
        </div> */}
        <SlideShow />
        <Footer />
        </>
    )
}

export default ContentCreationHome;