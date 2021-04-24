import React, {useState} from 'react'
import ClassNames from 'classnames'


interface RateProps {
  count?: number,
  value?: number,
  defaultValue?: number,
  allowHalf?: boolean,
  allowClear?: boolean,
  disabled?: boolean,
  onChange?: (newValue: number) => void,
  tip?: string
}

const Rate: React.FC<RateProps> = (props) => {
  const {tip, count = 5,defaultValue, value, disabled, allowClear = true, allowHalf, onChange} = props
  const [halfIndex, setHalfIndex] = useState(0)
  const helpChangeToOrigin = (index: number) => {
    return allowHalf ? index / 2 : Math.ceil(index / 2)
  }
  const helpChangeToFull = (index: number) => {
    if(!allowHalf) {
      return Math.ceil(index / 2) * 2
    } else return index

  }
  const [orderValue, setOrderValue] = useState<number>(defaultValue || 0)
  const helpValue = () => {
    return value ? value : orderValue
  }
  const transValue = (upload: boolean) => {
    if (halfIndex && !upload) {
      if (allowHalf) {
        return halfIndex
      } else {
        return Math.ceil(halfIndex / 2) * 2
      }
    } else {
      const integralPart = Math.floor(helpValue())
      const fractionalPart = helpValue() - integralPart
      if (integralPart < 0) {
        return 0
      }
      if (helpValue() - integralPart) {
        if (fractionalPart <= 0.5) {
          return allowHalf ? (integralPart + 0.5) * 2 : integralPart * 2
        } else return (integralPart + 1) * 2
      } else return integralPart * 2
    }
  }

  const handleChange = (index: number) => {
    const newValue = allowClear && helpChangeToFull(index) === transValue(true) ? 0 : helpChangeToOrigin(index)
    if (helpChangeToFull(index) === transValue(true)) {
      setHalfIndex(0)
    }
    if (value) {
      onChange && onChange( newValue)
    } else {
      setOrderValue(newValue)
      onChange && onChange( newValue)
    }
  }
  const handleClickHalf = (index: number) => {
    setHalfIndex(index)
  }
  let timer: NodeJS.Timeout
  const handleMouseLeave = () => {
    clearTimeout(timer)
    timer = setTimeout(() =>  setHalfIndex(0), 100)
  }

  const renderLoves = () => {
    return [...Array(count)].map((value, index) => {
      const trans = transValue(false)

      const halfClasses = ClassNames('love', {
        'love--on': 2 * index + 2 <= trans,
        'love--half': 2 * index + 1 === trans,
        'love--off': 2 * index + 1 > trans || trans === 0,
        'is-disabled': disabled
      })
      return(
          <div
              className={halfClasses}
          >
            <div className="love-half__wrapper">
              <div onClick={() => !disabled && handleChange(index * 2 + 1)} className={'love-half love-half--left'} onMouseEnter={() => handleClickHalf(index * 2 + 1)}> </div>
              <div onClick={() => !disabled && handleChange(index * 2 + 2)} className={'love-half love-half--right'} onMouseEnter={() => handleClickHalf(index * 2 + 2)}> </div>
            </div>

          </div>
      )
    })
  }
    return (
        <div className={'loves-container'} onMouseLeave={handleMouseLeave}>
          { renderLoves() }
          <span>{tip}</span>
        </div>
    )
  }

export default Rate


