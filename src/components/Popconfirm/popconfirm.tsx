import React, {CSSProperties, useState} from 'react'
import ClassNames from 'classnames'
import Button from "../Button/button";
import Transition from "../Transition/transition";
import {ButtonProps} from "../Button/button";


interface  PopconfirmProps {
  visible: boolean,
  tittle?: string,
  detail?: string,
  position?: 'top' | 'left' | 'right' | 'bottom',
  textColor?: string,
  bgColor?: string,
  firstButtonText?: string,
  secondButtonText?: string,
  onFirstButtonClick?: () => void,
  onSecondButtonClick?: () => void,
  style?: CSSProperties,
  replaceFirstButton?: React.ReactNode,
  replaceSecondButton?: React.ReactNode

}
const Popconfirm: React.FC<PopconfirmProps> = (props) => {
  const {
    visible,
    children,
    tittle,
    detail,
    position = 'top',
    style,
    bgColor,
    textColor,
    firstButtonText = '好',
    secondButtonText = '查看详情',
    onFirstButtonClick,
    onSecondButtonClick,
    replaceFirstButton,
    replaceSecondButton
  } = props
  const classes = ClassNames('b-popover','b-popconfirm', {
    [`b-popover--${position}`]: position
  })
  const aniClasses = ClassNames({
    [`popover-${position}`]: position
  })
  const backgroundStyle: CSSProperties = Object.assign({
    backgroundColor: bgColor || '#ffc800',
    borderColor: bgColor || '#ffc800'
  }, style)
  const buttonTextColor: CSSProperties = {
    color: bgColor || '#ffc800'
  }
  /*const renderChild = () => {
    const length = React.Children.map(children, (child, index) => 1)?.length
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<ButtonProps>
      const type = childElement.type.displayName
      if (type === 'Button') {
        if (index + 1 !== length) {
          return(
              <div className={'padding-bottom-small'}>
                {child}
              </div>
          )
        } else return (
            {child}
        )
      } else return null
    })
  }*/
  return (
      <span className={'b-popover-wrapper'}>
        {children}
        <Transition in={visible} timeout={300} classNames={aniClasses}>
          <div className={classes} style={backgroundStyle}>
            <div className="b-popconfirm__container" style={{color: textColor}}>
              <p className="b-popconfirm__tittle">{tittle}</p>
              <p className="b-popconfirm__detail">{detail}</p>
            </div>
            <div style={buttonTextColor}>
            <div className={'padding-bottom-small'}>
              {replaceFirstButton
                  ? replaceFirstButton
                  : <Button onClick={onFirstButtonClick} btnType={'ghost'} size={'full'}>{firstButtonText}</Button>
              }
            </div>
              {replaceSecondButton
                  ? replaceSecondButton
                  : <Button onClick={onSecondButtonClick} btnType={'white'} size={'full'}>{secondButtonText}</Button>
              }
            </div>
          </div>
        </Transition>
      </span>
  )
}
export default Popconfirm
