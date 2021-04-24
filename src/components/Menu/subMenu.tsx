import React, {useContext, useRef, useState} from 'react'
import ClassNames from 'classnames'
import {MenuItemProps} from "./menuItem";
import Transition from "../Transition/transition";
import { MenuContext } from './menu'
import { ReactComponent } from './select-tiny.svg'
import Unfold from '../Fold/fold'

export interface SubMenuProps {
  tittle: string,
  index?: string,
  className?: string,
  children: React.ReactNode
}
const SubMenu: React.FC<SubMenuProps> = ({index, tittle, className, children}) => {
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isSpread = (context.mode === 'vertical' && index) ? openSubMenus.includes(index) : false
  const [spread, setSpread] = useState(isSpread)
  const classes = ClassNames('menu-item sub-menu', className, {
    [`menu-item--${context.mode}`]: context.mode,
    'is-active': (context.index && context.index[0] === index) || (spread && context.mode === 'horizontal')
  })
  const wrapperClasses = ClassNames('sub-menu__wrapper',{
    'is-spread': spread,
    [`sub-menu__wrapper--${context.mode}`]: context.mode
  })
  const iconClasses = ClassNames('spread-icon', {
    'is-color': context.mode === 'vertical' ? context.index && context.index[0] === index : spread,
    'is-spread': spread,
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setSpread(!spread)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setSpread(toggle)
    }, 100)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}
  const multiEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)},
    onClick: handleClick
  } : {}
  const createChildren = () => {
    return React.Children.map(children, (child,i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        return null
      }
    })
  }
  return (
      <div className={'sub-menu-group'}>
        <li className={classes} {...hoverEvents} {...clickEvents}>
          <span>{tittle}</span>
          <span className={iconClasses}>
          <ReactComponent/>
        </span>

        </li>
        {/*<Transition in={spread} timeout={300} classNames="zoom-in-top-pro">*/}
        <Unfold visible={spread} vertical={true}>
          <ul className={wrapperClasses} {...multiEvents}>
            {createChildren()}
          </ul>
        </Unfold>
      </div>

  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
