import React, {FunctionComponentElement, ReactChildren, ReactHTMLElement, useEffect, useRef, useState} from 'react'
import Input from "../Input/input";
import Button from "../Button/button";
import useClickOutside from "../../hooks/useClickOutside"
import Transition from '../Transition/transition'
import SelectMenu from "./selectMenu"
import { ReactComponent as ArrowSvg } from '../Menu/select-tiny.svg'
import {ReactComponent as ForkSvg} from './select-fork.svg'
import Tag from '../Tag/tag'
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
  clearable?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  onChange?: (selectedValue?: string, selectedValues?: string[]) => void
  onVisible?: (visible: boolean) => void
}
const helpOrderValue = (orderValue: unknown[], multiple: boolean) => {
  if (multiple) {
    return ' '
  }
  return orderValue.join(',')
}
const Select: React.FC<SelectProps> = (props) => {
  const {clearable, options, disabled, placeholder, defaultValue, onChange, multiple, onVisible} = props
  const [notEmpty, setNotEmpty] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const [orderValue,setOrderValue] = useState<unknown[]>(defaultValue || [])
  const [spread, setSpread] = useState(false)
 /* const tagsRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] =useState('')*/

  const selectClasses = ClassNames('b-select', {
    'is-live': !disabled
  })
  const iconClasses = ClassNames( 'spread-icon--wrapper', {
    'spread-icon--select': !notEmpty,
    'is-spread': spread,
    'spread-icon--fork': notEmpty
  })
  const mouseEvent = !clearable
      ? {}
      : {
        onMouseEnter: () => {
         if (helpOrderValue(orderValue, Boolean(multiple))) {
           setNotEmpty(true)
         }
        },
        onMouseLeave: () => {
          setNotEmpty(false)
        }
      }
  const handleClick = () => {
    setSpread(!spread)
    if (onVisible) {
      onVisible(spread)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
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
  const handleInputClick = () => {
    if (!disabled) {
      setSpread(!spread)
    }
  }
  const handleFork = () => {
    if (notEmpty) {
      setOrderValue([])
    }
    setNotEmpty(false)
  }
  useClickOutside(selectRef,() => {
    setSpread(false)})
  return (
      <div ref={selectRef} className={selectClasses}>
        <div onClick={handleInputClick}  {...mouseEvent} className={'b-select--inner'}>
         <Input
              value={helpOrderValue(orderValue, !!multiple)}
              readonly={true}
              disabled={disabled}
              inputSize={"thin"}
              placeholder={placeholder}
         >
           {multiple && <div className={'b-select--multiple'}>
             {orderValue.map((item, index) => {
               return <Tag
                   size={"small"}
                   type={'gray'}
                   shallow={true}
                   closable={true}
                   onClose={() => handleSelect({value: item} as OptionProps, 0)}
               >
                 {item as string}
               </Tag>
             })}

           </div>}
         </Input>


          <span onClick={handleFork} className={iconClasses}>
              {notEmpty && clearable ? <ForkSvg/> : <ArrowSvg/>}
            </span>
        </div>
        <Transition in={spread} timeout={300} animation="zoom-in-top">
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
