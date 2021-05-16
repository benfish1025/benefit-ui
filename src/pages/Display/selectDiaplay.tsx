import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Select from "../../components/Select/select";
const options =  [{
  value: '黄金糕',
  label: '黄金糕'
}, {
  value: '双皮奶',
  label: '双皮奶'
}, {
  value: '蚵仔煎',
  label: '蚵仔煎'
}, {
  value: '龙须面',
  label: '龙须面'
}, {
  value: '北京烤鸭',
  label: '北京烤鸭'
}
]

const options2 =  [{
  value: '黄金糕',
  label: '黄金糕'
}, {
  value: '双皮奶',
  label: '双皮奶',
  disabled: true
}, {
  value: '蚵仔煎',
  label: '蚵仔煎'
}, {
  value: '龙须面',
  label: '龙须面'
}, {
  value: '北京烤鸭',
  label: '北京烤鸭'
}
]
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
    attribute: 'options',
    description: '列表信息数组',
    type: `OptionProps[]`,
    default: `——`,
  },
  {
    key: '2',
    attribute: 'defaultValue',
    description: '默认选中的列表项，单选数组元素为1，多选为任意数量',
    type: `string[]`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'placeholder',
    description: '选框提示信息',
    type: 'string',
    default: '——',
  },
  {
    key: '4',
    attribute: 'clearable',
    description: '是否显示清楚按钮',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '5',
    attribute: 'disabled',
    description: '禁用选框',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '6',
    attribute: 'multiple',
    description: '是否为多选',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '7',
    attribute: 'onChange',
    description: '选中项变化时的回调',
    type: '(selectedValue?: string, selectedValues?: string[]) => void',
    default: '——',
  },
  {
    key: '8',
    attribute: 'onVisible',
    description: '下拉菜单展示时的回调',
    type: '(visible: boolean) => void',
    default: '——',
  },
  {
    key: '9',
    attribute: 'zIndex',
    description: '调整选框的z-index层级',
    type: 'number',
    default: '10',
  },
  {
    key: '10',
    attribute: 'changeOnEnd',
    description: '多选时，只在多选层级为最后一级时，允许完成选择',
    type: 'boolean',
    default: 'false',
  }
]
const dataSource2 =  [
  {
    key: '1',
    attribute: 'key',
    description: '唯一键',
    type: 'number',
    default: `——`,
  },
  {
    key: '2',
    attribute: 'value',
    description: '选项的对应值',
    type: `string`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'label',
    description: '显示的选项标签文字',
    type: `string`,
    default: `——`,
  },
  {
    key: '4',
    attribute: 'disabled',
    description: '是否禁用',
    type: `boolean`,
    default: `false`,
  }
]
const Code1 = `<Select
    defaultValue={['龙须面']}
    zIndex={100}
    options={options}
    placeholder={'点击选择'}
/>
`
const Code2 = `<Select
    defaultValue={['黄金糕']}
    zIndex={80}
    clearable={true}
    options={options2}
    placeholder={'点击选择'}
/>
`
const Code3 = `<Select
    disabled={true}
    options={options}
    placeholder={'disabled'}
/>
`
const Code4 = `<Select
    clearable={true}
    multiple={true}
    options={options}
    placeholder={'点击选择'}
/>
`

const SelectDisplay = () => {


  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Select 选择器</h2>
        <p className={'display-explain'}>当选项过多时，使用下拉菜单展示并选择内容。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>在用户录入信息的场景中,当需要在选项队列中进行选取信息时。选择器比多选（单选）框更加节约空间。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div style={{width: '250px'}}>
              <Select
                  defaultValue={['龙须面']}
                  zIndex={100}
                  options={options}
                  placeholder={'点击选择'}
              />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用选项/清空按钮'}
              explain={'下拉选项可禁用。自定义显示清空按钮。'}
              code={Code2}
          >
            <div style={{width: '250px'}}>
            <Select
                defaultValue={['黄金糕']}
                zIndex={80}
                clearable={true}
                options={options2}
                placeholder={'点击选择'}
            />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用选择器'}
              explain={'选择器的禁用状态。'}
              code={Code3}
          >
            <div style={{width: '250px'}}>
            <Select
                disabled={true}
                options={options}
                placeholder={'disabled'}
            />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'多选'}
              explain={'放置在有色背景上，自动应用其主色'}
              code={Code4}
          >
            <div style={{width: '250px'}}>
            <Select
                clearable={true}
                multiple={true}
                options={options}
                placeholder={'点击选择'}
            />
            </div>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        <h3 className={'display-tittle'}>Option</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default SelectDisplay
