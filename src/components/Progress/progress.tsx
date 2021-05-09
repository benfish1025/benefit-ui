import React, {SVGProps} from 'react'
import ClassNames from 'classnames'
interface ProgressProps {
  percent: number,
  type?: 'line' | 'circle',
  showText?: boolean,
  color?: string,
  showAnimation?: boolean
}
const helpWidth = (percent: number) => {
  if (percent > 100) {
    return 100
  } else if (percent < 0) {
    return 0
  } else {
    return percent
  }
}
const helpColor = (percent: number, color: string | undefined) => {
  if (percent >= 100) {
    return '#58cc02'
  } else if (percent <= 0) {
    return '#e5e5e5'
  } else {
    return color ? color : '#1cb0f6'
  }
}
const Progress = ({showAnimation, color, showText, percent, type}: ProgressProps) => {
  const innerStyle = {
    width: `${helpWidth(percent)}%`,
    backgroundColor: `${helpColor(percent, color)}`
  }
  const bgAttributes: SVGProps<SVGPathElement> = {
    strokeWidth: "10.5",
    strokeDasharray: "295.31px, 295.31px",
    strokeDashoffset: "0px"
  }
  const pathAttributes: SVGProps<SVGPathElement> = {
    strokeLinecap: "round",
    strokeWidth: "10.5",
    strokeDasharray: `${267 * helpWidth(percent) / 100}px, 267px`,
    strokeDashoffset: "0px",
    stroke: `${helpColor(percent, color)}`
  }
  const opacityAttributes: SVGProps<SVGPathElement> = {
    strokeLinecap: "round",
    strokeWidth: "3",
    strokeDasharray: `${267 * helpWidth(percent) / 100}px, 267px`,
    strokeDashoffset: "5px",
  }
  const decorateClasses = ClassNames('b-progress__decorate', {
    'has-animation': showAnimation && percent < 100 && percent > 0
  })
  if (type === 'circle') {
    return (
        <div className={'b-progress-circle'}>
          <svg viewBox="0 0 100 100">
            <path className="b-progress-circle__track" d="
          M 50 50
          m 0 -43
          a 40 40 0 1 1 0 85
          a 40 40 0 1 1 0 -85
          "
                  stroke="#e5e5e5"
                  fill="none"
                  {...bgAttributes}
            >

            </path>
            <path className="b-progress-circle__path" d="
          M 50 50
          m 0 -43
          a 40 40 0 1 1 0 85
          a 40 40 0 1 1 0 -85
          "
                  stroke="#1cb0f6"
                  fill="none"
                  {...pathAttributes}
            >

            </path>
            <path className="b-progress-circle__opacity" d="
          M 50 50
          m 0 -44
          a 40 40 0 1 1 0 87
          a 40 40 0 1 1 0 -87
          "
                  stroke="#ffffff"
                  opacity="0.2"
                  fill="none"
                  {...opacityAttributes}
            >

            </path>
          </svg>
          {showText && <span className={'b-progress-circle__text'}>{helpWidth(percent)}%</span>}

        </div>
    )
  } else {
    return (
        <div className="b-progress">
          <div className={'b-progress__outer'}>
            <div style={innerStyle} className="b-progress__inner">
              <div className={decorateClasses}>

              </div>
              {showAnimation && percent < 100 && percent > 0 && <div className={'show-animation'}> </div>}
            </div>
          </div>
          {showText && <span className={'b-progress__text'}>
          {helpWidth(percent)}%
        </span>}
        </div>

    )
  }

}

export default Progress
