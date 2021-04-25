import React from 'react'
import ClassNames from 'classnames'
import {ReactComponent as CheckedSvg} from './radioCheck.svg'
export interface RadioProps {
  value: string,
  activeValue?: string,
  onChange?: (value: string) => void,
  disabled?: boolean,
  radioStyle?: 'button' | 'radio',
  index?: number
}
const Radio: React.FC<RadioProps> = (props) => {
  const {index, radioStyle, disabled, activeValue, onChange, children, value} = props
  const representClasses = ClassNames( 'b-radio__represent', {
    'is-active': !disabled && activeValue === value,
    'is-disabled': disabled
  })
  const radioClasses = ClassNames('b-radio', {
    'is-disabled': disabled,
    'is-button-style': radioStyle === 'button',
    'is-active': !disabled &&  activeValue === value
  })
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value)
    }
  }
  if (radioStyle === 'radio') {
    return (
        <label className={radioClasses} onClick={handleClick}>
        <span className={'b-radio__wrapper'} >{/*<input defaultValue={value} className={'b-radio__input'} type="radio"/>*/}
          <span className={representClasses}>
            <CheckedSvg className={'b-radio__checked'}/>
          </span>
        </span>
          <span className={'b-radio__text'}>{children}</span>
        </label>
    )
  } else {
    return (
        <label className={radioClasses} onClick={handleClick}>
          <span className="b-radio__serial">{index}</span>
          <span className={'b-radio__text'}>{children}</span>
        </label>
    )
  }

}
Radio.displayName = 'Radio'
export default Radio
