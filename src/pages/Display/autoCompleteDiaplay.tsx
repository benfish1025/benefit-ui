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
      type: `(str: string) => DataSourceType[] | Promise<DataSourceType[]>`,
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
  const lakers = ['端午临中夏，时清日复长', '别院深深夏席清，石榴开遍透帘明', '风吹古木晴天雨，月照平沙夏夜霜', '一朝春夏改，隔夜鸟花迁', '汉苑残花别，吴江盛夏来',
    '水积春塘晚，阴交夏木繁', '征行浑与求名背，九月中旬往夏州', '忽如一夜春风来，千树万树梨花开', '晓看红湿处，花重锦官城', '待到重阳日，还来就菊花', '桃花潭水深千尺，不及汪伦送我情', '风住尘香花已尽，日晚倦梳头']
  const handleFetchData = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
        .then(res => res.json())
        .then(({ items }) => {
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
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
              <AutoComplete placeholder={'尝试键入月、夏、花、日、鸟、等字'} fetchSuggestions={handleFetch}/>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义选项'}
              explain={'可选项的内容和样式可被自定义。'}
              code={Code2}
          >
            <div className="flex-column-wrapper">

            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'获取异步数据'}
              explain={'展示的匹配数据为异步获取的。'}
              code={Code3}
          >
            <div className="flex-column-wrapper">
              <AutoComplete fetchSuggestions={handleFetchData}/>
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
