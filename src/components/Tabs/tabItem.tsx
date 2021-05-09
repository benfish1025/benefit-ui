import React, {useContext, useEffect, useReducer, useRef} from "react";
import {TabsContext} from "./tabs";
import ClassNames from 'classnames'
import {ReactComponent as ForkSvg} from '../Tag/fork.svg'



export interface TabItemProps {
  children?: string,
  index?: number,
  tabKey?: string
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const {tabKey, children, index} = props
  const context = useContext(TabsContext)
  const itemElementRef = useRef<HTMLLIElement>(null)
  const itemWidthRef = useRef(0)
  useEffect(() => {
    if (itemElementRef.current) {
      itemWidthRef.current = itemElementRef.current.clientWidth
      if (index === context.index) {
        if (context.onSelect && index !== undefined) {
          context.onSelect(index, itemElementRef.current.clientWidth)
        }
      }
    }

  }, [])
  const classes = ClassNames('b-tabs-item', {
    'is-active': index === context.index,
    'is-card': context.type === 'card'
  })
  const clickHandle = (e: React.MouseEvent) => {
    if (context.onSelect && index !== undefined) {
      context.onSelect(index, itemWidthRef.current)
    }
  }
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (context.onEdit && tabKey !== undefined) {
      context.onEdit(tabKey)
    }
  }
  return (
      <li key={tabKey} ref={itemElementRef} onClick={clickHandle} className={classes}>
        {children}
        {context.editable && <span onClick={handleEdit} className={'b-tabs-svg'}>
          <ForkSvg/>
        </span>}

      </li>
  )
}
TabItem.displayName = 'TabItem'
export default TabItem
