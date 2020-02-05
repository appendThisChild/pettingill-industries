import React, { useEffect} from "react"
// , useState 

// import { useImageZoom } from "../context/ImageZoomProvider.js"

const width = window.innerWidth
let myIntervals = 0;

const SlideShow = () => {
    // const [showingPictures, setShowingPictures] = useState([0,1,2,3,4])
    // const { open, zoomIn } = useImageZoom()
    
    // let showWidth;
    let containerHeight;
    if (width <= 425){
        // showWidth = width - 60
        containerHeight = width * .94
    } else if (width <= 768) {
        // showWidth = 400
        containerHeight = 400 * 1.25
    } else {
        // showWidth = 500
        containerHeight = 500 * 1.25
    }
    // const handleForceChange = (num, choice) => {
    //     if (choice) clearInterval(myIntervals);
    //     setShowingPictures(prev => {
    //         if (num){
    //             prev.shift()
    //             return prev[prev.length - 1] + 1 >= imagesArr.length ? [...prev, 0] : [...prev, prev[prev.length - 1] + 1]
    //         } else {
    //             prev.pop()
    //             return prev[0] - 1 < 0 ? [imagesArr.length - 1, ...prev] : [prev[0] - 1, ...prev]
    //         }
    //     })
    // }
    // const rotatePicture = () => myIntervals = setInterval(() => handleForceChange(true), 6000);

    useEffect(() => {
        // rotatePicture()
        return () => clearInterval(myIntervals);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <main className="slideShow" style={{ height: `${containerHeight}px`}}>
            {/* <div style={{ perspective: open ? "" : "750px"}}>
                <img key={showingPictures[0]} style={{ transition: open ? "" : "all 1.5s linear 0s"}} src={imagesArr[showingPictures[0]][1]} alt=""/>
                <img key={showingPictures[1]} className="tiltLeft" onClick={() => handleForceChange(false, true)} style={{ width: `${showWidth - 150}px`, transform: open ? "" : "rotateY(-30deg)", transition: open ? "" : "all 1.5s linear 0s"}} src={imagesArr[showingPictures[1]][1]} alt="" /> 
                <img key={showingPictures[2]} onClick={() => zoomIn(imagesArr[showingPictures[2]][1])} className="largeCenter" style={{ width: `${showWidth}px`, transition: open ? "" : "all 1.5s linear 0s"}} src={imagesArr[showingPictures[2]][1]} alt="" />
                <img key={showingPictures[3]} className="tiltRight" onClick={() => handleForceChange(true, true)} style={{ width: `${showWidth - 150}px`, transform: open ? "" : "rotateY(30deg)", transition: open ? "" : "all 1.5s linear 0s"}} src={imagesArr[showingPictures[3]][1]} alt="" /> 
                <img key={showingPictures[4]} style={{ transition: open ? "" : "all 1.5s linear 0s"}} src={imagesArr[showingPictures[4]][1]} alt=""/>
            </div>
            <div style={{ display: open ? "none" : "", top: `${containerHeight / 2}`}}>
                <span onClick={() => handleForceChange(false, true)}>&#x276E;</span>
                <span onClick={() => handleForceChange(true, true)}>&#x276F;</span>
            </div> */}
        </main>
    )
}

export default SlideShow;