import React from 'react'
import Transition from '../Transition/transition'
import useDebounce from "../../hooks/useDebounce";
interface LoadingProps {
  loading?: boolean,
  size?: number,
  tip?: string,
  delay?: number,
  color?: string
}
const Loading: React.FC<LoadingProps> = ({loading,color, delay, children, size, tip}) => {
  const debounce = useDebounce(loading, delay)
  const loadingItemColor = {
    backgroundColor: color
  }
  const loadingTipColor = {
    color: color
  }
  return (
      <div className={'loading-background'}>
        {children}
        <Transition timeout={300} in={delay ? debounce : loading} classNames={'alert-background'}>
          <div className="loading-mask">
            <div className={'loading-wrapper'}>
              <div style={loadingItemColor} className={'loading-item loading-item--1'}> </div>
              <div style={loadingItemColor} className={'loading-item loading-item--2'}> </div>
              <div style={loadingItemColor} className={'loading-item loading-item--3'}> </div>
            </div>
            {tip && <span style={loadingTipColor} className={'loading-tip'}>{tip}</span>}
          </div>
        </Transition>

      </div>
  )
}
export default Loading
