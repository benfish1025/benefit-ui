import React, {CSSProperties} from 'react'
import ClassNames from 'classnames'
import {MenuItemProps} from "../Menu/menuItem";

interface TabsProps {
  className?: string,
  style?: CSSProperties
}

const Tabs: React.FC<TabsProps> = (props) => {
  const {className, style, children} = props
  const classes = ClassNames('menu',className)
  const wrapperClasses = ClassNames('menu-item__wrapper')

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
      <ul className={classes} style={style}>
        {createChildren()}
      </ul>
  )
}
export default Tabs
