import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Button, {ButtonSize} from "../Button/button";
import Transition from '../Transition/transition'
import ClassNames from 'classnames'
import useDebounceAnti from "../../hooks/useDebounceAnti";


export type MessageType = 'success' | 'primary' | 'error'
export interface MessageProps {
  type?: MessageType,
  btnText?: string,
  btnSize?: ButtonSize,
  tittle?: string,
  info?: string,
  onClickButton?: () => void,
  onClose?: () => {},
  duration?: number,
  showButton?: boolean,
  showMessage?: boolean
}

const Message = (props: MessageProps) => {
  const {showMessage, showButton, type = 'success', btnText, tittle, info, btnSize, onClickButton } = props
  const messageTypeClasses = ClassNames('message-wrapper', {
    [`is-${type}`]: type
  })
  const iconTypeClasses = ClassNames('message-content__avatar', {
    [`is-${type}`]: type
  })
  const handleClickButton = () => {
    if (onClickButton) {
      onClickButton()
    }
  }
  const renderMessage = () => {

      return (
          <Transition timeout={300} in={showMessage} classNames={'spread'}>
            <div className={messageTypeClasses}>
              <div className="message-content">
                <div className={iconTypeClasses} id={'check'}> </div>
                <p className="message-content__text">
                  <span className="tittle">{tittle}</span>
                  <span className="info">{info}</span>
                </p>
              </div>
              <div className="button-wrapper">
                {showButton && <Button onClick={handleClickButton} size={btnSize} btnType={type}>{btnText}</Button>}
              </div>
            </div>
          </Transition>
      )

  }
   return ReactDOM.createPortal(renderMessage(), document.getElementById('dialog-container') as Element)
}
export default Message
