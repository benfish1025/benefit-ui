import React, {useState} from 'react'
import ClassNames from "classnames";
import Transition from "../Transition/transition";
import {ReactComponent} from "./cascade-gray.svg";
interface OptionProps {
  index?: string,
  value: string,
  label?: string,
  disabled?: boolean,
  children?: OptionProps[]
}
interface SelectMenuProps {
  options?: OptionProps[],
  level: number,
  multiple?: boolean,
  handleChangeValue?: (option: OptionProps, level: number) => void,
  orderValue: string[]
}

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
  const {multiple, options, level, handleChangeValue, orderValue} = props
  const WrapperClasses = ClassNames('suggestions-wrapper', {
    'is-child': level !== 0
  })
  const [currentValue, setCurrentValue] = useState<OptionProps>( {value: orderValue[level]})

  const handleSelect = (e: React.MouseEvent<HTMLElement> ,option: OptionProps) => {
    e.stopPropagation()
    setCurrentValue(option)
    if (handleChangeValue) {
      handleChangeValue(option, level)
    }
  }

  return (

      <ul className={WrapperClasses}>
        {options
          && options.map((option, index) => {
            const classes = ClassNames('suggestion-item', {
              'is-disabled': option.disabled,
              'is-active': orderValue[level] === option.value || ( multiple && orderValue.includes(option.value))
            })
            return (
                <li key={index} onClick={option.disabled ? undefined : (e) => handleSelect(e, option)} className={classes}>
                  {option.value}
                  {option.children &&
                  <span className={'cascade-icon'}>
                    <ReactComponent/>
                  </span>
                  }
                  <Transition in={((option.value === currentValue.value &&
                      option.children && orderValue[level] === option.value) || (!multiple && orderValue[level] === option.value && orderValue.length > level + 1))} timeout={400} animation="zoom-in-top">
                  <SelectMenu
                      level={level + 1}
                      options={option.children}
                      handleChangeValue={handleChangeValue}
                      orderValue={orderValue}
                  />
                  </Transition>
                </li>
            )
          })
        }
      </ul>
  )
}

export default SelectMenu
