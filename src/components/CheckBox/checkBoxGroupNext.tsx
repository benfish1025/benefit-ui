import React, {CSSProperties, useState} from 'react'
import ClassNames from 'classnames'
import CheckBox from './checkBox'
interface Option {
  value: string,
  label: string,
  disabled?: boolean
}

interface CheckBoxGroupNextProps {
  options: Option[],
  defaultValue: string[],
  tittle?: string,
  value?: string[],
  onChange?: (value: string[]) => any,
  className?: string,
  style?: CSSProperties
}

const CheckBoxGroupNext: React.FC<CheckBoxGroupNextProps> = (props) => {
  const { defaultValue, style, tittle, className, options, onChange, value} = props
  const [orderValue, setOrderValue] = useState(defaultValue || [])
  const classes = ClassNames('checkbox-group-wrapper', className)
  const handleChange = (key: string) => {
    const newValue = orderValue.includes(key)
        ? orderValue.filter((item) => item !== key)
        : [key, ...orderValue]
    setOrderValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }
  const selectAll = (mode: boolean) => {
    const initial: string[] = []
    const newValue = mode
        ? options.reduce((prev, current) => [current.value, ...prev], initial)
        : []
    setOrderValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }
  const getStatus = () => {
    if (orderValue.length === options.length) {
      return 'checked'
    } else if (orderValue.length > 0 && orderValue.length !== options.length ) {
      return 'indeterminate'
    } else {
      return 'none'
    }
  }
  const handleAll = (mode: boolean) => {
    if (getStatus() === 'checked') {
      selectAll(false)
      console.log(getStatus())
    } else {
      selectAll(true)
    }
  }
  const renderChildren = () => {
    return options.map(option => (
      <CheckBox
          key={option.value}
          checked={orderValue.includes(option.value)}
          disabled={option.disabled}
          onChange={() => handleChange(option.value)}
      >
        {option.label}
      </CheckBox>
    ))
  }
  return (
      <div className={classes} style={style}>
        <CheckBox
            onChange={handleAll}
            indeterminate={getStatus() === 'indeterminate'}
            checked={getStatus() === 'checked'}
        >
          {tittle}
        </CheckBox>
        {renderChildren()}
      </div>
  )
}
export default CheckBoxGroupNext
