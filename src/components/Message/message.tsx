import React from 'react'
import Button, {ButtonSize} from "../Button/button";
import Transition from '../Transition/transition'
import ClassNames from 'classnames'


export type MessageType = 'success' | 'normal' | 'error'
interface MessageProps {
  type?: MessageType,
  showMessage?: boolean,
  btnText?: string,
  btnSize?: ButtonSize,
  tittle?: string,
  info?: string,
  onClickButton?: () => void,
  onClose?: () => {},
  duration?: number
}

const Message: React.FC<MessageProps> = (props) => {
  const { type, btnText, tittle, info, btnSize, showMessage, onClickButton } = props
  const messageTypeClasses = ClassNames('message-wrapper', {
    [`is-${type}`]: type
  })
  const iconTypeClasses = ClassNames('message-content__avatar', {
    [`is-${type}`]: type
  })
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
          {btnText && <Button onClick={onClickButton} size={btnSize} btnType={type}>{btnText}</Button>}
        </div>
      </div>
      </Transition>
  )
}
export default Message
