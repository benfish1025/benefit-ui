import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Progress from "../../components/Progress/progress";

import Button from "../../components/Button/button";
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
const ProgressDisplay = () => {

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
  const [rate, setRate] = useState(30)
  const handleReduce = () => {
    setRate(rate - 10)
  }
  const handleAdd = () => {
    setRate(rate + 10)
  }
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Progress 进度条</h2>
        <p className={'display-explain'}>按百分比展示过程进度。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>当操作需要消耗较大时长，或需要告知用户进度状态时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
              <div className="padding-bottom-small">
                <Progress percent={rate}/>
              </div>
              <div>
                <Button style={{marginRight: '5px'}} size={"tiny"} onClick={handleAdd}>加</Button>
                <Button size={"tiny"} onClick={handleReduce}>减</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'文字提示'}
              explain={'显示百分比的文字提示。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
              <div className="padding-bottom-small">
                <Progress showText={true} percent={rate}/>
              </div>
              <div>
                <Button style={{marginRight: '5px'}} size={"tiny"} onClick={handleAdd}>加</Button>
                <Button size={"tiny"} onClick={handleReduce}>减</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义颜色'}
              explain={'采用用户自定义颜色。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
              <div className="padding-bottom-small">
                <Progress color={'#ff9600'} showText={true} percent={rate}/>
              </div>
              <div className="padding-bottom-small">
                <Progress color={'#ff4b4b'} showText={true} percent={rate}/>
              </div>
              <div className="padding-bottom-small">
                <Progress color={'#89e219'} showText={true} percent={rate}/>
              </div>
              <div className="padding-bottom-small">
                <Progress color={'#9069cd'} showText={true} percent={rate}/>
              </div>
              <div>
                <Button style={{marginRight: '5px'}} size={"tiny"} onClick={handleAdd}>加</Button>
                <Button size={"tiny"} onClick={handleReduce}>减</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'动画'}
              explain={'使用动画显示进度条运行中的状态。'}
              code={Code1}
          >
            <div className="flex-column-wrapper">
              <div className="padding-bottom-small">
                <Progress color={'#ff9600'} showText={true} showAnimation={true} percent={rate}/>
              </div>
              <div>
                <Button style={{marginRight: '5px'}} size={"tiny"} onClick={handleAdd}>加</Button>
                <Button size={"tiny"} onClick={handleReduce}>减</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="display-card-container">
          <Card
              divider={'圆形'}
              explain={'圆形的进度条。'}
              code={Code2}
          >
            <div className="flex-column-wrapper">
              <div className="padding-bottom-small">
                <Progress color={'#9069cd'} showText={true} type={"circle"} percent={rate}/>
              </div>
              <div>
                <Button style={{marginRight: '5px'}} size={"tiny"} onClick={handleAdd}>加</Button>
                <Button size={"tiny"} onClick={handleReduce}>减</Button>
              </div>
            </div>
          </Card>
        </div>


        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default ProgressDisplay
