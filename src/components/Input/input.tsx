import React, {ReactElement, useState} from 'react'
import ClassNames from 'classnames'
import {stringify} from "querystring";

interface InputProps {
  value?: string,
  defaultValue?: string,
  placeholder?: string,
  onChange?: React.ChangeEventHandler,
  onKeyDown?: React.KeyboardEventHandler,
  onPressEnter?: React.KeyboardEventHandler,
  onFocus?: React.FocusEventHandler,
  onBlur?: React.FocusEventHandler,
  addonBefore?: string | ReactElement,
  addonAfter?: string | ReactElement,
  prefix?: string | ReactElement,
  suffix?: string | ReactElement,
  disabled?: boolean,
  error?: boolean,
  readonly?: boolean,
  className?: string,
  style?: React.CSSProperties
}
const Input: React.FC<InputProps> = (props) => {
  const {
    readonly,
    value,
    onChange,
    children,
    className,
    style,
    defaultValue,
    disabled,
    addonAfter,
    addonBefore,
    error,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,
    placeholder,
    prefix,
    suffix} = props
  const [orderFocus, setOrderFocus] = useState(false)
  const classes = ClassNames('b-input', {
    'is-disabled': disabled,
    'is-focused': orderFocus,
    'is-error': error
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && event.key === 'Enter') {
      onPressEnter(event)
    }
    if (onKeyDown) {
      onKeyDown(event)
    }
  }
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setOrderFocus(!orderFocus)
    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: React.FocusEvent) => {
    setOrderFocus(!orderFocus)
    if (onBlur) {
      onBlur(event)
    }
  }
  return (
      <div className={classes}>
        {addonBefore && (
            <div className="addonbefore-wrapper">
              {typeof addonBefore === 'string'
                  ? (<span className="before-string">
                    <span>{addonBefore}</span>
                  </span>)
                  : <div>{(addonBefore)}</div>
              }
            </div>
        )}
        {prefix && (
            <div className="prefix-wrapper">
              {typeof prefix === 'string'
                  ? (<span className="prefix-string">
                    <span>{prefix}</span>
                  </span>)
                  : <div>{(prefix)}</div>
              }
            </div>
        )}
        <input
            placeholder={placeholder || ''}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={style}
            readOnly={readonly}
            disabled={disabled}
        />
        {suffix && (
            <div className="suffix-wrapper">
              {typeof suffix === 'string'
                  ? (<span className="suffix-string">
                    <span>{suffix}</span>
                  </span>)
                  : <div>{(suffix)}</div>
              }
            </div>

        )}
        {addonAfter && (
            <div className="addonafter-wrapper">
              {typeof addonAfter === 'string'
                  ? (<span className="after-string">
                    <span>{addonAfter}</span>
                  </span>)
                  : <div>{(addonAfter)}</div>
              }
            </div>
        )}
      </div>
  )
}
export default Input
