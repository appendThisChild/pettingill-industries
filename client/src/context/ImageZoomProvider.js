import React, { useContext, useState } from 'react'

const ImageZoomContext = React.createContext()

const ImageZoomProvider = props => {
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false);

    const zoomIn = (imageContent) => {
        setImage(imageContent)
        setOpen(true)
    }
    const exitZoom = () => setOpen(false);
    return(
        <ImageZoomContext.Provider 
            value={{
                image,
                open,
                zoomIn,
                exitZoom
            }}
            {...props}
        />
    )
}

const useImageZoom = () => {
    const context = useContext(ImageZoomContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { ImageZoomProvider, useImageZoom }