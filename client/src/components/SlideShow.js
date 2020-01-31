import React, { useEffect, useState } from "react"

import { useImageZoom } from "../context/ImageZoomProvider.js"

const width = window.innerWidth
let myIntervals = 0;

const SlideShow = () => {
    const [showingPicture, setShowingPicture] = useState(0)
    const { open, zoomIn } = useImageZoom()
    
    let showWidth;
    let containerHeight;
    if (width <= 425){
        showWidth = width - 60
        containerHeight = width * .94
    } else if (width <= 768) {
        showWidth = 400
        containerHeight = 400 * 1.25
    } else {
        showWidth = 500
        containerHeight = 500 * 1.25
    }
    const importAll = (r) =>  {
        let images = {};
        r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item) );
        return images;
    }
    const images =  importAll(require.context('../images/portfolio', false, /\.(png|jpe?g|svg)$/));
    const imagesArr = Object.entries(images)
    const handleForceChange = (num, choice) => {
        if (choice) clearInterval(myIntervals);
        setShowingPicture(prev => {
            if (prev + num >= imagesArr.length){
                return 0 
            } else if (prev + num < 0){
                return imagesArr.length + num
            } else {
                return prev + num
            }
        })
    }
    const rotatePicture = () => myIntervals = setInterval(() => handleForceChange(1), 6000);

    useEffect(() => {
        rotatePicture()
        return () => clearInterval(myIntervals);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const beforeThat = showingPicture - 2 < 0 ? showingPicture + imagesArr.length - 2 : showingPicture - 2
    const before = showingPicture - 1 < 0 ? showingPicture + imagesArr.length - 1 : showingPicture - 1
    const after = showingPicture + 1 >= imagesArr.length ? showingPicture - imagesArr.length + 1 : showingPicture + 1
    const afterThat = showingPicture + 2 >= imagesArr.length ? showingPicture - imagesArr.length + 2 : showingPicture + 2
    return(
        <main className="slideShow" style={{ height: `${containerHeight}px`}}>
            <div style={{ perspective: open ? "" : "750px"}}>
                <img key={beforeThat} style={{ transition: open ? "" : "all 1.25s linear 0s"}} src={imagesArr[beforeThat][1]} alt=""/>
                <img key={before} className="tiltLeft" onClick={() => handleForceChange(-1, true)} style={{ width: `${showWidth - 150}px`, transform: open ? "" : "rotateY(-30deg)", transition: open ? "" : "all 1.25s linear 0s"}} src={imagesArr[before][1]} alt="" /> 
                <img key={showingPicture} onClick={() => zoomIn(imagesArr[showingPicture][1])} className="largeCenter" style={{ width: `${showWidth}px`, transition: open ? "" : "all 1.25s linear 0s"}} src={imagesArr[showingPicture][1]} alt="" />
                <img key={after} className="tiltRight" onClick={() => handleForceChange(1, true)} style={{ width: `${showWidth - 150}px`, transform: open ? "" : "rotateY(30deg)", transition: open ? "" : "all 1.25s linear 0s"}} src={imagesArr[after][1]} alt="" /> 
                <img key={afterThat} style={{ transition: open ? "" : "all 1.25s linear 0s"}} src={imagesArr[afterThat][1]} alt=""/>
            </div>
            <div style={{ display: open ? "none" : "", top: `${containerHeight / 2}`}}>
                <span onClick={() => handleForceChange(-1, true)}>&#x276E;</span>
                <span onClick={() => handleForceChange(1, true)}>&#x276F;</span>
            </div>
        </main>
    )
}

export default SlideShow;