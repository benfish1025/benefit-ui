import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Loading from "../../components/Loading/loading";
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
    attribute: 'loading',
    description: '控制加载状态',
    type: `boolean`,
    default: `false`,
  },
  {
    key: '2',
    attribute: 'tip',
    description: '加载时显示的文案',
    type: `string`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'delay',
    description: '设置延迟加载时间，单位ms',
    type: '',
    default: '0number',
  },
  {
    key: '4',
    attribute: 'color',
    description: '自定义加载元素的颜色',
    type: 'string',
    default: '#84d8ff（淡蓝色）',
  }
]
const Code1 = `<Loading loading={true}>
`
const Code2 = `<Loading loading={loading}>
  <div style={{
    height: '180px', 
    width: '265px', 
    backgroundColor: '#f7f7f7', 
    borderRadius: '8px'
  }}>
  </div>
</Loading>
`
const Code3 = `<Loading loading={true} tip={'加载中...'}>
  <div style={{
    height: '180px', 
    width: '265px', 
    backgroundColor: '#f7f7f7', 
    borderRadius: '8px'
  }}>
  </div>
</Loading>
`
const Code4 = `<Loading  tip={'加载中...'} delay={500} loading={loadingDelay}>
  <div style={{
    height: '180px', 
    width: '265px', 
    backgroundColor: '#f7f7f7', 
    borderRadius: '8px'}}>
  </div>
</Loading>
`
const Code5 = `<Loading color={'#ff4b4b'} loading={true} tip={'加载中...'}>
  <div style={{
    height: '180px', 
    width: '265px', 
    backgroundColor: '#f7f7f7', 
    borderRadius: '8px'}}>
  </div>
</Loading>
`
const LoadingDisplay = () => {
  const [loading, setLoading] = useState(false)
  const [loadingDelay, setLoadingDelay] = useState(false)
  const handleClick = () => {
    setLoading(!loading)
  }
  const handleClickDelay = () => {
    setLoadingDelay(!loadingDelay)
  }


  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Loading 加载中</h2>
        <p className={'display-explain'}>表示加载状态的的图形标识。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>与服务器通信,需要告知用户加载状态时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'是本使用。'}
              code={Code1}
          >
            <Loading loading={true}>
            <div style={{height: '45px', width: '125px'}}>

            </div>
            </Loading>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'容器'}
              explain={'设置附着的容器，自动适应容器大小并居中。'}
              code={Code2}
          >
            <div>
              <div className="padding-bottom-small">
                <Loading loading={loading}>
                  <div style={{
                    height: '180px',
                    width: '265px',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '8px'
                  }}>
                  </div>
                </Loading>
              </div>
              <Button size={'tiny'} onClick={handleClick}>加载</Button>
            </div>

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'文案'}
              explain={'为加载状态添加自定义文案。'}
              code={Code3}
          >

            <Loading loading={true} tip={'加载中...'}>
              <div style={{
                height: '180px',
                width: '265px',
                backgroundColor: '#f7f7f7',
                borderRadius: '8px'
              }}>
              </div>
            </Loading>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'延迟'}
              explain={'适应响应时长有可能变化较大的情况，提升用户体验。'}
              code={Code4}
          >

            <div>
              <div className="padding-bottom-small">
                <Loading  tip={'加载中...'} delay={500} loading={loadingDelay}>
                  <div style={{
                    height: '180px',
                    width: '265px',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '8px'}}>
                  </div>
                </Loading>
              </div>
              <Button size={'tiny'} onClick={handleClickDelay}>延迟</Button>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义颜色'}
              explain={'修改加载状态颜色。'}
              code={Code5}
          >

            <Loading color={'#ff4b4b'} loading={true} tip={'加载中...'}>
              <div style={{
                height: '180px',
                width: '265px',
                backgroundColor: '#f7f7f7',
                borderRadius: '8px'}}>
              </div>
            </Loading>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default LoadingDisplay
