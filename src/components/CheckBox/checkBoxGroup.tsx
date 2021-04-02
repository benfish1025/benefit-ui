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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  style?: CSSProperties
}

const CheckBoxGroup:React.FC<CheckBoxGroupProps> = (props) => {
  const { onChange, options, defaultValue, className, tittle, style} = props
  const [indeterminate, setIndeterminate] = useState(()=>{
    return !!defaultValue && defaultValue?.length !== options?.length
  })
  const [orderChecked, setOrderChecked] = useState(()=>{
    return !!defaultValue && defaultValue.length === options?.length
  })
  const [order, setOrder] = useState(0)
  console.log(order)
  const length = options.length
  console.log('长度',length)
 useEffect(() => {
    console.log('预备比较',order)
    setIndeterminate(order !== 0 && order < length)
    setOrderChecked(order !== 0)

  },[order])
  const calculate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setOrder(order + 1)
    } else {
      setOrder(order - 1)
    }
  }
  const renderCheckBox = () => {
    if (options) {
      return options.map((option, index) => {
        const state = defaultValue && defaultValue.includes(option.value)
        return (
          <CheckBox key={option.value} defaultChecked={state} disabled={option.disabled} onChange={calculate}>{option.label}</CheckBox>
        )
      })
    } else {
      return null
    }
  }

  return (
      <div className={className}>
        <CheckBox indeterminate={indeterminate} checked={false}>{tittle}</CheckBox>
        {renderCheckBox()}
      </div>
  )
}
export default CheckBoxGroup
