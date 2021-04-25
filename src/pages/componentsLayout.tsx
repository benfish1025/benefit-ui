import React from 'react'
import Menu from "../components/Menu/menu"
import MenuItem from "../components/Menu/menuItem"
import SubMenu from "../components/Menu/subMenu";
import {NavLink, Route} from "react-router-dom";
import Nav from "../components/Nav/nav";
import Card from '../components/Card/card'
import ButtonDisplay from "./Display/buttonDisplay";
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
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/zindex'}>
              <li className={'sidebar-item'}>
                层级规范
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
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/grid'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Grid 栅格
              </li>
            </NavLink>
            <li className={'sidebar-item-sign'}>
              Navigation
            </li>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/affix'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Affix 固钉
              </li>
            </NavLink>
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
                     to={'/components/slides'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Slides 轮播
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
                     to={'/components/message'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Message 全局提示
              </li>
            </NavLink>
            <NavLink activeClassName={'sidebar-item--active'}
                     to={'/components/modal'}>
              <li className={'sidebar-item sidebar-item--low'}>
                Modal 对话框
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
        <div className={'components-layout__content'}>
          <Route path={'/components/:floor'}>
            <RouteTrans/>
          </Route>
        </div>
      </div>
  )
}

export default ComponentsLayout
