import React, {useEffect, useRef, useState} from "react";
import ClassNames from 'classnames'

interface CarouselProps {
  autoplay?: boolean,
  interval?: number,
  defaultIndex?: number,
  dot?: boolean,
  control?: boolean
}
const helpTransition = (index: number, length: number) => {
  return index === length || index === -1;
}
const Carousel:React.FC<CarouselProps> = (props) => {
  const {children, autoplay, defaultIndex, interval = 3000, control = true, dot = true} = props
  const childCount = React.Children.toArray(children).length
  const firstChild = React.Children.toArray(children)[0]
  const lastChild = React.Children.toArray(children)[childCount - 1]

  const noodleRef = useRef<HTMLDivElement>(null)
  const [boxWidth, setBoxWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0)
  const [canTransition, setCanTransition] = useState(true)
  const handleTransitionEnd = (index: number, length: number) => {
    if (helpTransition(index, length)) {
      setCanTransition(false)
    }
  }
  useEffect(() => {
    if (!canTransition) {
      if ( currentIndex === childCount) {
        setCurrentIndex(0)
      } else if (currentIndex === -1) {
        setCurrentIndex(childCount - 1)
      }
    }
  },[canTransition])
  useEffect(() => {
      if (noodleRef.current) {
        setBoxWidth(noodleRef.current.getBoundingClientRect().width / (childCount + 2))
      }
  },[])
  useEffect(() => {
    const handler = () => handleTransitionEnd(currentIndex, childCount)
    const element = noodleRef.current
    if (noodleRef.current) {
      noodleRef.current.addEventListener('transitionend', handler)
    }
    return () => {
      if (element) {
        element.removeEventListener('transitionend', handler)
      }
    }
  })

  useEffect(() =>{
    if (autoplay) {
      let timer: NodeJS.Timeout
      timer = setTimeout(() => {
        handleControlClickRight()
      },interval)
      return () => {
        clearTimeout(timer)
      }
    }
  })
  const boxStyle = {
    width: boxWidth !== 0 ? boxWidth : ''
  }
  const noodleStyle = {
    transition: canTransition ? 'transform ease 0.5s' : '',
    transform: `translateX(-${(currentIndex + 1) * 100}%)`
  }
  const highlightStyle = {
    width: `${childCount * 20 + 10}px`
  }
  const handleControlClickRight = () => {
    if (!canTransition) {
      setCanTransition(true)
    }
    if (currentIndex < childCount) {
      setCurrentIndex(currentIndex + 1)
    }  else return
  }

  const handleControlClickLeft = () => {
    if (!canTransition) {
      setCanTransition(true)
    }
    if (currentIndex > -1) {
      setCurrentIndex(currentIndex - 1)
    } else return
  }
  const handleClickHighLight = (i: number) => {
    if (!canTransition) {
      setCanTransition(true)
    }
    setCurrentIndex(i)
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      return (
          <div className={'b-carousel-item'}>
            {child}
          </div>
      )
    })
  }
  const helpIndex = () => {
    if (currentIndex === -1) {
      return childCount - 1
    } else if (currentIndex === childCount) {
      return 0
    } else return currentIndex
  }
  return (
      <div className={'b-carousel-wrapper'}>
        <div style={boxStyle}  className={'b-carousel-box'}>
          <div style={noodleStyle} ref={noodleRef} className={'b-carousel-noodle'}>
            <div className={'b-carousel-item'}>
              {lastChild}
            </div>
            {renderChildren()}
            <div className={'b-carousel-item'}>
              {firstChild}
            </div>
          </div>
        </div>
        {control
        && <>
          <div onClick={handleControlClickRight}
               className={'b-carousel-wrapper__ctrright'}>{'>'}</div>
          <div
              onClick={handleControlClickLeft}
              className={'b-carousel-wrapper__ctrleft'}>{'<'}</div>
        </>}
        {dot && <div style={highlightStyle} className="b-carousel-highlight">
          {[...Array(childCount)].map((item, index) => {
            const itemClasses = ClassNames('b-carousel-highlight__item', {
              'is-active': index === helpIndex()
            })
            return <div onClick={() => handleClickHighLight(index)} className={itemClasses}> </div>
          })}
        </div>}
      </div>

  )
}

export default Carousel
