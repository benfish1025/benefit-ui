import React from 'react'
import ClassNames from 'classnames'

interface NavItemProps {
  children?: React.ReactNode,
}
const NavItem: React.FC<NavItemProps> = (props) => {
  const {children} = props
  const classes = ClassNames('nav-item')
  return (
      <li className={classes}>
        <div className="item-content">
          <div className="item-content__image">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/3a52db17e82dec8386d05d126754cefd.svg" />
          </div>
          <span className="item-content__name">{children}</span>
        </div>
        <div className="nav-popout">
          <div className="nav-popout__triangle"> </div>
          <div className="nav-popout__item">
            <div className="popout-item__image"><img src="https://duolingo-forum-web.duolingo.com/assets/eb8006f7757ad9f998cd89b558384b26.svg" alt=""/></div>
            <span>更多资讯</span>
          </div>
          <div className="nav-popout__item">
            <div className="popout-item__image"><img src="https://duolingo-forum-web.duolingo.com/assets/15bb89c2cb236f203632cbfacc910733.svg" alt=""/></div>
            <span>更多资讯</span>
          </div>
        </div>
      </li>
  )
}
export default NavItem
