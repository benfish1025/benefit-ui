import React from 'react'
import {NavLink, Route} from "react-router-dom";
import RouteTrans from './routeTrans'

const ComponentsLayout = () => {
  return (
      <div className={'components-layout'}>
        <div className="components-layout__sidebar">
          <ul className={'sidebar'}>
            <li className={'sidebar-item-tittle'}>
              开发指南
            </li>
            <NavLink activeClassName={'sidebar-item--active'} to={'/components/start'}>
              <li className={'sidebar-item'}>
                安装
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/color'}>
              <li className={'sidebar-item'}>
                色彩搭配
              </li>
            </NavLink>
            <li className={'sidebar-item-tittle'}>
              组件
            </li>
            <li className={'sidebar-item-sign'}>
              Basic
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/button'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Button 按钮
              </li>
            </NavLink>

            <li className={'sidebar-item-sign'}>
              Navigation
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/menu'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Menu 导航菜单
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/pagination'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Pagination 分页
              </li>
            </NavLink>
            <li className={'sidebar-item-sign'}>
              Form
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/select'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Select 选择器
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/cascader'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Cascader 级联选择
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/checkbox'}>
              <li className={'sidebar-item sidebar-item--low'}>
                CheckBox 选择框
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/input'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Input 输入框
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/autocomplete'}>
              <li className={'sidebar-item sidebar-item--low'}>
                AutoComplete 自动完成
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/radio'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Radio 单选框
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/rate'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Rate 评分
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/switch'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Switch 开关
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/upload'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Upload 上传
              </li>
            </NavLink>
            <li className={'sidebar-item-sign'}>
              Data
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/popover'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Popover 气泡卡片
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/popconfirm'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Popconfirm 气泡弹窗
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/carousel'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Carousel 走马灯
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/tag'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Tag 标签
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/progress'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Progress 进度条
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/tables'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Table 表格
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/tabs'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Tabs 标签
              </li>
            </NavLink>
            <li className={'sidebar-item-sign'}>
              Notice
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/dialog'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Dialog 全局弹窗
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/loading'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Loading 加载中
              </li>
            </NavLink>
          </ul>
        </div>
        <div id={'scroll-anchor'} className={'components-layout__content'}>
          <Route path={'/components/:floor'}>
            <RouteTrans/>
          </Route>
        </div>
      </div>
  )
}

export default ComponentsLayout
