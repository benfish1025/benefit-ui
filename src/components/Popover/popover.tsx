import React, {CSSProperties, useState} from 'react'
import ClassNames from 'classnames'
import Transition from "../Transition/transition";

interface  PopoverProps {
  visible?: boolean,
  content: string | React.ReactNode,
  position?: 'top' | 'left' | 'right' | 'bottom',
  dark?: boolean
}
const Popover: React.FC<PopoverProps> = (props) => {
  const {dark, visible, children, content, position = 'top'} = props
  const [appear, setAppear] = useState(false)
  const classes = ClassNames('b-popover', {
    [`b-popover--${position}`]: position,
    'is-dark': dark
  })
  const aniClasses = ClassNames({
    [`popover-${position}`]: position
  })
  const helpAppear = () => {
    if (typeof visible === 'boolean') {
      return visible
    } else return appear
  }
  const mouseEvent = {
    onMouseEnter: () => {setAppear(true)},
    onMouseLeave: () => {setAppear(false)}
  }
  return (
      <span className={'b-popover-wrapper'} {...mouseEvent}>
        {children}
        <Transition in={helpAppear()} timeout={300} classNames={aniClasses}>
          <div className={classes}>
            {content}
          </div>
        </Transition>
      </span>
  )
}
export default Popover
