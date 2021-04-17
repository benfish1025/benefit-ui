import React from 'react'
import Transition from '../Transition/transition'
interface LoadingProps {
  spinning?: boolean,
  size?: number,
  tip?: string
}
const Loading: React.FC<LoadingProps> = ({children, spinning, size, tip}) => {
  return (
      <div className={'loading-background'}>
        {children}
        <Transition timeout={300} in={spinning} classNames={'alert-background'}>
          <div className="loading-mask">
            <div className={'loading-wrapper'}>
              <div className={'loading-item loading-item--1'}> </div>
              <div className={'loading-item loading-item--2'}> </div>
              <div className={'loading-item loading-item--3'}> </div>
            </div>
            {tip && <span className={'loading-tip'}>{tip}</span>}
          </div>
        </Transition>

      </div>
  )
}
export default Loading
