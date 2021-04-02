import React, {ChangeEvent, InputHTMLAttributes, useState} from 'react'
import ClassNames from 'classnames'

interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLElement>,'onChange'>{
  defaultChecked?: boolean,
  disabled?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string,
  style?: React.CSSProperties,
  indeterminate?: boolean
}
const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {indeterminate, defaultValue, disabled, onChange, children, ...retProps} = props
  const classes =ClassNames('checkbox', {
    'disabled': disabled,
  })
  const inputClasses = ClassNames({
    'indeterminate': indeterminate
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('checkbox is',e.target.checked)
    if (onChange) {
      onChange(e)
    }
  }
  return(
      <label className={classes}>
        <span>
          <input className={inputClasses} disabled={disabled} onChange={handleChange} type="checkbox" {...retProps}/>
        </span>
        <span className={'checkbox-name'}>{children}</span>
      </label>
  )
}

export default CheckBox
