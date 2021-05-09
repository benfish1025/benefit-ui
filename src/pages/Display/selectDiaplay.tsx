import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Select from "../../components/Select/select";
const options =  [{
  value: '选项1',
  label: '黄金糕'
}, {
  value: '选项2',
  label: '双皮奶'
}, {
  value: '选项3',
  label: '蚵仔煎'
}, {
  value: '选项4',
  label: '龙须面'
}, {
  value: '选项5',
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
const SelectDisplay = () => {

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
            <Select
                options={options}
                placeholder={'点击选择'}
            />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用选择器'}
              explain={'链接样式的按钮。链接行为需要指定目标地址。'}
              code={Code3}
          >
            <div style={{width: '250px'}}>
            <Select
                disabled={true}
                options={options}
                placeholder={'点击选择'}
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
                multiple={true}
                options={options}
                placeholder={'点击选择'}
            />
            </div>
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

export default SelectDisplay
