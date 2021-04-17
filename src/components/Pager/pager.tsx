import React, {useState} from 'react'
import ClassNames from 'classnames'

interface PagerProps {
  current?: number,
  defaultCurrent?: number,
  total: number,
  onChange?: (index: number) => void
}

const calculateIndex = (total: number,currentIndex: number) => {
  if (total - 4 > currentIndex && currentIndex > 5) {
    return [1,'...',currentIndex - 2,currentIndex-1,currentIndex,currentIndex + 1,currentIndex + 2,'...',total]
  } else if (currentIndex  >= total - 4 ) {
    return [1,'...',total-6,total-5,total-4,total-3,total-2,total-1,total]

  }else if (currentIndex <= 5) {
    return [1,2,3,4,5,6,7,'...',total]

  } else if (currentIndex  === total) {
    return [1,'...',total-6,total-5,total-4,total-3,total-2,total-1,total]
  } else return []
}
const Pager = (props: PagerProps) => {
  const { total, current, defaultCurrent, onChange} = props
  const [currentIndex, setCurrentIndex] = useState(defaultCurrent || 1)
  if (current) {

  }
  const handleIndexClick = (index: number) => {
    setCurrentIndex(index)
    if (onChange) {
      onChange(index)
    }
  }
  const handleIndexNode = (arrIndex: number) => {
    if (arrIndex < 5) {
      setCurrentIndex(currentIndex - 5)
    } else {
      setCurrentIndex(currentIndex + 5)
    }
  }
  const handleArrow = (mode: 'head' | 'tail') => {
    if (mode === 'head') {
      currentIndex > 1 && setCurrentIndex(currentIndex - 1)
    } else if (mode === 'tail') {
      currentIndex < total && setCurrentIndex(currentIndex + 1)
    }
  }
  const headArrowClasses = ClassNames('pager-item', {
    'is-disabled': currentIndex === 1
  })
  const tailArrowClasses = ClassNames('pager-item', {
    'is-disabled': currentIndex === total
  })
  return (
      <ul className={'pager-wrapper'}>
        <li onClick={() => handleArrow('head')} className={headArrowClasses}>{'<'}</li>
        {calculateIndex(total,currentIndex).map((item,index) => {
          const indexClasses = ClassNames('pager-item', {
            'is-active': item === currentIndex
          })
          if (item === '...') {
            return (
                <li
                    onClick={() => handleIndexNode(index)}
                    className={indexClasses}>
                  {item}
                </li>
            )
          } else return (
              <li
                  onClick={() => handleIndexClick(item as number)}
                  className={indexClasses}>
                {item}
              </li>
            )

        })}
        <li onClick={() => handleArrow('tail')} className={tailArrowClasses}>{'>'}</li>
      </ul>
  )
}
export default Pager
