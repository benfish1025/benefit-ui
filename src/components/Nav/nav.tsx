import React from 'react'
import ClassNames from "classnames"

interface NavProps {
  children: React.ReactNode,
  className?: string,
}
const Nav: React.FC<NavProps> = (props) => {
  const {children, } = props
  const classes = ClassNames('nav')
  return (
      <div className={classes}>
        <ul className="nav-under">
          {children}
        </ul>
      </div>
  )
}
export default Nav
