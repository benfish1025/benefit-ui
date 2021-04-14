import React, {CSSProperties, useState} from 'react'
import ClassNames from 'classnames'
import Button from "../Button/button";
import Transition from "../Transition/transition";


interface  PopconfirmProps {
  visible?: boolean,
  tittle?: string,
  detail?: string,
  position?: 'top' | 'left' | 'right' | 'bottom',
  style?: CSSProperties,
  color?: string
}
const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const {visible, children, tittle, detail, position, style, color } = props
  const classes = ClassNames('b-popover','b-popconfirm', {
    [`b-popover--${position}`]: position
  })
  const aniClasses = ClassNames({
    [`popover-${position}`]: position
  })
  const backgroundStyle: CSSProperties = Object.assign({
    backgroundColor: color || '#ffc800',
    borderColor: color || '#ffc800'
  }, style)
  const buttonTextColor: CSSProperties = {
    color: color || '#ffc800'
  }
  return (
      <span className={'b-popover-wrapper'}>
        {children}
        <Transition in={visible} timeout={300} classNames={aniClasses}>
          <div className={classes} style={backgroundStyle}>
            <div className="b-popconfirm__container">
              <p className="b-popconfirm__tittle">{tittle}</p>
              <p className="b-popconfirm__detail">{detail}</p>
            </div>
            <div style={buttonTextColor}>
              <div className={'padding-bottom-small'}>
                <Button btnType={'ghost'} size={'full'}>好</Button>
            </div>
            <Button btnType={'white'} size={'full'}>查看详情</Button>
            </div>

          </div>
        </Transition>
      </span>
  )
}
export default Popconfirm
