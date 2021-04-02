import React, { useState } from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Nav from './components/Nav/nav'
import NavItem from './components/Nav/navItem'
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu"
import Switch from './components/Switch/switch'
import CheckBox from './components/CheckBox/checkBox'
import Card from './components/Card/card'
import Line from './components/Line/line'
import CheckBoxGroup from './components/CheckBox/checkBoxGroup'

function App() {
  const paddingStyle ={
      paddingBottom: 10
  }
  const [alert, setAlert] = useState(false)
  const alertController = () => {
    setAlert(!alert)
  }
  const logSwitchValue = (value: boolean): void => {
    console.log('switch to', value)
  }
  const info = [
    {
      value: 'liben',
      label: 'liben'
    },
    {
      value: 'lishuangyu',
      label: 'lishuangyu'
    },
    {
      value: 'menghuacheng',
      label: 'menghuacheng'
    }
  ]
  return (
    <div className="App">
      <Alert
          alertController={alertController}
          showAlert={alert}
          detail={'liben97@gmail.com'}
          tittle={'验证邮件已发送！'}
          section={'此操作需要邮件验证。请查看收件箱，然后按照提供的说明操作。邮件已发送至：'}>
          <div style={paddingStyle}>
            <Button btnType={'sub'} size={'full'}>好</Button>
          </div>
          <Button btnType={'last'} size={'full'}>查看详情</Button>
      </Alert>
      <Nav>
        <NavItem>学习</NavItem>
        <NavItem>小故事</NavItem>
        <NavItem>讨论</NavItem>
      </Nav>
      <Card>
        <Button btnType={'last'}>更多资讯</Button>
        <Button btnType={'sub'} disabled={true}>探索更多</Button>
        <Button btnType={'primary'}  size={'normal'} onClick={() => setAlert(!alert) }>显示Alert!</Button>
      </Card>
      <Card>
        <Menu defaultIndex={'2'}>
          <MenuItem>热门</MenuItem>
          <MenuItem>最新</MenuItem>
          <MenuItem>已关注</MenuItem>
        </Menu>
      </Card>
      <Card>
        <Menu defaultIndex={'2'} mode={'vertical'}>
          <MenuItem>热门</MenuItem>
          <MenuItem>最新</MenuItem>
          <SubMenu tittle={'体育学院'}>
            <MenuItem>热门</MenuItem>
            <MenuItem>最新</MenuItem>
            <MenuItem>已关注</MenuItem>
          </SubMenu>
          <MenuItem>已关注</MenuItem>
        </Menu>
      </Card>
      <Card>
        <Switch onChange={logSwitchValue}/>
      </Card>
      <Card>
        <CheckBox disabled>CheckBox</CheckBox>
        <Line/>
        <CheckBox disabled defaultChecked={true}>CheckBox</CheckBox>
        <Line/>
        <CheckBox defaultChecked={false}>CheckBox</CheckBox>
        <Line/>
        <CheckBox indeterminate={true}>CheckBox</CheckBox>
      </Card>
      <Card>
        <CheckBoxGroup options={info} tittle={'姓名'}/>
      </Card>
    </div>
  )
}

export default App;

App.propTypes = {

}
