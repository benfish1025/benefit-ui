import React, {useEffect, useState} from 'react'
import ClassNames from 'classnames'

interface  SwitchProps {
  value?: boolean,
  defaultValue?: boolean,
  disabled?: boolean,
  onChange?: (value: boolean) => void,
  thin?: boolean
}

const Switch = ({thin, defaultValue,disabled, onChange}: SwitchProps) => {
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
    return(
        <div className={classes} onClick={handleClick}>
          <div className={slideClasses}> </div>
        </div>
    )
  }
export default Switch
