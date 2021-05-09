import React, {useEffect, useState} from 'react'
import ClassNames from 'classnames'

interface  SwitchProps {
  value?: boolean,
  defaultValue?: boolean,
  disabled?: boolean,
  onChange?: (value: boolean) => void,
  thin?: boolean,
  activeText?: string,
  inactiveText?: string,
  switchStyle?: 'slides' | 'button'
}

const Switch = ({switchStyle = 'slides', activeText, inactiveText, thin, defaultValue,disabled, onChange}: SwitchProps) => {
  const [value, setValue] = useState(defaultValue)
  const classes = ClassNames('switch', {
    'is-active': value,
    'is-disabled': disabled,
    'is-thin': thin
  })
  const slideClasses = ClassNames('switch-slide', {
    'is-active': value,
    'is-disabled': disabled,
    'is-thin': thin
  })
  const textClasses = ClassNames('switch__text', {
    'is-active': value,
  })
  useEffect(() => {
    if (onChange && typeof value === 'boolean') {
      onChange(value)
    }
  }, [value])
  const handleClick = () => {
    if (!disabled) {
      setValue(!value)
    }
  }
  const radioClasses = ClassNames('b-radio', {
    'is-disabled': disabled,
    'is-button-style': switchStyle === 'button',
    'is-active': !disabled && value
  })
  if (switchStyle === 'slides') {
    return(
        <div className={textClasses}>
          <div className={classes} onClick={handleClick}>
            <div className={slideClasses}/>
          </div>
          {(activeText || inactiveText)
          && <span>{value ? activeText : inactiveText}</span>}
        </div>

    )
  } else {
    return (
        <label className={radioClasses} onClick={handleClick}>
          <span className={'b-radio__text'}>{value ? activeText : inactiveText}</span>
        </label>
    )
  }

  }
export default Switch
