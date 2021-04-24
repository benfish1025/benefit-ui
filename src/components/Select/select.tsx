import React, {FunctionComponentElement, ReactChildren, ReactHTMLElement, useRef, useState} from 'react'
import Input from "../Input/input";
import Button from "../Button/button";
import useClickOutside from "../../hooks/useClickOutside"
import Transition from '../Transition/transition'
import SelectMenu from "./selectMenu"
import { ReactComponent } from '../Menu/select-tiny.svg'
import ClassNames from "classnames";

export interface OptionProps {
  index?: string,
  value: string,
  label?: string,
  disabled?: boolean,
  children?: OptionProps[]
}
export interface SelectProps {
  options: OptionProps[],
  defaultValue?: string[],
  placeholder?: string,
  disabled?: boolean,
  multiple?: boolean,
  onChange?: (selectedValue: string, selectedValues: string[]) => void
  onVisible?: (visible: boolean) => void,
  children?: React.ReactNode
}

const Select: React.FC<SelectProps> = (props) => {
  const {options, disabled, placeholder, defaultValue, onChange, multiple, onVisible} = props
  const selectRef = useRef<HTMLDivElement>(null)
  const [orderValue,setOrderValue] = useState<unknown[]>(defaultValue || [])
  const [spread, setSpread] = useState(false)
  const iconClasses = ClassNames('spread-icon', {
    'is-spread': spread
  })
  const handleClick = () => {
    setSpread(!spread)
    if (onVisible) {
      onVisible(spread)
    }
  }
  const handleChange = () => {}
  const helpOrderValue = () => {
      return orderValue.join(',')
  }
  const helpMenuValue = () => {
    if (Object.prototype.toString.call(orderValue) === '[object Array]') {
      return orderValue
    } else {
      return []
    }
  }

  const handleSelect = (option: OptionProps, level: number) => {
    if (multiple) {
      if (!orderValue.includes(option.value)) {
        setOrderValue(orderValue.concat(option.value))
      } else {
        const newValue = orderValue.filter(value => value !== option.value)
        setOrderValue(newValue)
      }

      return
    } else {
      const helpValue = orderValue as string[]
      const newValue = helpValue.splice(0,level)
      newValue[level] = option.value
      setOrderValue(newValue)
    }
    if(!option.children || (option && option.children.length === 0)) {
      setSpread(false)
    }
  }
  useClickOutside(selectRef,() => {
    setSpread(false)})
  return (
      <div ref={selectRef} className={'b-select'}>
        <Button onClick={handleClick} className={'select-button'} btnType={'default'} size={'full'}>
          <div className="input-wrapper">
            <Input value={helpOrderValue()} onChange={handleChange} placeholder={placeholder}/>
            <span className={iconClasses}>
              <ReactComponent/>
            </span>
          </div>

        </Button>
        <Transition in={spread} timeout={400} animation="zoom-in-top">
          <SelectMenu
              multiple={multiple}
              orderValue={helpMenuValue() as string[]}
              level={0}
              handleChangeValue={handleSelect}
              options={options}/>
        </Transition>
      </div>
  )
}


export default Select
