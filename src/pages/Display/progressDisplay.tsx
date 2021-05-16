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
    attribute: 'percent',
    description: '进度条比率',
    type: `number`,
    default: `0`,
  },
  {
    key: '2',
    attribute: 'type',
    description: '进度条样式',
    type: `'line' | 'circle'`,
    default: `'line'`,
  },
  {
    key: '3',
    attribute: 'showText',
    description: '是否显示比率文字',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'showAnimation',
    description: '比率不为100%时,是否显示加载动画',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '5',
    attribute: 'color',
    description: '自定义进度条颜色',
    type: 'string',
    default: '#1cb0f6(蓝色)',
  }
]
const Code1 = `<Progress percent={rate}/>
`
const Code2 = `<Progress showText={true} percent={rate}/>
`
const Code3 = `<Progress color={'#ff9600'} showText={true} percent={rate}/>

<Progress color={'#ff4b4b'} showText={true} percent={rate}/>

<Progress color={'#89e219'} showText={true} percent={rate}/>

<Progress color={'#9069cd'} showText={true} percent={rate}/>
`
const Code4 = `<Progress color={'#ff9600'} showText={true} showAnimation={true} percent={rate}/>

`
const Code5 = `<Progress color={'#9069cd'} showText={true} type={"circle"} percent={rate}/>
`
const ProgressDisplay = () => {


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
              code={Code2}
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
              code={Code3}
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
              code={Code4}
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
              code={Code5}
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
