import React, {CSSProperties, useState} from 'react'
import ClassNames from 'classnames'
import Transition from "../Transition/transition";

interface  PopoverProps {
  visible?: boolean,
  content: string | React.ReactNode,
  position?: 'top' | 'left' | 'right' | 'bottom',
  dark?: boolean,
  bgColor?: string,
  style?: CSSProperties,
  textColor?: string,
  showAnimation?: boolean,
  zIndex?: number
}
const Popover: React.FC<PopoverProps> = (props) => {
  const {zIndex, showAnimation = true, textColor, style, bgColor,dark, visible, children, content, position = 'top'} = props
  const [appear, setAppear] = useState(false)
  const helpAppear = () => {
    if (!content) {
      return false
    }
    if (typeof visible === 'boolean') {
      return visible
    } else return appear
  }
  const popStyle = {
    zIndex: zIndex
  }
  const classes = ClassNames('b-popover', {
    [`b-popover--${position}`]: position,
    'is-dark': dark,
    'is-colorful': bgColor,
  })
  const aniClasses = ClassNames({
    [`popover-${position}`]: position
  })
  const backgroundStyle: CSSProperties = Object.assign({
    backgroundColor: bgColor,
    borderColor: bgColor === '#ffffff' ? '#e5e5e5' : bgColor,
    color: textColor
  }, style)


  const mouseEvent = {
    onMouseEnter: () => {setAppear(true)},
    onMouseLeave: () => {setAppear(false)}
  }
  if (showAnimation) {
    return (
        <div style={popStyle} className={'b-popover-wrapper'} {...mouseEvent}>
          {children}
          <Transition in={helpAppear()} timeout={300} classNames={aniClasses}>
            <div style={backgroundStyle} className={classes}>
              {content}
            </div>
          </Transition>
        </div>
    )
  } else {
    return (
        <div style={popStyle} className={'b-popover-wrapper'} {...mouseEvent}>
          {children}
          {helpAppear() && <div {...mouseEvent} style={backgroundStyle} className={classes}>
              {content}
            </div>}
        </div>
    )
  }

}
export default Popover
