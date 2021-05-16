import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Cascader from "../../components/Cascader/cascader";
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
  },
  {
    key: '5',
    attribute: 'changeOnEnd',
    description: '是否在级联层级的最末一级被选中时变更数据',
    type: `boolean`,
    default: `false`,
  }
]
const options3 = [{
  value: '指南',
  label: '指南',
  disabled: true,
  children: [{
    value: '设计原则',
    label: '设计原则',
    children: [{
      value: '一致',
      label: '一致',
    }, {
      value: '反馈',
      label: '反馈'
    }, {
      value: '效率',
      label: '效率'
    }, {
      value: '可控',
      label: '可控'
    }]
  }, {
    value: '导航',
    label: '导航',
    children: [{
      value: '侧向导航',
      label: '侧向导航'
    }, {
      value: '顶部导航',
      label: '顶部导航'
    }]
  }]
},{
  value: '资源',
  label: '资源',
  children: [{
    value: 'Axure',
    label: 'Axure'
  }, {
    value: 'Sketch',
    label: 'Sketch'
  }, {
    value: '组件交互文档',
    label: '组件交互文档'
  }]
}]
const options = [{
  value: '指南',
  label: '指南',
  children: [{
    value: '设计原则',
    label: '设计原则',
    children: [{
      value: '一致',
      label: '一致',
    }, {
      value: '反馈',
      label: '反馈'
    }, {
      value: '效率',
      label: '效率'
    }, {
      value: '可控',
      label: '可控'
    }]
  }, {
    value: '导航',
    label: '导航',
    children: [{
      value: '侧向导航',
      label: '侧向导航'
    }, {
      value: '顶部导航',
      label: '顶部导航'
    }]
  }]
},{
  value: '资源',
  label: '资源',
  children: [{
    value: 'Axure',
    label: 'Axure'
  }, {
    value: 'Sketch',
    label: 'Sketch'
  }, {
    value: '组件交互文档',
    label: '组件交互文档'
  }]
}]
const options2 = [{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则',
    children: [{
      value: 'yizhi',
      label: '一致',
    }, {
      value: 'fankui',
      label: '反馈'
    }, {
      value: 'xiaolv',
      label: '效率'
    }, {
      value: 'kekong',
      label: '可控'
    }]
  }, {
    value: 'daohang',
    label: '导航',
    children: [{
      value: 'cexiangdaohang',
      label: '侧向导航'
    }, {
      value: 'dingbudaohang',
      label: '顶部导航'
    }]
  }]
},{
  value: 'ziyuan',
  label: '资源',
  children: [{
    value: 'axure',
    label: 'Axure'
  }, {
    value: 'sketch',
    label: 'Sketch'
  }, {
    value: 'jiaohu',
    label: '组件交互文档'
  }]
}]
const Code1 = `const options = [{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则',
    children: [{
      value: 'yizhi',
      label: '一致',
    }, {
      value: 'fankui',
      label: '反馈'
    }, {
      value: 'xiaolv',
      label: '效率'
    }, {
      value: 'kekong',
      label: '可控'
    }]
  }, {
    value: 'daohang',
    label: '导航',
    children: [{
      value: 'cexiangdaohang',
      label: '侧向导航'
    }, {
      value: 'dingbudaohang',
      label: '顶部导航'
    }]
  }]
},{
  value: 'ziyuan',
  label: '资源',
  children: [{
    value: 'axure',
    label: 'Axure'
  }, {
    value: 'sketch',
    label: 'Sketch'
  }, {
    value: 'jiaohu',
    label: '组件交互文档'
  }]
}]
<Cascader
    clearable={true}
    options={options}
    placeholder={'点击选择'}
/>
`
const Code2 = `<Cascader
    clearable={true}
    options={options3}
    placeholder={'点击选择'}
/>
`
const Code3 = `<Cascader
    clearable={true}
    changeOnEnd={true}
    options={options}
    placeholder={'点击选择'}
/>
`
const CascaderDisplay = () => {


  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Cascader 级联选择器</h2>
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
              <Cascader
                  clearable={true}
                  options={options}
                  placeholder={'点击选择'}
              />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用选项'}
              explain={'设置按钮的禁用和加载中状态'}
              code={Code2}
          >
            <div style={{width: '250px'}}>
              <Cascader
                  clearable={true}
                  options={options3}
                  placeholder={'点击选择'}
              />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'仅显示最终结果'}
              explain={'当选单命中自小层级的结果时,才会改变输入框中的值.'}
              code={Code3}
          >
            <div style={{width: '250px'}}>
              <Cascader
                  clearable={true}
                  changeOnEnd={true}
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
        <h3 className={'display-tittle'}>Options</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default CascaderDisplay
