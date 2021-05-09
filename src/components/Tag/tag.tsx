import React, {useState} from 'react'
import ClassNames from 'classnames'
import {ReactComponent as ForkSvg} from './fork.svg'
import {isBoolean} from "util";
interface TagProps {
  children: React.ReactNode,
  closable?: boolean,
  type?: 'gray' | 'red' | 'yellow' | 'blue' | 'green' | 'purple',
  shallow?: boolean,
  onTagClick?: () => void,
  onClose?: () => void,
  color?: string,
  size?: 'normal' | 'small',
  checked?: boolean,
  checkable?: boolean
}
const Tag: React.FC<TagProps> = (props) => {
  const {
    shallow = false,
    children,
    closable,
    type = 'blue',
    onTagClick,
    onClose,
    size = 'normal',
    checked = true,
    checkable
  } = props
  const tagClasses = ClassNames('b-tag', {
    'is-clickable': onTagClick,
    'is-checkable': checkable,
    [`b-tag--${type}`]: type && shallow && checked,
    [`b-tag-${type}`]: type && !shallow && checked,
    'b-tag--tiny': size === 'small'
  })
  const buttonClasses = ClassNames('svg-container', {
    [`is--${type}`]: type && shallow,
    [`is-${type}`]: type && !shallow
  })
  const handleClick = () => {
    if (onTagClick) {
      onTagClick()
    }
  }

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (onClose) {
      onClose()
    }
  }
  return (
      <span onClick={handleClick} className={tagClasses}>
        {children}
        {closable && <span onClick={handleClose} className={buttonClasses}><ForkSvg/></span>}
      </span>
  )
}

export default Tag
