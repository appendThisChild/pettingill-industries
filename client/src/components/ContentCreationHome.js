import React, { useState, useEffect } from "react"
// import styled, { keyframes } from 'styled-components'

//components
import Footer from "./Footer.js"
import Header from "./Header.js"

const ContentCreationHome = props => {
    const [explosion, setExplosion] = useState([])
    const [divs, setDivs] = useState([])
    let myInterval = 0;

    const createDivs = () => {
        let divArr = []
        for (let i = 0; i < 100; i++){
            divArr.push("")
        }
        setDivs(divArr)
    }
    const createArt = () => {
        tripleFlash()
        myInterval = setInterval(() => {
            tripleFlash() 
        }, 2000);
    }
    const tripleFlash = () => {
        for (let i = 0; i < 3; i++){
            setTimeout(() => {
                openExplosion()
            }, 350 * (i + 1))
        }
    }
    const openExplosion = (isTrue) => {
        setExplosion(prev => ([
            randomNumberBetween0and100(prev),
            prev[0],
            prev[1],
        ]))
    }
    const randomNumberBetween0and100 = (array) => {
        let randomNumber = Math.floor(Math.random() * 100)
        if (array.some((number) => number === randomNumber)){
            return randomNumberBetween0and100(array)
        }
        return randomNumber
    }
    useEffect(() => {
        window.scroll(0,0)
        createDivs()
        createArt()
        return () => {
            clearInterval(myInterval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mappedDivArr = divs.map((element, i) => {
        const num = i / 10
        const column = Number((num % 1).toFixed(1)) * 10
        const row = Math.floor(num)
        const isExplosion = explosion.some((number) => number === i)
        
        if (!isExplosion){
            return(
                <div 
                    key={i} 
                    className='gridPoint'
                    style={{
                        gridColumn: `${column + 1}/${column + 2}`,
                        gridRow: `${row + 1}/${row + 2}`
                    }}
                    >
                    <div className="stillGridPoint"></div>
                </div>
            )
        } else {
            return(
                <div 
                    key={i} 
                    className='gridPoint'
                    style={{
                        gridColumn: `${column + 1}/${column + 2}`,
                        gridRow: `${row + 1}/${row + 2}`
                    }}
                    >
                    <div className="explosionGridPoint"></div>
                </div>
            )
        }
        
    })
    // console.log(explosion)
    return(
        <>
        <Header />
        <div className="contentHome">
            {mappedDivArr}
            <main>
                <div>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                    <p>Something</p>
                </div>
            </main>




        </div>
        <Footer />
        </>
    )
}

export default ContentCreationHome;