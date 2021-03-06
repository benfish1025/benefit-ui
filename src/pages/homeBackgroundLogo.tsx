import React from "react";
import {ReactComponent as ColorLogo} from "../logo-text.svg";

const HomeBackgroundLogo = () => {
  return (
      <>
        <div className="home-background__logo">
          <ColorLogo/>
        </div>
        <div className={'home-background__slogan'}>
          <p>基于React17构建，支持TS类型系统，可爱灵活强大，多邻国风格的组件库</p>
        </div>
      </>
)
}

export default HomeBackgroundLogo
