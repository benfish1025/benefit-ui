import React, {ReactElement, useState, useRef, RefObject, useEffect} from 'react';
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
import CheckBoxGroupNext from './components/CheckBox/checkBoxGroupNext'
import Input from './components/Input/input'
import AutoComplete from "./components/AutoComplete/autoComplete"
import Loading from './components/Loading/loading'
import Select from './components/Select/select'
import Transition from './components/Transition/transition'
import Message from "./components/Message/message";
import Popover from "./components/Popover/popover";
// @ts-ignore
import Popconfirm from './components/Popconfirm/popconfirm'
import Rate from "./components/Rate/rate";

function App() {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
        .then(res => res.json())
        .then((data) => {
          if (data.items) {
            return data.items.slice(0, 4).map((item: any) => ({ value: item.login, ...item}))
          } else {
            return []
          }

        })
  }
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
  const defaultInfo = ['liben']
  const info = [
    {
      value: 'liben',
      label: 'liben',
      children: [
        {
          value: 'lishuangyu',
          label: 'lishuangyu'
        },
        {
          value: 'menghuacheng',
          label: 'menghuacheng',
          children: [
            {
              value: 'dedede'
            },
            {
              value: 'd'
            },
            {
              value: 'ded'
            }
          ]
        }
      ]
    },
    {
      value: 'lishuangyu',
      label: 'lishuangyu',
      children: [
        {
          value: 'li',
          label: 'lishuangyu'
        },
        {
          value: 'meng',
          label: 'menghuacheng'
        }
      ]
    },
    {
      value: 'menghuacheng',
      label: 'menghuacheng'
    }
  ]
  const infoSimple = [
    {
      value: 'liben',
      label: 'liben',
    },
    {
      value: 'lishuangyu',
      label: 'lishuangyu',
    },
    {
      value: 'menghuacheng',
      label: 'menghuacheng'
    }
  ]
  const Bbutton: ReactElement = <Button btnType={'success'} size={'tiny'}>搜索</Button>
  return (
    <div className="App">
      <Card>
        <Rate allowClear={true} defaultValue={4.2} />
      </Card>
      <Card>
        <Popconfirm detail={'第四单元 14/24'} position={'left'} visible={alert} tittle={'你好'}><span>Hi!</span></Popconfirm>
        <Popover visible={alert} position={'bottom'} content={'你好'}><span>Hi!</span></Popover>
        <Popconfirm visible={alert}  color={'#9069cd'} position={'right'} tittle={'你好'}><span>Hi!</span></Popconfirm>
        <Popover position={'right'} content={'你好'}><span>Hi!</span></Popover>
      </Card>
      <Card>
        <Button btnType={'success'}>更多资讯</Button>
        <Button btnType={'normal'} disabled={true}>探索更多</Button>
        <Button btnType={'normal'}  size={'middle'} onClick={() => setAlert(!alert) }>显示Alert!</Button>
      </Card>
      <Message
          type={'error'}
          onClickButton={alertController}
          showMessage={alert}
          btnSize={'middle'}
          tittle={'恭喜，回答正确！'}
          info={'点击确认，回答下一题'}
          btnText={'确认'}
          />
      {/*<Alert
          alertController={alertController}
          showAlert={alert}
          detail={'liben97@gmail.com'}
          tittle={'验证邮件已发送！'}
          section={'此操作需要邮件验证。请查看收件箱，然后按照提供的说明操作。邮件已发送至：'}>
        <div style={paddingStyle}>
          <Button btnType={'sub'} size={'full'}>好</Button>
        </div>
        <Button btnType={'last'} size={'full'}>查看详情</Button>
      </Alert>*/}
      <Nav>
        <NavItem>学习</NavItem>
        <NavItem>小故事</NavItem>
        <NavItem>讨论</NavItem>
      </Nav>
      <Card>
        <Select defaultValue={['liben']} placeholder={'点击选择'} options={info}/>
      </Card>
      <Loading spinning={alert} tip={'Loading'}>
        <Card>
          <Input placeholder={'请输入姓名'} error={true}/>
        </Card>
      </Loading>

      <Card>
        <AutoComplete
            placeholder="输入 Github 用户名试试"
            fetchSuggestions={handleFetch} />
      </Card>
      <Card>
        <Menu defaultIndex={'2'}>
          <MenuItem>热门</MenuItem>
          <MenuItem>最新</MenuItem>
          <MenuItem>已关注</MenuItem>
          <SubMenu tittle={'体育学院'}>
            <MenuItem>热门</MenuItem>
            <MenuItem>最新</MenuItem>
            <MenuItem>已关注</MenuItem>
          </SubMenu>
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
        <CheckBoxGroupNext defaultValue={defaultInfo} options={info} tittle={'姓名'}/>
      </Card>

      <Card>
        <Input suffix={Bbutton} addonBefore={'HTTP://'} placeholder={'请输入姓名'}/>
      </Card>
      <Card>
        <Loading/>
      </Card>
    </div>
  )
}

export default App;

App.propTypes = {

}
