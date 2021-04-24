import React, {CSSProperties, createContext, useState} from 'react'
import ClassNames from 'classnames'
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
interface MenuProps {
  onSelect?: (index: string) => void,
  defaultIndex?: string,
  children: React.ReactNode,
  className?: string,
  style?: CSSProperties,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[];
}
interface ContextProps {
  onSelect?: (index: string) => void,
  index?: string,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<ContextProps>({index: '0'})

const Menu: React.FC<MenuProps> = (props) => {
  const { onSelect, children, className, style, defaultIndex, mode, defaultOpenSubMenus} = props
  const wrapperClasses = ClassNames('menu-item__wrapper',{
    [`menu-item__wrapper--${mode}`]: mode
  })
  const classes = ClassNames('menu',className, {
    [`menu--${mode}`]: mode
  })
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setCurrentIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const context: ContextProps = {
    onSelect: handleClick,
    index: currentIndex,
    mode,
    defaultOpenSubMenus
  }
  const  createChildren = () => {
    return React.Children.map(children, (child,index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return (
            <div className={wrapperClasses}>
              {React.cloneElement(childElement, { index: index.toString()})}
            </div>
        )
      } else {
        return null
      }
    })
  }
  return (
      <MenuContext.Provider value={context}>
        <ul className={classes} style={style}>
          {createChildren()}
        </ul>
      </MenuContext.Provider>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}
export default Menu
