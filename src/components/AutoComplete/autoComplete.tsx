import React, {InputHTMLAttributes, ReactElement, useEffect, useRef, useState} from 'react'
import ClassNames from 'classnames'
import Input from './../Input/input';
import useClickOutside from '../../hooks/useClickOutside'
import useDebounce from '../../hooks/useDebounce'
import Transition from "../Transition/transition"
import Loading from '../Loading/loading'
import {InputProps} from '../Input/input'
interface DataSourceObject {
  value: string
}
type DataSourceType<T = {}> = T & DataSourceObject
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'>{
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>,
  onSelect?: (item: DataSourceType) => void,
  renderOptions?: (item: DataSourceType) => ReactElement
}

const AutoComplete = (props: AutoCompleteProps) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOptions,
      ...restProps
  } = props
  const [ inputValue, setInputValue ] = useState(value as string)
  const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([])
  const [ loading, setLoading ] = useState(false)
  const [ showDropdown, setShowDropdown] = useState(false)
  const [ highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debounceValue = useDebounce(inputValue, 200)
  useClickOutside(componentRef, () => {
    setShowDropdown(false)
    setSuggestions([])
  })
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setSuggestions([])
      const results = fetchSuggestions(debounceValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          if (data) {
            setSuggestions(data)
            if (data.length > 0) {
              setShowDropdown(true)
            }
          }
        })
      } else {
        setSuggestions(results)
        setShowDropdown(false)
        if (results.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debounceValue, fetchSuggestions])
  const highlight = (index: number) => {
    if (index < 0) {
      index = suggestions.length - 1
    }
    if (index >= suggestions.length) index = 0
    setHighlightIndex(index)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    setInputValue(newValue)
    triggerSearch.current = true
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.code) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      case 'Escape':
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  let timer: NodeJS.Timeout
  const handleSelect = (item: DataSourceType) => {
    clearTimeout(timer)
    timer = setTimeout(() => setInputValue(item.value), 200)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const highLightInputValue = (v: string) => {
    const renderValue = inputValue
    const anchor = v.indexOf(inputValue)
    const head = v.slice(0,anchor)
    const tail = v.slice(anchor + inputValue.length)
    return (
        <span>{head}<em className={'highlight-auto-value'}>{renderValue}</em>{tail}</span>
    )
  }
  const renderTemplate = (item: DataSourceType) => {
    return renderOptions ? renderOptions(item) : highLightInputValue(item.value)
  }
  const renderDropDown = () => {
    return(
        <ul className={'suggestions-wrapper'}>
          {loading &&
              <div className={'suggestions-loading'}>
                <Loading loading={loading}/>
              </div>
          }
          {suggestions.length === 0 && !loading && showDropdown &&
          <div className={'suggestions-loading'}>
            {'无相关结果'}
          </div>
          }
          {suggestions.map((item,index) => {
            const suggestionClasses = ClassNames('suggestion-item',{
              'is-active': index === highlightIndex
            })
            return (
              <li className={suggestionClasses} key={index} onClick={() => { handleSelect(item) }}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
    )
  }
  return (
      <div className={'b-autocomplete'} ref={componentRef}>
        <Input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
        <Transition in={showDropdown} timeout={300} animation="zoom-in-top">
          {renderDropDown()}
        </Transition>
      </div>
  )
}
export default AutoComplete
