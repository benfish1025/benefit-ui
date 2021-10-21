import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import TestTransition from "../TestTransition";
interface ImageViewProps {
  src: string
}
const ImageView: React.FC<ImageViewProps> = ({ src }) => {
  const [showImage, setShowImage] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const handleClickPreview = () => {
    setShowImage(!showImage)
  }
  const renderImage = () => {
    return (
      <>
        <TestTransition
          visible={showImage}
          innerRef={backgroundRef}
          beforeEnter={{
            opacity: '0'
          }}
          afterEnter={{
            opacity: '1'}}
        >
          <div ref={backgroundRef} onClick={handleClickPreview} className={'fullscreen-image-background'}>
          </div>
        </TestTransition>
        <TestTransition
          visible={showImage}
          innerRef={imageRef}
          beforeEnter={{
            transform: `scale(0.6)`,
            opacity: '0'
          }}
          afterEnter={{
            transform: `scale(1)`,
            opacity: '1'}}
        >
          <div ref={imageRef} onClick={handleClickPreview} className={'fullscreen-image-front'}>
            <img className={'fullscreen-image-view'} src={src} alt=""/>
          </div>
        </TestTransition>
      </>
    )
  }
  return (
    <>
      <img className={'fullscreen-image-preview'} onClick={handleClickPreview} src={src} alt=""/>
      {
        ReactDOM.createPortal(renderImage(), document.body)
      }
    </>
  )
}

export default ImageView