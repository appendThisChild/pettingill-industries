import React, { useEffect, useState } from "react"

const width = window.innerWidth
let myIntervals = 0;

const SlideShow = () => {
    const [showingPicture, setShowingPicture] = useState(0)
    
    let showWidth;
    let containerHeight
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
        console.log(myIntervals)
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
    const handleZoom = () => {

    }
    const rotatePicture = () => {
        myIntervals = setInterval(() => {
            handleForceChange(1)
        }, 5000);
        
    }

    useEffect(() => {
        // console.log("Hi")
        rotatePicture()
        return () => {
            // console.log(myIntervals)
            clearInterval(myIntervals);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(showingPicture)
    // console.log(imagesArr.length)
    return(
        <div className="slideShow" style={{ height: `${containerHeight}px`}}>
            <img onClick={() => handleForceChange(-1, true)} style={{ width: `${showWidth - 150}px`}} src={imagesArr[showingPicture - 1 < 0 ? showingPicture + imagesArr.length - 1 : showingPicture - 1][1]} alt={imagesArr[0][0]} /> 
            <img style={{ width: `${showWidth}px`}} src={imagesArr[showingPicture][1]} alt={imagesArr[0][0]} /> 
            <img onClick={() => handleForceChange(1, true)} style={{ width: `${showWidth - 150}px`}} src={imagesArr[showingPicture + 1 >= imagesArr.length ? showingPicture - imagesArr.length + 1 : showingPicture + 1][1]} alt={imagesArr[0][0]} /> 

        </div>

    )
}

export default SlideShow;