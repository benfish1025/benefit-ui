import React from 'react'
import HomeBackground from './homeBackground'
import HomeSection from './homeSection'
import HomeFooter from './homeFooter'
import {ReactComponent as Logo} from '../benefit-ui.svg'
import {ReactComponent as GitHub} from './svg/Gmail.svg'
import ScrollToTop from "./scrollToTOP";
import {
  Redirect,
  BrowserRouter as Router,
  NavLink,
    Link,
  Route,
useLocation} from 'react-router-dom'
import ComponentsLayout from "./componentsLayout";

const HomeLayout = () => {
  return (
      <>
      <Router>
        <div className={'hero-nav'}>
          <div className="hero-nav__logo">
            <Link to={'/'}>
              <Logo/>
            </Link>
          </div>
          <div className={'hero-nav__blank'}>

          </div>
          <div className={'hero-nav__links'}>
            <NavLink
                exact
                to={'/'}
                activeClassName={'selected'}
            >
              概览
            </NavLink>
            <NavLink
                to={'/components'}
                activeClassName={'selected'}
            >
              组件
            </NavLink>
          </div>
          <div className="hero-nav__icon">
            <a href="https://github.com/benfish1025/benefit-ui" target={"_blank"}><GitHub/></a>
          </div>

        </div>

          <ScrollToTop>
          <Route exact={true} path={'/'}>
            <div className="hero-route-wrapper">
              <div className="hero-route-wrapper--scroll">
                <HomeBackground/>
                <HomeSection/>
                <HomeFooter/>
              </div>

            </div>
          </Route>
          <Route path={'/components'}>
            <Redirect to={'/components/start'}/>
            <ComponentsLayout/>
          </Route>
          </ScrollToTop>

      </Router>
      </>
  )
}

export default HomeLayout
