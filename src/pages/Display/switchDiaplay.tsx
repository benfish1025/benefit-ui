import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Switch from "../../components/Switch/switch";

const SwitchDisplay = () => {
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
      description: '非受控状态下活动值',
      type: `boolean`,
      default: `false`,
    },
    {
      key: '2',
      attribute: 'value',
      description: '受控状态下活动值',
      type: `boolean`,
      default: `false`,
    },
    {
      key: '3',
      attribute: 'disabled',
      description: '是否为禁用状态',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      attribute: 'thin',
      description: '窄模式',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '5',
      attribute: 'onChange',
      description: '值变化时的回调',
      type: '(value: boolean) => void',
      default: '——',
    }
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
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Switch 按钮</h2>
        <p className={'display-explain'}>能变更显示两种状态的滑块。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>用于为一个数据项切换状态，用于表示开启或关闭。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <Switch/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'文案'}
              explain={'开启或关闭时显示的提示文案。'}
              code={Code2}
          >
            <Switch defaultValue={true} activeText={'opened'} inactiveText={'closed'}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用状态'}
              explain={'设置滑块的禁用状态'}
              code={Code2}
          >
            <div className="margin-right-small">
              <Switch disabled={true}/>
            </div>
            <Switch disabled={true} defaultValue={true}/>
          </Card>
        </div>

        <div className="display-card-container">
          <Card
              divider={'大小'}
              explain={'链接样式的按钮。链接行为需要指定目标地址。'}
              code={Code3}
          >
            <div className="margin-right-small">
              <Switch defaultValue={true} thin={true}/>
            </div>
            <Switch defaultValue={true}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'样式'}
              explain={'类似按钮的开关样式。'}
              code={Code3}
          >
            <Switch inactiveText={'关注'} activeText={'已关注'} defaultValue={true} switchStyle={"button"}/>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default SwitchDisplay
