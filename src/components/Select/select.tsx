import React, {useRef, useState} from 'react'
import Input from "../Input/input";
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
  onVisible?: (visible: boolean) => void,
  zIndex?: number,
  changeOnEnd?: boolean
}
const helpOrderValue = (orderValue: unknown[], multiple: boolean, option?: OptionProps,changeOnEnd?: boolean) => {
  if (multiple && orderValue.length) {
    return ' '
  }else if (changeOnEnd && option ) {
    if(!option.children) {
      return orderValue.join(',')
    } else return undefined
  } else {
    return orderValue.join(',')
  }
}
const Select: React.FC<SelectProps> = (props) => {
  const {changeOnEnd, zIndex, clearable, options, disabled, placeholder, defaultValue, onChange, multiple, onVisible} = props
  const [notEmpty, setNotEmpty] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const [orderValue,setOrderValue] = useState<unknown[]>(defaultValue || [])
  const [spread, setSpread] = useState(false)
  const [currentValue, setCurrentValue] = useState<OptionProps>({} as OptionProps)
  const selectClasses = ClassNames('b-select', {
    'is-live': !disabled
  })
  const iconClasses = ClassNames( 'spread-icon--wrapper', {
    'spread-icon--select': !notEmpty,
    'is-spread': spread,
    'spread-icon--fork': notEmpty
  })
  const style = {
    zIndex: zIndex
  }

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
    if (changeOnEnd){
      setCurrentValue(option)
    }
  }
  const handleInputClick = () => {
    if (!disabled) {
      setSpread(!spread)
    }
  }
  const handleFork = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (notEmpty) {
      setOrderValue([])
    } else {
      if (!disabled) {
        setSpread(!spread)
      }
    }
    setNotEmpty(false)
  }
  useClickOutside(selectRef,() => {
    setSpread(false)})
  return (
      <div style={style} ref={selectRef} className={selectClasses}>
        <div onClick={handleInputClick}  {...mouseEvent} className={'b-select--inner'}>
          {!multiple && <Input
              value={helpOrderValue(orderValue, !!multiple, currentValue, changeOnEnd)}
              readonly={true}
              disabled={disabled}
              inputSize={"thin"}
              placeholder={placeholder}
         >
         </Input>}

          {multiple && <div className={'b-select--multiple'}>
            {!orderValue.length && <span className={'placeholder'}>{placeholder}</span>}
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
          <span onClick={handleFork} className={iconClasses}>
              {orderValue.length && notEmpty && clearable ? <ForkSvg/> : <ArrowSvg/>}
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
