import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Message from "../../components/Message/message";
import Modal from '../../components/Modal/modal'
import Button from "../../components/Button/button";
import {ReactComponent as DemondSvg} from "../svg/demond.svg";

const columns = [
  {
    title: '参数',
    dataIndex: 'Attribute',
    key: 'Attribute',

  },
  {
    title: '说明',
    dataIndex: 'Description',
    key: 'Description'
  },
  {
    title: '类型',
    dataIndex: 'Type',
    key: 'Type'
  },{
    title: '默认值',
    dataIndex: 'Default',
    key: 'Default'
  }
];
const dataSource =  [
  {
    key: '1',
    attribute: 'btnType',
    description: '不同样式风格的按钮',
    type: `'none' | 'white' | 'ghost' | 'success' | 'primary' | 'error'| 'link' | 'default'`,
    default: `'default'`,
  },
  {
    key: '2',
    attribute: 'size',
    description: '按钮获得尺寸的方式',
    type: `'tiny' | 'middle' | 'full'`,
    default: `'middle'`,
  },
  {
    key: '3',
    attribute: 'isLoading',
    description: '是否为加载状态',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'disabled',
    description: '是否为禁用状态',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '5',
    attribute: 'href',
    description: '链接按钮的地址',
    type: 'string',
    default: '——',
  },
  {
    key: '6',
    attribute: 'onClick等原生属性',
    description: '点击按钮时的回调',
    type: 'React.MouseEventHandler',
    default: '——',
  },
  {
    key: '7',
    attribute: 'className',
    description: '自定义 Button 类名',
    type: 'string',
    default: '——',
  },
  {
    key: '8',
    attribute: 'style',
    description: '自定义 Button 样式',
    type: 'React.CSSProperties',
    default: '——',
  }
]
const MessageDisplay = () => {

  const Code1 = `
`
  const Code2 = `
`
  const Code3 = `
`
  const Code4 = `
`
  const Code5 = `
`
  const [appear, setAppear] = useState(false)

  const handleClick = () => {
    setAppear(!appear)
  }

  const [appear2, setAppear2] = useState(false)
  const handleClick2 = () => {
    setAppear2(!appear2)
  }

  const [appear3, setAppear3] = useState(false)
  const handleClick3 = () => {
    setAppear3(!appear3)
  }
  const [appear4, setAppear4] = useState(false)
  const handleClick4 = () => {
    setAppear4(!appear4)
  }
  const [appear5, setAppear5] = useState(false)
  const handleClick5 = () => {
    setAppear5(!appear5)
  }
  const [appear6, setAppear6] = useState(false)
  const handleClick6 = () => {
    setAppear6(!appear6)
  }
  const [appear7, setAppear7] = useState(false)
  const handleClick7 = () => {
    setAppear7(!appear7)
  }
  const [appear8, setAppear8] = useState(false)
  const handleClick8 = () => {
    setAppear8(!appear8)
  }
  const cardElement = (
      <div className="popover-inner-card">
        <div className="popover-inner-card__image">
          <DemondSvg/>
        </div>
        <div className="popover-inner-card__content">
          <span className={'tittle'}>宝石</span>
          <span className={'info'}>你有5块宝石</span>
          <Button size={'tiny'} btnType={'none'}>访问宝石商店</Button>
        </div>
      </div>
  )
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Dialog 全局弹窗</h2>
        <p className={'display-explain'}>全局展示操作反馈信息。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>用户进行全局操作下的子操作时提供信息展示，用户输入等交互。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'Banner型弹窗'}
              explain={'可定制三种状态。'}
              code={Code2}
          >

            <Message showMessage={appear} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Message type={"error"} showMessage={appear2} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Message type={"primary"} showMessage={appear3} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Button btnType={'success'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick}>success</Button>
            <Button btnType={'error'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick2}>error</Button>
            <Button btnType={'primary'} size={'tiny'} onClick={handleClick3}>primary</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'Banner型弹窗/显示操作按钮'}
              explain={'弹窗内显示操作按钮。'}
              code={Code3}
          >
            <Message onClickButton={handleClick4} btnText={'确认'} showButton={true} showMessage={appear4} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Message onClickButton={handleClick5} btnText={'确认'} showButton={true} type={"error"} showMessage={appear5} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Message onClickButton={handleClick6} btnText={'确认'} showButton={true} type={"primary"} showMessage={appear6} tittle={'回答正确'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Button btnType={'success'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick4}>success</Button>
            <Button btnType={'error'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick5}>error</Button>
            <Button btnType={'primary'} size={'tiny'} onClick={handleClick6}>primary</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'Model型弹窗'}
              explain={'经典窗口样式。'}
              code={Code4}
          >
            <Modal
                tittle={'此操作需要验证'}
                section={'验证邮件已发送，请检查邮箱是否正确？'}
                detail={'liben97@gmail.com'}
                showAlert={appear7}
                alertController={handleClick7}>
              <div className="padding-bottom-small">
                <Button onClick={handleClick7} btnType={'primary'} size={'full'}>确认</Button>
              </div>
              <Button onClick={handleClick7} size={'full'}>取消</Button>
            </Modal>
            <Button size={'tiny'} onClick={handleClick7}>Model型</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'Model型弹窗/自定义内容'}
              explain={'内容元素可自定义。'}
              code={Code5}
          >
            <Modal
                showAlert={appear8}
                alertController={handleClick8}>
              {cardElement}
            </Modal>
            <Button size={'tiny'} onClick={handleClick8}>Model型</Button>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default MessageDisplay
