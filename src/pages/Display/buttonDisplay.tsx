import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Button from "../../components/Button/button"
import Table from "../../components/Table/table";
const ButtonDisplay = () => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(!loading)
  }
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
  const button1Code = `<Button btnType={'success'}>success</Button>
<Button btnType={'primary'}>normal</Button>
<Button btnType={'error'}>error</Button>
<Button>default</Button>
`
  const button2Code = `<Button btnType={'primary'} isLoading={true}>primary</Button>
<Button disabled={true}>default</Button>
`
  const button3Code = `<Button btnType={'link'} href={'/'}>有链接行为</Button>
<Button btnType={'none'}>无有链接行为</Button>
`
  const button4Code = `<Button btnType={'white'}>幽灵按钮</Button>
<Button btnType={'ghost'}>幽灵按钮</Button>
`
  const button5Code = `<Button size={'tiny'}>适应文本</Button>
<Button size={'middle'}>默认定宽</Button>
<Button size={'full'}>适应父容器</Button>`
  return (
    <div className={'display'}>
      <h2 className={'display-tittle'}>Button 按钮</h2>
      <p className={'display-explain'}>按钮用于开始一个即时操作。</p>
      <h3 className={'display-tittle'}>何时使用</h3>
      <p className={'display-explain'}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
      <h3 className={'display-tittle'}>代码演示</h3>
      <div className="display-card-container">
        <Card
            divider={'按钮类型'}
            explain={'按照主色分类，按钮有四种类型：成功按钮、错误按钮、主要按钮和默认按钮。'}
            code={button1Code}
        >
          <div style={{display: "flex",flexDirection: 'column'}}>
            <div  style={{marginBottom: '26px'}}>
              <Button style={{marginRight: '20px'}} btnType={'success'}>success</Button>
              <Button btnType={'primary'}>primary</Button>
            </div>
            <div>
              <Button  style={{marginRight: '20px'}}  btnType={'error'}>error</Button>
              <Button>default</Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="display-card-container">
        <Card
            divider={'按钮状态'}
            explain={'设置按钮的禁用和加载中状态'}
            code={button2Code}
        >
          <Button style={{marginRight: '20px'}} isLoading={loading} btnType={'primary'}>success</Button>
          <Button style={{marginRight: '20px'}} disabled={true}>default</Button>
          <Button size={'tiny'} onClick={handleClick}>受控</Button>
        </Card>
      </div>
      <div className="display-card-container">
        <Card
            divider={'链接按钮'}
            explain={'链接样式的按钮。链接行为需要指定目标地址。'}
            code={button3Code}
        >
          <Button btnType={'link'} href={'/'}>有链接行为</Button>
          <Button btnType={'none'}>无有链接行为</Button>
        </Card>
      </div>
      <div className="display-card-container">
        <Card
            divider={'幽灵按钮'}
            explain={'放置在有色背景上，自动应用其主色'}
            code={button4Code}
            color={'#ff7878'}
        >
          <Button style={{marginRight: '20px'}} btnType={'white'}>幽灵按钮</Button>
          <Button btnType={'ghost'}>幽灵按钮</Button>
        </Card>
      </div>
      <div className="display-card-container">
        <Card
            divider={'按钮大小'}
            explain={'按钮分三种方式获得尺寸:适应按钮文本内容，中等定宽尺寸，以及适应父容器'}
            code={button5Code}
        >
          <Button
              style={{marginRight: '20px'}}
              size={'tiny'}>
            适应文本
          </Button>
          <Button
              style={{marginRight: '20px'}}
              size={'middle'}
          >
            默认定宽
          </Button>
          <Button size={'full'}>适应父容器</Button>
        </Card>
      </div>
      <h3 className={'display-tittle'}>API</h3>
      <div className="display-table-container">
        <Table columns={columns} dataSource={dataSource}/>
      </div>

    </div>
  )
}

export default ButtonDisplay
