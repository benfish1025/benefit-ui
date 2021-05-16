import React from 'react'
import {ReactComponent as ComponentsSvg} from './svg/components.svg'
import {ReactComponent as BalloonSvg} from './svg/balloon.svg'
import {Link} from 'react-router-dom'
const HomeSection = () => {
  return (
      <div className={'home-section'}>
        <Link to={'/'}>
          <div className={'home-section__card'}>
            <div className="image">
              <BalloonSvg/>
            </div>
            <h4 className={'tittle'}>概览</h4>
            <p className={'info'}>概要说明</p>
          </div>
        </Link>
        <Link to={'/components'}>
        <div className={'home-section__card'}>
          <div className="image">
            <ComponentsSvg/>
          </div>
          <h4 className={'tittle'}>组件</h4>
          <p className={'info'}>查看组件库构成及用例</p>
        </div>
        </Link>
        <div className={'home-section__card'}>
          <div className="image">
            <div>{`后台业务场景/`}</div>
            <div>{`高阶组件库/`}</div>
            <div>{`数据管理方案`}</div>
            <div>{`···`}</div>
          </div>
          <h4 className={'tittle'}>Benefit Admin</h4>
          <p className={'info'}>敬请期待</p>
        </div>
      </div>
  )
}

export default HomeSection
