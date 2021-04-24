import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import RadioGroup from "../../components/Radio/radioGroup";
import Radio from "../../components/Radio/radio";

const RadioDisplay = () => {
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
      type: `string`,
      default: `——`,
    },
    {
      key: '2',
      attribute: 'value',
      description: '受控状态下活动值',
      type: `string`,
      default: `——`,
    },
    {
      key: '3',
      attribute: 'vertical',
      description: '竖直排布模式',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      attribute: 'radioStyle',
      description: '单选框样式',
      type: `'button' | 'radio'`,
      default: `'radio'`,
    },
    {
      key: '5',
      attribute: 'onChange',
      description: '数值变化时的回调',
      type: '(value: string) => void',
      default: '——',
    }
  ]
  const dataSource2 =  [
    {
      key: '1',
      attribute: 'value',
      description: '作为标识唯一值',
      type: `string`,
      default: `——`,
    },
    {
      key: '2',
      attribute: 'index',
      description: '索引',
      type: `string`,
      default: `——`,
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
        <h2 className={'display-tittle'}>Radio 单选框</h2>
        <p className={'display-explain'}>单选框。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>在多个状态中选中单个状态，每个状态名直接可见，最利于选择的效率。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <RadioGroup>
              <Radio value={'苹果'}>苹果</Radio>
              <Radio value={'牛油果'}>牛油果</Radio>
              <Radio value={'火龙果'}>火龙果</Radio>
              <Radio value={'长生不老果'}>长生不老果</Radio>
            </RadioGroup>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'垂直排列'}
              explain={'选项垂直排列。'}
              code={Code2}
          >
            <RadioGroup vertical={true}>
              <Radio value={'苹果'}>苹果</Radio>
              <Radio value={'牛油果'}>牛油果</Radio>
              <Radio value={'火龙果'}>火龙果</Radio>
              <Radio value={'长生不老果'}>长生不老果</Radio>
            </RadioGroup>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'按钮样式'}
              explain={'显示为按钮样式'}
              code={Code3}
          >
            <RadioGroup radioStyle={'button'}>
              <Radio value={'苹果'}>苹果</Radio>
              <Radio value={'牛油果'}>牛油果</Radio>
              <Radio value={'火龙果'}>火龙果</Radio>
              <Radio value={'长生不老果'}>长生不老果</Radio>
            </RadioGroup>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'竖排按钮'}
              explain={'按钮垂直排列。'}
              code={Code4}
          >
            <div className="flex-column-wrapper">
              <RadioGroup radioStyle={'button'} vertical={true}>
                <Radio value={'苹果'}>苹果</Radio>
                <Radio value={'牛油果'}>牛油果</Radio>
                <Radio value={'火龙果'}>火龙果</Radio>
                <Radio value={'长生不老果'}>长生不老果</Radio>
              </RadioGroup>
            </div>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <h3 className={'display-tittle'}>RadioGroup</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        <h3 className={'display-tittle'}>Radio</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default RadioDisplay
