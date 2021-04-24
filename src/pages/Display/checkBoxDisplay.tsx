import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Button from "../../components/Button/button";
import CheckBox from "../../components/CheckBox/checkBox";
import CheckBoxGroupNext from "../../components/CheckBox/checkBoxGroupNext";

const CheckBoxDisplay = () => {
  const [check, setCheck] = useState(false)
  const handleClick = () => {
    setCheck(!check)
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
      attribute: 'defaultChecked',
      description: '初始是否选中',
      type: `boolean`,
      default: `false`,
    },
    {
      key: '2',
      attribute: 'checked',
      description: '指定当前是否选中',
      type: `boolean`,
      default: `false`,
    },
    {
      key: '3',
      attribute: 'disabled',
      description: '失效状态',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      attribute: 'indeterminate',
      description: '设置 indeterminate 状态，只负责样式控制',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '5',
      attribute: 'onChange',
      description: '变化时回调函数',
      type: 'function(e:Event)',
      default: '——',
    }
  ]
  const dataSource2 =  [
    {
      key: '1',
      attribute: 'options',
      description: '初始是否选中',
      type: `Option[]`,
      default: `[]`,
    },
    {
      key: '2',
      attribute: 'defaultValue',
      description: '指定当前是否选中',
      type: `string[]`,
      default: `[]`,
    },
    {
      key: '3',
      attribute: 'tittle',
      description: '失效状态',
      type: 'string',
      default: '——',
    },
    {
      key: '4',
      attribute: 'onChange',
      description: '变化时回调函数',
      type: '(value: string[]) => any',
      default: '——',
    },
    {
      key: '5',
      attribute: 'className',
      description: '自定义 CheckBoxGroup 类名',
      type: 'string',
      default: '——',
    },
    {
      key: '6',
      attribute: 'style',
      description: '自定义 CheckBoxGroup 样式',
      type: 'React.CSSProperties',
      default: '——',
    }
  ]
  const optionDataSpurce = [
    {
      key: '1',
      attribute: 'value',
      description: 'CheckBox 的值',
      type: 'string',
      default: '——',
    },
    {
      key: '2',
      attribute: 'label',
      description: '显示的标签名',
      type: 'string',
      default: '——',
    },
    {
      key: '3',
      attribute: 'disabled',
      description: '是否禁用',
      type: 'boolean',
      default: '——',
    }
  ]
  const group = [
    {
      value: '嘿嘿嘿',
      label: '嘿嘿嘿'
    },
    {
      value: '嘤嘤嘤',
      label: '嘤嘤嘤'
    },
    {
      value: '哈哈哈',
      label: '哈哈哈'
    },
    {
      value: '啦啦啦',
      label: '啦啦啦'
    }
  ]
  const Code1 = `<CheckBox defaultChecked={true}>点我呀</CheckBox>
`
  const Code2 = `<CheckBox checked={true}>点不动我</CheckBox>
<CheckBox indeterminate={true}>点不动我</CheckBox>
<CheckBox checked={true} disabled={true}>点不动我</CheckBox>
<CheckBox disabled={true}>点不动我</CheckBox>
`
  const Code3 = `const [check, setCheck] = useState(false)
<div className="margin-right-small">
  <CheckBox checked={check}>又动了</CheckBox>
</div>`
  const Code4 = `const group = [
    {
      value: '嘿嘿嘿',
      label: '嘿嘿嘿'
    },
    {
      value: '嘤嘤嘤',
      label: '嘤嘤嘤'
    },
    {
      value: '哈哈哈',
      label: '哈哈哈'
    },
    {
      value: '啦啦啦',
      label: '啦啦啦'
    },
  ]
  
 <CheckBoxGroupNext tittle={'全部'} options={group} defaultValue={['嘿嘿嘿']}
`
  const Code5 = `
`
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Checkbox 多选框</h2>
        <p className={'display-explain'}>多选框。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>需要进行数据标记时使用。多个CheckBox一起使用无标记限制。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本用法'}
              explain={'标记选中/非选中两种状态'}
              code={Code1}
          >
            <CheckBox defaultChecked={true}>点我呀</CheckBox>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'状态'}
              explain={'选框可呈现的状态。'}
              code={Code2}
          >
            <span className={'margin-right-small'}>
              <CheckBox checked={true}>点不动我</CheckBox>
            </span>
            <span className={'margin-right-small'}>
              <CheckBox indeterminate={true}>点不动我</CheckBox>
            </span>
            <span className={'margin-right-small'}>
              <CheckBox checked={true} disabled={true}>点不动我</CheckBox>
            </span>
            <span className={'margin-right-small'}>
              <CheckBox disabled={true}>点不动我</CheckBox>
            </span>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'受控'}
              explain={'受控组件，由外部数据控制值。'}
              code={Code3}
          >
            <div className="margin-right-small">
              <CheckBox checked={check}>又动了</CheckBox>
            </div>
            <Button size={'tiny'} onClick={handleClick}>受控</Button>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'选框组'}
              explain={'由主选框控制的多个单选框。选框之间有联动效果。'}
              code={Code4}
          >
            <CheckBoxGroupNext tittle={'全部'} options={group} defaultValue={['嘿嘿嘿']}/>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <h3 className={'display-tittle'}>CheckBox</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        <h3 className={'display-tittle'}>CheckBoxGroup</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>
        <h3 className={'display-tittle'}>Option</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={optionDataSpurce}/>
        </div>

      </div>
  )
}

export default CheckBoxDisplay
