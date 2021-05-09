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
const TableDisplay = () => {
  const [loading, setLoading] = useState(true)
  const handleClickLoading = () => {
    setLoading(!loading)
  }
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
        <h2 className={'display-tittle'}>Table 表格</h2>
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
              <Table dataSource={baseTableData} columns={baseTableColumns}></Table>
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
              <Table rowSelection={true} dataSource={baseTableData} columns={baseTableColumns}></Table>
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
              <Table rowSelection={true} dataSource={baseTableData} columns={sortTableColumns}></Table>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'加载中'}
              explain={'列表获取数据中，显示加载图像。'}
              code={Code3}
          >
            <div style={{width: '100%'}} className="flex-column-wrapper">
              <div style={{width: '100%'}} className="padding-bottom-small">
              <Table isLoading={loading} rowSelection={true} dataSource={baseTableData} columns={sortTableColumns}></Table>
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
              code={Code4}
          >
          <div style={{width: '100%'}}>
              <Table rowSelection={true} edit={true} dataSource={baseTableData} columns={baseTableColumns}></Table>
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

export default TableDisplay
