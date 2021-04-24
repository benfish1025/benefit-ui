import React, {CSSProperties, useContext} from 'react'
import ClassNames from 'classnames'
import {MenuContext} from './menu'

export interface MenuItemProps {
  index?: string,
  disabled?:boolean,
  className?: string,
  style?: CSSProperties,
  children: React.ReactNode
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext)
  const { children, className, style, index, disabled} = props
  const classes = ClassNames('menu-item',className,{
    'is-disabled': disabled,
    'is-active': context.index === index,
    [`menu-item--${context.mode}`]: context.mode
  })
  const clickHandle = (e: React.MouseEvent) => {
    if (context.onSelect && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  const clickEvents = disabled ? {} : {
    onClick: clickHandle
  }
  return (
      <li className={classes} style={style} {...clickEvents}>
        {children}
      </li>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
