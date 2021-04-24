import React, {useState} from 'react'
import ClassNames from 'classnames'
import Transition from "../Transition/transition";
import {ReactComponent as SelectScg} from './select-tiny.svg'
import {cleanup} from "@testing-library/react";

interface PaginationProps {
  defaultCurrent?: number,
  total: number,
  onChange?: (index: number) => void,
  showSizeChanger?: boolean,
  showQuickJumper?: boolean,
  simple?: boolean
}
const calculatePages = (totalItems: number, perPage: number) => {
  console.log(totalItems / perPage)
  return Math.ceil(totalItems / perPage)
}
const calculateIndex = (totalPages: number,currentIndex: number) => {
  if (totalPages < 10) {
    return [...Array(totalPages)].map((item, index) => index + 1)
  }else if (totalPages - 4 > currentIndex && currentIndex > 5) {
    return [1,'...',currentIndex - 2,currentIndex-1,currentIndex,currentIndex + 1,currentIndex + 2,'...',totalPages]
  } else if (currentIndex  >= totalPages - 4 ) {
    return [1,'...',totalPages-6,totalPages-5,totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages]

  }else if (currentIndex <= 5) {
    return [1,2,3,4,5,6,7,'...',totalPages]

  } else if (currentIndex  === totalPages) {
    return [1,'...',totalPages-6,totalPages-5,totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages]
  } else return []
}
const Pagination = (props: PaginationProps) => {
  const {simple, showQuickJumper, showSizeChanger,  total, defaultCurrent, onChange} = props
  const [currentIndex, setCurrentIndex] = useState(defaultCurrent || 1)
  const [perPage, setPerPage] = useState(10)
  const [spread, setSpread] = useState(false)
  const perPageClasses = ClassNames('pager-item per-page-control', {
    'is-active': spread
  })
  const handlePerPageContr = () => {
    setSpread(!spread)
  }
  let timer: any
  const handlePerPage = (number: number) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setPerPage(number)
    }, 300)
    setSpread(!spread)
    if (currentIndex > calculatePages(total, number)) {
      setCurrentIndex(calculatePages(total, number))
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> & React.ReactEventHandler) => {
    switch(e.code) {
      case 'Enter': {
        if (Number(e.currentTarget.value) > calculatePages(total, perPage)) {
          e.currentTarget.value = `${calculatePages(total, perPage)}`
        } else if (Number(e.currentTarget.value) < 0) {
          e.currentTarget.value = '1'
        } else if (Number(e.currentTarget.value)) {
          setCurrentIndex(Number(e.currentTarget.value))
        } else {
          e.currentTarget.value = ''
        }
        break
      }
      default: {
        break
      }
    }
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
      currentIndex < calculatePages(total, perPage) && setCurrentIndex(currentIndex + 1)
    }
  }
  const headArrowClasses = ClassNames('pager-item', {
    'is-disabled': currentIndex === 1,
    'is-simple': simple
  })
  const tailArrowClasses = ClassNames('pager-item', {
    'is-disabled': currentIndex === calculatePages(total, perPage),
    'is-simple': simple
  })
  return (
      <div className={'flex-row-wrapper'}>
        <ul className={'pager-wrapper'}>
          <li onClick={() => handleArrow('head')} className={headArrowClasses}>{'<'}</li>
          {calculateIndex(calculatePages(total, perPage),currentIndex).map((item,index) => {
            const indexClasses = ClassNames('pager-item', {
              'is-active': item === currentIndex,
              'is-simple': simple
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
        {showSizeChanger
        && <div className={'b-autocomplete'}>
          <div
              className={perPageClasses}
              onClick={handlePerPageContr}
          >
            <span>{`${perPage}条/页`}</span>
            <SelectScg/>
          </div>
          <Transition in={spread} timeout={300} animation={'zoom-in-top'}>
            <ul className={'per-page-wrapper'}>
              <li
                  className={'suggestion-item'}
                  onClick={() => handlePerPage(10)}
              >
                  10条/页
              </li>
              <li
                  className={'suggestion-item'}
                  onClick={() => handlePerPage(50)}
              >
                  50条/页
              </li>
              <li
                  className={'suggestion-item'}
                  onClick={() => handlePerPage(100)}
              >
                  100条/页
              </li>
            </ul>
          </Transition>
        </div>}
        {showQuickJumper
        && <div className={'pager-input-wrapper'}>
            <span>跳转到</span><input onKeyDown={handleKeyDown} className={'pager-input'} type="text"/><span>页</span>
        </div>}
      </div>)

}
Pagination.defaultProps = {
  defaultCurrent: 1
}
export default Pagination
