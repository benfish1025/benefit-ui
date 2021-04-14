import React, {useState} from 'react'
import ClassNames from 'classnames'
import loveSvg from './love.svg'

interface RateProps {
  count?: number,
  value?: number,
  defaultValue?: number,
  allowHalf?: boolean,
  allowClear?: boolean,
  disabled?: boolean,
  onChange?: (newValue: number) => void
}

const Rate: React.FC<RateProps> = (props) => {
  const {count = 5,defaultValue, value, disabled, allowClear, allowHalf, onChange} = props
  const helpHalf = () => {
    return allowHalf ? 0.5 : 1
  }
  const [orderValue, setOrderValue] = useState<number>(defaultValue || 0)
  const helpValue = () => {
    return value ? value : orderValue
  }
  const handleChange = (index: number) => {
    const newValue = allowClear && Math.clz32(helpValue()) === index + 1? 0 : index + helpHalf()
    if (value) {
      onChange && onChange( newValue)
    } else {
      setOrderValue(newValue)
      onChange && onChange( newValue)
    }
  }
  const renderLoves = () => {
    const integralPart = Math.floor(helpValue())
    const fractionalPart = Boolean(helpValue() - integralPart)
    return [...Array(count)].map((value, index) => {
      const classes = ClassNames('love', {
        'love--on': index < integralPart,
        'love--half': index === integralPart && fractionalPart,
        'love--off': index >= integralPart && !fractionalPart,
        'is-disabled': disabled
      })
      return(
          <div
              className={classes}
              onClick={() => !disabled && handleChange(index)}
          >

            <img src={loveSvg} alt="love"/>

            <div className="love-half__wrapper">
              <div className={'love-half is-gray'}> </div>
              <div className={'love-half'}> </div>
            </div>

          </div>
      )
    })
  }
    return (
        <div className={'loves-container'}>
          { renderLoves() }
        </div>
    )
  }

export default Rate


