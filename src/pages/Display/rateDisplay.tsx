import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Rate from "../../components/Rate/rate";
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
    attribute: 'defaultValue',
    description: '非受控状态下的默认评分',
    type: `number`,
    default: `0`,
  },
  {
    key: '2',
    attribute: 'value',
    description: '受控状态下的评分',
    type: `number`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'allowHalf',
    description: '开启半颗模式',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'allowHalf',
    description: '允许再次点击清零',
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
    attribute: 'count',
    description: '心心总数',
    type: 'number',
    default: '5',
  },
  {
    key: '7',
    attribute: 'onChange',
    description: '值改变时的回调。一颗心为数值1，半颗心为数值0.5',
    type: '(newValue: number) => void',
    default: '——',
  },
  {
    key: '8',
    attribute: 'tip',
    description: '自定义 提示文案',
    type: 'string',
    default: '——',
  }
]
const Code1 = `<Rate defaultValue={3.8}/>
`
const Code2 = `<Rate onChange={handleChange} tip={orderText} defaultValue={1.8}/>
`
const Code3 = `<Rate allowHalf={true} defaultValue={4.5}/>
`
const Code4 = `<Rate defaultValue={3.8} tip={'允许重置'}/>

<Rate allowClear={false} defaultValue={3.8} tip={'关闭重置'}/>
`
const Code5 = `<Rate allowClear={true} defaultValue={2} count={10}/>
`
const Code6 = `<Rate disabled={true} defaultValue={3.8} count={5}/>
`
const Code7 = `<Rate value={orderRate} count={5}/>
`
const RateDisplay = () => {
  const text = ['terrible', 'bad', 'normal', 'good', 'wonderful']
  const [orderRate, setOrderRate] = useState(2)
  const [orderText, setOrderText] = useState(text[orderRate - 1])
  const handleSelectNumber = (index: number) => {
    setOrderRate(index)
  }
  const handleChange = (number: number) => {
    setOrderText(text[number - 1])
  }


  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Rate 评分</h2>
        <p className={'display-explain'}>评分组件。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>录入或展示评价.</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本用法'}
              explain={'基本用法。'}
              code={Code1}
          >
            <Rate defaultValue={3.8}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'文案'}
              explain={'为评分增加文案提示。'}
              code={Code2}
          >
            <Rate onChange={handleChange} tip={orderText} defaultValue={1.8}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'半颗心'}
              explain={'支持选中半颗。'}
              code={Code3}
          >
            <Rate allowHalf={true} defaultValue={4.5}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'允许重置'}
              explain={'再次点击，重置值为0。默认开始重置许可，可设为关闭'}
              code={Code4}
          >
            <div className="flex-column-wrapper">
                <Rate defaultValue={3.8} tip={'允许重置'}/>
            </div>
            <Rate allowClear={false} defaultValue={3.8} tip={'关闭重置'}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'任意数量'}
              explain={'任意设置满分的心心数。'}
              code={Code5}
          >
            <Rate allowClear={true} defaultValue={2} count={10}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'禁用状态'}
              explain={'仅数据展示，无法进行鼠标交互。'}
              code={Code6}
          >
            <Rate disabled={true} defaultValue={3.8} count={5}/>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'受控'}
              explain={'心心状态由外部数据管理，未配置回调的情况下，点击失效。'}
              code={Code7}
          >

              <Rate value={orderRate} count={5}/>

            <Button onClick={() => handleSelectNumber(3)} style={{marginRight: '10px',marginLeft: '10px'}} size={'tiny'}>3</Button>
            <Button onClick={() => handleSelectNumber(4)} style={{marginRight: '10px'}} size={'tiny'}>4</Button>
            <Button onClick={() => handleSelectNumber(5)} style={{marginRight: '10px'}} size={'tiny'}>5</Button>


          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default RateDisplay
