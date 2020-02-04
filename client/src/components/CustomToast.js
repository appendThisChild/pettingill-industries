import React, { useState, useEffect } from 'react'

const CustomToast = (props) => {
    const [ percentage, setPercentage ] = useState(0)
    const { appearance, children, autoDismissTimeout } = props
    const intervalTime = 10

    const transitionBackground = i => {
        const adjustPercentage = intervalTime / autoDismissTimeout
        setPercentage(adjustPercentage * i * 100)
    }

    useEffect(() => {
        let i = 1
        const myIntervals = setInterval(() => transitionBackground(i++), intervalTime)
        return () => {
            clearInterval(myIntervals)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="customToast" style={{ background: appearance === 'error' ? `linear-gradient(rgb(255, 122, 122) ${percentage}%, rgb(241, 21, 21) 0%)` : `linear-gradient(rgb(145, 226, 145) ${percentage}%, rgb(85, 173, 85) 0%)`}}>
            <span>&#x2126;</span>
            <h1>{children}</h1>
        </div>
    )
};

export default CustomToast;