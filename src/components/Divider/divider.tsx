import React from 'react'
interface DividerProps {
  text?: string
}
const Divider: React.FC = ({children}) => {
  return (
      <div className="b-divider">
      <div className="b-divider__line1" />
        <div className="b-divider__text">
          {children}
        </div>
        <div className="b-divider__line2" />
      </div>
  )
}
export default Divider
