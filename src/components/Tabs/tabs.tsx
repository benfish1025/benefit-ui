import React, {createContext, CSSProperties, useEffect, useRef, useState} from 'react'
import ClassNames from 'classnames'
import TabItem, {TabItemProps} from "./tabItem";
import TabPane, {TabPaneProps} from "./tabPane";

interface TabsProps {
  className?: string,
  style?: CSSProperties,
  defaultIndex?: number,
  onSelect?: (index: number) => void,
  showBorder?: boolean,
  type?: 'default' | 'card',
  editable?: boolean,
  onEdit?: (key: string) => void
}
interface ContextProps {
  onEdit?: (key: string) => void,
  onSelect?: (index: number, childWidth: number) => void,
  index?: number,
  childWidth?: number,
  type?: 'default' | 'card',
  editable?: boolean
}
export const TabsContext = createContext<ContextProps>({index: 0})

const Tabs: React.FC<TabsProps> = (props) => {
  const {onEdit, editable, type = 'default', showBorder, onSelect, defaultIndex = 0, className, style, children} = props
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const [childWidth, setChildWidth] = useState(0)
  const classes = ClassNames('b-tabs',className, {
    'is-card': type === 'card'
  })
  const wrapperClasses = ClassNames({
    'b-tabs__wrapper': showBorder,
    'is-card': type === 'card'
    }
  )
  const handleEdit = (key: string) => {
    if (onEdit) {
      onEdit(key)
    }
  }
  const handleClick = (index: number, childWidth: number) => {
    setCurrentIndex(index)
    setChildWidth(childWidth)
    if (onSelect) {
      onSelect(index)
    }
  }
  const context: ContextProps = {
    onEdit: handleEdit,
    onSelect: handleClick,
    index: currentIndex,
    type: type,
    editable: editable
  }
  const sliderStyle = {
    transform: `translateX(${currentIndex * childWidth + childWidth / 2 - 16}px)`
  }

  const  createChildrenTab = () => {
    return React.Children.map(children, (child,i) => {
      const childElement = child as React.FunctionComponentElement<TabPaneProps>
      const { displayName } = childElement.type
      const tabTittle = childElement.props.tab
      const tabKey = childElement.props.tabKey
      if (displayName === 'TabPane') {
        return (
              <TabItem tabKey={tabKey} index={i}>{tabTittle}</TabItem>
        )
      } else {
        return null
      }
    })
  }
  const  createChildrenPane = () => {
    return React.Children.map(children, (child,i) => {
      const childElement = child as React.FunctionComponentElement<TabPaneProps>
      const { displayName } = childElement.type
      if (displayName === 'TabPane') {
        return (
            React.cloneElement(childElement, {index: i})
        )
      } else {
        return null
      }
    })
  }
  return (
      <TabsContext.Provider value={context}>
        <div className={wrapperClasses}>
          <ul className={classes} >
            {createChildrenTab()}
            {type === 'default' && <div style={sliderStyle} className="b-tabs-slider"> </div>}
          </ul>
          {createChildrenPane()}
        </div>
      </TabsContext.Provider>
  )
}
export default Tabs
