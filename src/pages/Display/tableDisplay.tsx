import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Button from '../../components/Button/button'
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
      attribute: 'dataSource',
      description: '行数据',
      type: `DataSourceProps[]`,
      default: `——`,
    },
    {
      key: '2',
      attribute: 'columns',
      description: '表头信息',
      type: `ColumnProps[]`,
      default: `——`,
    },
    {
      key: '3',
      attribute: 'rowSelection',
      description: '是否显示行CheckBox',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '4',
      attribute: 'onSelectionChange',
      description: '选中更改时的回调',
      type: '(selection: string[]) => void',
      default: '——',
    },
    {
      key: '5',
      attribute: 'isLoading',
      description: '表哥是否加载中',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '6',
      attribute: 'edit',
      description: '单元格是否可编辑',
      type: 'boolean',
      default: 'false',
    }
  ]
const dataSource2 =  [
  {
    key: '1',
    attribute: 'title',
    description: '表头文字',
    type: `string`,
    default: `——`,
  },
  {
    key: '2',
    attribute: 'key',
    description: '唯一键',
    type: `string`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'render',
    description: '此列中的自定义组件',
    type: `(...resProps: any[]) => React.ReactNode`,
    default: '——',
  },
  {
    key: '4',
    attribute: 'sort',
    description: '此列是否显示排序按钮',
    type: 'boolean',
    default: 'false',
  }
]
  const sortTableColumns = [
    {
      title: '时间',
      dataIndex: 'Date',
      key: 'Date',
      sort:true
    },
    {
      title: '名字',
      dataIndex: 'Name',
      key: 'Name'
    },
    {
      title: '地址',
      dataIndex: 'Address',
      key: 'Address'
    }
  ];
  const baseTableColumns = [
    {
      title: '时间',
      dataIndex: 'Date',
      key: 'Date',

    },
    {
      title: '名字',
      dataIndex: 'Name',
      key: 'Name'
    },
    {
      title: '地址',
      dataIndex: 'Address',
      key: 'Address'
    }
  ];
const customTableColumns = [
  {
    title: '时间',
    dataIndex: 'Date',
    key: 'Date',

  },
  {
    title: '名字',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '地址',
    dataIndex: 'Address',
    key: 'Address'
  },
  {
    title: '操作',
    dataIndex: 'custom',
    key: 'Custom',
    render: () => {
      return (
          <Button btnType={"none"} size={"tiny"}>删除</Button>
      )
    }
  }
];

  const baseTableData = [{
    key: '1',
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    key: '2',
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    key: '3',
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    key: '4',
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]
const Code1 = `const baseTableColumns = [
  {
    title: '时间',
    dataIndex: 'Date',
    key: 'Date',

  },
  {
    title: '名字',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '地址',
    dataIndex: 'Address',
    key: 'Address'
  }
]

const baseTableData = [{
  key: '1',
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  key: '2',
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  key: '3',
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  key: '4',
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}]

<Table dataSource={baseTableData} columns={baseTableColumns}/>
`
const Code2 = `<Table 
  rowSelection={true} 
  dataSource={baseTableData} 
  columns={baseTableColumns}
/>
`
const Code3 = `const sortTableColumns = [
  {
    title: '时间',
    dataIndex: 'Date',
    key: 'Date',
    sort:true
  },
  {
    title: '名字',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '地址',
    dataIndex: 'Address',
    key: 'Address'
  }
]
<Table 
  rowSelection={true} 
  dataSource={baseTableData} 
  columns={sortTableColumns}
/>
`
const Code4 = `<Table 
  isLoading={loading} 
  rowSelection={true} 
  dataSource={baseTableData} 
  columns={sortTableColumns}
/>
`
const Code5 = `<Table 
  rowSelection={true} 
  edit={true} 
  dataSource={baseTableData} 
  columns={baseTableColumns}
/>
`
const Code6 = `const customTableColumns = [
  {
    title: '时间',
    dataIndex: 'Date',
    key: 'Date',

  },
  {
    title: '名字',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '地址',
    dataIndex: 'Address',
    key: 'Address'
  },
  {
    title: '操作',
    dataIndex: 'custom',
    key: 'Custom',
    render: () => {
      return (
          <Button btnType={"none"} size={"tiny"}>删除</Button>
      )
    }
  }
]
<Table 
  rowSelection={true} 
  dataSource={baseTableData} 
  columns={customTableColumns}
/>
`
const TableDisplay = () => {
  const [loading, setLoading] = useState(true)
  const handleClickLoading = () => {
    setLoading(!loading)
  }

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Table 表格（完善中）</h2>
        <p className={'display-explain'}>展示行列数据。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>需要展示大量结构化的数据时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div style={{width: '100%'}}>
              <Table dataSource={baseTableData} columns={baseTableColumns}/>
            </div>

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'选择行'}
              explain={'显示按钮，可以对行进行选择。'}
              code={Code2}
          >
            <div style={{width: '100%'}}>
              <Table rowSelection={true} dataSource={baseTableData} columns={baseTableColumns}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'排序'}
              explain={'对列中的项目进行排序。'}
              code={Code3}
          >
            <div style={{width: '100%'}}>
              <Table rowSelection={true} dataSource={baseTableData} columns={sortTableColumns}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'加载中'}
              explain={'列表获取数据中，显示加载图像。'}
              code={Code4}
          >
            <div style={{width: '100%'}} className="flex-column-wrapper">
              <div style={{width: '100%'}} className="padding-bottom-small">
              <Table isLoading={loading} rowSelection={true} dataSource={baseTableData} columns={sortTableColumns}/>
            </div>
            <div>
              <Button onClick={handleClickLoading} size={'tiny'}>加载</Button>
            </div>

            </div>

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'可编辑'}
              explain={'双击表格单元可编辑，单击可选中，回车保存修改。'}
              code={Code5}
          >
          <div style={{width: '100%'}}>
              <Table rowSelection={true} edit={true} dataSource={baseTableData} columns={baseTableColumns}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义组件'}
              explain={'显示此列自定义组件'}
              code={Code6}
          >
            <div style={{width: '100%'}}>
              <Table rowSelection={true} dataSource={baseTableData} columns={customTableColumns}/>
            </div>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        <h3 className={'display-tittle'}>ColumnProps</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default TableDisplay
