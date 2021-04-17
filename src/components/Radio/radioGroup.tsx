import React, {useState} from 'react'
import ClassNames from 'classnames'
import { RadioProps } from './radio'
interface RadioGroupProps {
  onChange?: (value: string) => void,
  value?: string,
  defaultValue?: string,
  vertical?: boolean,
  radioStyle?: 'button' | 'radio'
}
const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {radioStyle = 'radio', vertical, defaultValue, value, children, onChange} = props
  const [activeValue, setActiveValue] = useState(defaultValue ? defaultValue : '')
  const handleChange = (newValue: string) => {
    setActiveValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }
  const groupClasses = ClassNames('b-radio-group', {
    'is-vertical': vertical,
    'is-radio-style': radioStyle !== 'button'
  })
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<RadioProps>
      const {displayName} = childElement.type
      if (displayName === 'Radio') {
        return React.cloneElement(childElement, {
          onChange: handleChange,
          activeValue: value || activeValue,
          radioStyle: radioStyle,
          index: index + 1
        })
      }
    })
  }
  return (
      <div className={groupClasses}>
        {renderChildren()}
      </div>
  )
}

export default RadioGroup
