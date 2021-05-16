import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Pagination from "../../components/Pager/pagination";
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
    attribute: 'defaultCurrent',
    description: '默认活跃的页码',
    type: `number`,
    default: `1`,
  },
  {
    key: '2',
    attribute: 'total',
    description: '条目总数',
    type: `number`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'onChange',
    description: '页码切换时的回调',
    type: '(index: number) => void',
    default: '——',
  },
  {
    key: '4',
    attribute: 'showSizeChanger',
    description: '是否显示切换单页数目的菜单',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '5',
    attribute: 'showQuickJumper',
    description: '是否显示跳转页面的输入框',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '6',
    attribute: 'simple',
    description: '应用精简模式',
    type: 'boolean',
    default: 'false',
  }
]
const Code1 = ` <Pagination total={60}/>
`
const Code2 = `<Pagination total={200} defaultCurrent={12}/>
`
const Code3 = `<Pagination total={500} showSizeChanger={true}/>
`
const Code4 = `<Pagination total={500} showQuickJumper={true}/>
`
const Code5 = `<Pagination total={200} defaultCurrent={9} simple={true}/>
`


const PagerDisplay = () => {
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Pagination 分页</h2>
        <p className={'display-explain'}>采用分页的形式分隔长数据，使数据分割在不同页面展示。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>数据列过长，或有翻页浏览需要时使用。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基础分页'}
              explain={'页面数量较少时的状态。'}
              code={Code1}
          >
            <Pagination total={60}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'更多分页'}
              explain={'页面数量较多时的状态。'}
              code={Code2}
          >
            <Pagination total={200} defaultCurrent={12}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'条目数'}
              explain={'改变每页显示条目数。'}
              code={Code3}
          >
            <Pagination total={500} showSizeChanger={true}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'页面跳转'}
              explain={'快速跳转到某一页。'}
              code={Code4}
          >
            <Pagination total={500} showQuickJumper={true}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'精简模式'}
              explain={'无修饰框版本。'}
              code={Code5}
          >
            <Pagination total={200} defaultCurrent={9} simple={true}/>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default PagerDisplay
