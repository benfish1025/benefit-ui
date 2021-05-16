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
    attribute: 'type',
    description: '弹框类型',
    type: `'success' | 'primary' | 'error'`,
    default: `'success'`,
  },
  {
    key: '2',
    attribute: 'showMessage',
    description: '显示弹框',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '3',
    attribute: 'showButton',
    description: '显示弹框中的按钮',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'tittle',
    description: '弹框标题',
    type: 'string',
    default: '——',
  },
  {
    key: '5',
    attribute: 'info',
    description: '弹框解释信息',
    type: 'string',
    default: '——',
  },
  {
    key: '6',
    attribute: 'btnText',
    description: '按钮文字',
    type: 'string',
    default: '——',
  },
  {
    key: '7',
    attribute: 'btnSize',
    description: '按钮大小',
    type: `'tiny' | 'middle' | 'full'`,
    default: `'middle'`,
  },
  {
    key: '8',
    attribute: 'style',
    description: '自定义 Button 样式',
    type: 'React.CSSProperties',
    default: '——',
  },
  {
    key: '9',
    attribute: 'onClickButton',
    description: '弹框按钮被点击时的回调',
    type: '() => void',
    default: '——',
  },
  {
    key: '10',
    attribute: 'onClose',
    description: '关闭按钮被点击时的回调',
    type: '() => void',
    default: '——',
  },
  {
    key: '11',
    attribute: 'duration',
    description: '弹框显示时常',
    type: 'number',
    default: '——',
  }
]
const MessageDisplay = () => {

  const Code1 = `<Message 
  showMessage={appear} 
  tittle={'Tittle'} 
  info={'content content'}
/>
<Message 
  type={"error"} 
  showMessage={appear2} 
  tittle={'Tittle'} 
  info={'content content'}
/>
<Message 
  type={"primary"} 
  showMessage={appear3} 
  tittle={'Tittle'} 
  info={'content content'}
/>
`
  const Code2 = `<Message 
  onClickButton={handleClick4} 
  btnText={'确认'} 
  showButton={true} 
  showMessage={appear4} 
  tittle={'回答正确'} 
  info={'一鼓作气，本单元结束后领取奖励哦！'}
/>

<Message 
  onClickButton={handleClick5} 
  btnText={'确认'} 
  showButton={true} 
  type={"error"} 
  showMessage={appear5} 
  tittle={'回答错误'} 
  info={'再接再厉，本单元结束后领取奖励哦！'}
/>

<Message 
  onClickButton={handleClick6} 
  btnText={'确认'} 
  showButton={true} 
  type={"primary"} 
  showMessage={appear6} 
  tittle={'设置成功'} 
  info={'答题习惯已保存！'}
/>
`
  const Code3 = `<Modal
  tittle={'Tittle'}
  section={'content content content content'}
  detail={'content content content content'}
  showAlert={appear7}
  alertController={handleClick7}
    >
    <div className="padding-bottom-small">
      <Button onClick={handleClick7} btnType={'primary'} size={'full'}>确认</Button>
    </div>
    <Button onClick={handleClick7} size={'full'}>取消</Button>
</Modal>
`
  const Code4 = `<Modal
  showAlert={appear8}
  alertController={handleClick8}
  >
    {cardElement}
</Modal>
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
              code={Code1}
          >

            <Message showMessage={appear} tittle={'Tittle'} info={'content content'}/>
            <Message type={"error"} showMessage={appear2} tittle={'Tittle'} info={'content content'}/>
            <Message type={"primary"} showMessage={appear3} tittle={'Tittle'} info={'content content'}/>
            <Button btnType={'success'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick}>success</Button>
            <Button btnType={'error'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick2}>error</Button>
            <Button btnType={'primary'} size={'tiny'} onClick={handleClick3}>primary</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'Banner型弹窗/显示操作按钮'}
              explain={'弹窗内显示操作按钮。'}
              code={Code2}
          >
            <Message onClickButton={handleClick4} btnText={'确认'} showButton={true} showMessage={appear4} tittle={'回答正确'} info={'一鼓作气，本单元结束后领取奖励哦！'}/>
            <Message onClickButton={handleClick5} btnText={'确认'} showButton={true} type={"error"} showMessage={appear5} tittle={'回答错误'} info={'再接再厉，本单元结束后领取奖励哦！'}/>
            <Message onClickButton={handleClick6} btnText={'确认'} showButton={true} type={"primary"} showMessage={appear6} tittle={'设置成功'} info={'答题习惯已保存！'}/>
            <Button btnType={'success'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick4}>success</Button>
            <Button btnType={'error'} style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick5}>error</Button>
            <Button btnType={'primary'} size={'tiny'} onClick={handleClick6}>primary</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'Model型弹窗'}
              explain={'经典窗口样式。'}
              code={Code3}
          >
            <Modal
                tittle={'Tittle'}
                section={'content content content content'}
                detail={'content content content content'}
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
              code={Code4}
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
