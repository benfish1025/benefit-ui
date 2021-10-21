import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import AutoComplete from "../../components/AutoComplete/autoComplete";

const AutoCompleteDisplay = () => {
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
  const dataSource2 =  [
    {
      key: '1',
      attribute: 'value',
      description: '数据值',
      type: `string`,
      default: `——`,
    }
  ]
  const dataSource =  [
    {
      key: '1',
      attribute: 'fetchSuggestions',
      description: '数据获取方法',
      type: `(str: string) => DataSourceType[] | Promise`,
      default: `——`,
    },
    {
      key: '2',
      attribute: 'onSelect',
      description: '选项选中时的回调',
      type: `(item: DataSourceType) => void`,
      default: `——`,
    },
    {
      key: '3',
      attribute: 'renderOptions',
      description: '自定义选项样式渲染函数',
      type: '(item: DataSourceType) => ReactElement',
      default: '——',
    }
  ]
  const Code1 = `const handleFetch = (query: string) => {
  return poems.filter(name => name.includes(query)).map(name => ({value: name}))
}

<AutoComplete
  defaultValue={'一朝春夏改，隔夜鸟花迁'} 
  placeholder={'尝试键入月、夏、花、日、鸟等字'} 
  fetchSuggestions={handleFetch}
/>
`
  const Code2 = `const handleFetchData = (query: string) => {
  return fetch('https://api.github.com/search/users?q='+ query)
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
}

<AutoComplete placeholder={'尝试键入字母'} fetchSuggestions={handleFetchData}/>
`
  const lakers = ['黄金', '黄金别墅', '黄金增值']
  const handleFetchData = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
        .then(res => res.json())
        .then(({ items }) => {
          return items.slice(0, 6).map((item: any) => ({ value: item.login, ...item}))
        })
  }
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>AutoComplete 自动完成</h2>
        <p className={'display-explain'}>输入时的自动获取关键值数据。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>需要降低降低用户的输入成本提高体验，或较易提供匹配值时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
            <AutoComplete
                zIndex={100}
                defaultValue={'一朝春夏改，隔夜鸟花迁'}
                placeholder={'尝试键入月、夏、花、日、鸟等字'}
                fetchSuggestions={handleFetch}
            />
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'获取异步数据'}
              explain={'展示的匹配数据为异步获取的。'}
              code={Code2}
          >
            <div className="flex-column-wrapper">
              <AutoComplete placeholder={'尝试键入字母'} fetchSuggestions={handleFetchData}/>
            </div>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

        <h3 className={'display-tittle'}>DataSourceObject</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default AutoCompleteDisplay
