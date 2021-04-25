import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Message, {MessageType} from "../../components/Message/message";
import Button, {ButtonSize} from "../../components/Button/button";
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
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Message 全局提示</h2>
        <p className={'display-explain'}>全局展示操作反馈信息。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>可提供成功、警告和错误等反馈信息。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'按钮类型'}
              explain={'按照主色分类，按钮有四种类型：成功按钮、错误按钮、主要按钮和默认按钮。'}
              code={Code1}
          >

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'提示类型'}
              explain={'可定制三种状态。'}
              code={Code2}
          >
            <Message showMessage={appear}/>
            <Button style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick}>success</Button>
            <Button style={{marginRight: '10px'}} size={'tiny'} onClick={handleClick2}>error</Button>
            <Button size={'tiny'} onClick={handleClick3}>primary</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'链接按钮'}
              explain={'链接样式的按钮。链接行为需要指定目标地址。'}
              code={Code3}
          >

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'幽灵按钮'}
              explain={'放置在有色背景上，自动应用其主色'}
              code={Code4}
          >

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'按钮大小'}
              explain={'按钮分三种方式获得尺寸:适应按钮文本内容，中等定宽尺寸，以及适应父容器'}
              code={Code5}
          >

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
