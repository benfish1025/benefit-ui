import React from 'react'
import {ReactComponent as Phone} from './svg/Phone.svg'
import {ReactComponent as LinkedIn} from './svg/LinkedIn.svg'
import {ReactComponent as WeChat} from './svg/WeChat.svg'
import {ReactComponent as Mail} from './svg/Mail.svg'

const HomeFooter = () => {
  return (
      <footer className={'home-footer'}>
        <div className={'home-footer__column'}>
          <h5 className={'home-footer__tittle'}>友情链接</h5>
          <a className={'home-footer__link'} href="https://madewithreactjs.com/" target={'_blank'}>Made With ReactJS</a>
          <a className={'home-footer__link'} href="http://alloyteam.github.io/CodeGuide/" target={'_blank'}>Code Guide by @AlloyTeam</a>
          <a className={'home-footer__link'} href="https://www.duolingo.com/" target={'_blank'}>Duolingo</a>
          <a className={'home-footer__link'} href="https://www.internetingishard.com/" target={'_blank'}>InternetingIsHard</a>
        </div>
        <div className={'home-footer__column home-footer__column--work'}>

        </div>
        <div className={'home-footer__column'}>
          <h5 className={'home-footer__tittle'}>为作者提供工作机会:</h5>
          <div className={'home-footer__message'}>
            <Phone/>
            <span>15623888936</span>
          </div>
          <div className={'home-footer__message'}>
            <Mail/>
            <span>liben97@gmail.com</span>
          </div>
          <div className={'home-footer__message'}>
            <WeChat/>
            <span>liben97</span>
          </div>
        </div>
      </footer>
  )
}

export default HomeFooter
