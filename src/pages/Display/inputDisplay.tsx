import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Input from '../../components/Input/input'
import {ReactComponent as SearchSvg} from '../svg/search.svg'
import Button from "../../components/Button/button";

const InputDisplay = () => {
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
      attribute: 'defaultValue',
      description: '非受控的输入框内容',
      type: `string`,
      default: `——`
    },
    {
      key: '2',
      attribute: 'value',
      description: '受控的输入框内容',
      type: `string`,
      default: `——`,
    },
    {
      key: '3',
      attribute: 'placeholder',
      description: '输入框占位符',
      type: 'string',
      default: '——',
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
      attribute: 'error',
      description: '显示错误状态',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '6',
      attribute: 'thin',
      description: '窄模式',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '7',
      attribute: 'readonly',
      description: '是否为只读状态',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '8',
      attribute: 'onChange',
      description: '输入内容变化时的回调',
      type: 'React.ChangeEventHandler',
      default: '——',
    },
    {
      key: '9',
      attribute: 'onKeyDown',
      description: '特定键响应后的回调',
      type: 'React.KeyboardEventHandler',
      default: '——',
    },
    {
      key: '10',
      attribute: 'onPressEnter',
      description: 'Enter 键响应后的回调',
      type: 'React.KeyboardEventHandler',
      default: '——',
    },
    {
      key: '11',
      attribute: 'onFocus',
      description: '获得焦点后的回调',
      type: 'React.FocusEventHandler',
      default: '——',
    },
    {
      key: '12',
      attribute: 'onBlur',
      description: '失去焦点后的回调',
      type: 'React.FocusEventHandler',
      default: '——',
    },
    {
      key: '13',
      attribute: 'addonBefore',
      description: '前缀',
      type: 'string | ReactElement',
      default: '——',
    },
    {
      key: '14',
      attribute: 'addonAfter',
      description: '后缀',
      type: 'string | ReactElement',
      default: '——',
    },
    {
      key: '15',
      attribute: 'prefix',
      description: '前置',
      type: 'string | ReactElement',
      default: '——',
    },
    {
      key: '16',
      attribute: 'suffix',
      description: '后置',
      type: 'string | ReactElement',
      default: '——',
    },
    {
      key: '17',
      attribute: 'style',
      description: '自定义 Button 样式',
      type: 'React.CSSProperties',
      default: '——',
    },
    {
      key: '18',
      attribute: 'className',
      description: '自定义 Button 类名',
      type: 'string',
      default: '——',
    },
  ]
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
  const searchSvg = (
    <div style={{margin: '0 20px'}}>
      <SearchSvg/>
    </div>
  )
  const searchButton = <Button btnType={'success'} size={'tiny'}>搜索</Button>
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Input 输入框</h2>
        <p className={'display-explain'}>通过鼠标或键盘输入内容。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>需要用户输入表单域内容时。可组合布局，应对如搜索等较复杂场景。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
              <Input placeholder={'说点什么？除了我的身材 :）'}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'状态'}
              explain={'输入框有两种非正常态，错误和禁用。'}
              code={Code5}
          >
            <div className="flex-column-wrapper">
              <div className={'padding-bottom-small'}>
                <Input placeholder={'Error'} error={true}/>
              </div>
              <Input placeholder={'disabled'} disabled={true}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'前置/后置文本'}
              explain={'在输入框前后设置文本'}
              code={Code2}
          >
            <div className="flex-column-wrapper">
              <div className={'padding-bottom-small'}>
                <Input placeholder={'google'} addonBefore={'http://'} addonAfter={'.com'}/>
              </div>
              <Input placeholder={'当太空人'} addonBefore={'我的梦想是'}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'前置/后置图标'}
              explain={'在输入框前后设置图标。'}
              code={Code3}
          >
            <div className="flex-column-wrapper">
              <Input placeholder={'搜索'} addonAfter={searchSvg}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'前置/后置组件'}
              explain={'在输入框前后设置其他组件。'}
              code={Code4}
          >
            <div className="flex-column-wrapper">
              <Input placeholder={'输入关键字'} addonAfter={searchButton}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'输入框大小'}
              explain={'输入框有两种大小供选择，宽型和窄型。'}
              code={Code5}
          >
            <div className="flex-column-wrapper">
              <div className={'padding-bottom-small'}>
                <Input placeholder={'thin'} thin={true}/>
              </div>
              <Input placeholder={'default'}/>
            </div>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default InputDisplay
