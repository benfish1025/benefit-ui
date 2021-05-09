import React, {useContext} from "react";
import {TabsContext} from "./tabs";

export interface TabPaneProps {
  children?: React.ReactNode,
  tabKey?: string,
  tab: string,
  index?: number
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const {index, children, tabKey} = props
  const context = useContext(TabsContext)
  return (
      <>
        {context.index === index
          ? <div className={'b-tabs-pane__container'} key={tabKey}>
            {children}
          </div>
          : null}
      </>
  )
}

TabPane.displayName = 'TabPane'
export default TabPane
