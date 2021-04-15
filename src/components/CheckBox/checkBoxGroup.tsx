import React, {ChangeEvent, CSSProperties, useEffect, useState} from 'react'
import CheckBox from './checkBox'

interface Option {
  value: string,
  label: string,
  disabled?: boolean
}
interface CheckBoxGroupProps {
  options: Option[],
  defaultValue?: string[],
  tittle?: string,
  onChange?: () => void,
  className?: string,
  style?: CSSProperties
}

const CheckBoxGroup:React.FC<CheckBoxGroupProps> = (props) => {
  const { onChange, options, defaultValue, className, tittle, style} = props
  const [indeterminate, setIndeterminate] = useState(()=>{
    return !!defaultValue && defaultValue?.length !== options?.length
  })
  const [interact, setInteract] = useState(false)
  const [orderChecked, setOrderChecked] = useState(()=>{
    return !!defaultValue && defaultValue.length === options?.length
  })
  const [order, setOrder] = useState(0)
  console.log(order)
  const length = options.length

 useEffect(() => {

    setIndeterminate(order !== 0 && order < length)
    setOrderChecked(order !== 0)

  },[order])
  const orderChange = () => {
    setOrderChecked(!orderChecked)
  }
  const renderCheckBox = () => {
    if (options) {
      return options.map((option, index) => {
        const state = defaultValue && defaultValue.includes(option.value)
        console.log('renderCheckBox运行了',state)
        return (
          <CheckBox key={option.value} checked={orderChecked} disabled={option.disabled}>{option.label}</CheckBox>
        )
      })
    } else {
      return null
    }
  }

  return (
      <div className={className} style={style}>
        <CheckBox onChange={orderChange} indeterminate={indeterminate} checked={orderChecked}>{tittle}</CheckBox>
        {renderCheckBox()}
      </div>
  )
}
export default CheckBoxGroup
