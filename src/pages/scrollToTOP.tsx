import React, {useEffect} from "react";
import {withRouter, useLocation} from 'react-router-dom'

const ScrollToTop: React.FC = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    console.log(location)
    window.scrollTo(0,0)
    if (location.pathname.includes('components')) {
      const anchor = document.getElementById('scroll-anchor')
      if (anchor) {
        anchor.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        })
      }
    }
  },[location])
  return (
      <>
        {children}
      </>
  )
}
export default withRouter(ScrollToTop)
