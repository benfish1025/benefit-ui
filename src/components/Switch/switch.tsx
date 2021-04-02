import React, {useEffect, useState} from 'react'
import ClassNames from 'classnames'

interface  SwitchProps {
  defaultValue?: boolean,
  disabled?: boolean,
  onChange?: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({defaultValue,disabled, onChange}) => {
  const [value, setValue] = useState(defaultValue)
  const classes = ClassNames('switch', {
    'is-active': value,
  })
  const slideClasses = ClassNames('switch-slide', {
    'is-active': value,
  })
  useEffect(() => {
    if (onChange && typeof value === 'boolean') {
      onChange(value)
    }
  }, [value])
  const handleClick = () => {
    setValue(!value)
  }
    return(
        <div className={classes} onClick={handleClick}>
          <div className={slideClasses}> </div>
        </div>
    )
  }
export default Switch
