import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Carousel from "../../components/Carousel/carousel";
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
    attribute: 'autoplay',
    description: '是否自动播放',
    type: `boolean`,
    default: `false`,
  },
  {
    key: '2',
    attribute: 'interval',
    description: '自动播放间隔(/ms)',
    type: `number`,
    default: `3000`,
  },
  {
    key: '3',
    attribute: 'defaultIndex',
    description: '默认显示第几张',
    type: 'number',
    default: '1',
  },
  {
    key: '4',
    attribute: 'dot',
    description: '是否显示指示器',
    type: `boolean`,
    default: `true`,
  },
  {
    key: '5',
    attribute: 'control',
    description: '是否显示左右滑动控制器',
    type: 'boolean',
    default: 'true',
  }
]
const CarouseCard = ({children}: {children: React.ReactNode}) => {
  return (
      <div style={{
        width: '550px',
        height: '300px',
        lineHeight: '300px',
        textAlign: 'center',
        backgroundColor: '#2b70c9',
        color: '#ffffff',
        fontSize: '2rem'
      }}>{children}</div>
  )
}
const Code1 = `const CarouseCard = ({children}: {children: React.ReactNode}) => {
  return (
      <div style={{
        width: '550px',
        height: '300px',
        lineHeight: '300px',
        textAlign: 'center',
        backgroundColor: '#2b70c9',
        color: '#ffffff',
        fontSize: '2rem'
      }}>{children}</div>
  )
}

<Carousel>
  <CarouseCard>1</CarouseCard>
  <CarouseCard>2</CarouseCard>
  <CarouseCard>3</CarouseCard>
  <CarouseCard>4</CarouseCard>
  <CarouseCard>5</CarouseCard>
  <CarouseCard>6</CarouseCard>
</Carousel>
`
const Code2 = `const CarouseCard = ({children}: {children: React.ReactNode}) => {
  return (
      <div style={{
        width: '550px',
        height: '300px',
        lineHeight: '300px',
        textAlign: 'center',
        backgroundColor: '#2b70c9',
        color: '#ffffff',
        fontSize: '2rem'
      }}>{children}</div>
  )
}

<Carousel autoplay={true} interval={3000}>
  <CarouseCard>1</CarouseCard>
  <CarouseCard>2</CarouseCard>
  <CarouseCard>3</CarouseCard>
  <CarouseCard>4</CarouseCard>
  <CarouseCard>5</CarouseCard>
  <CarouseCard>6</CarouseCard>
</Carousel>
`

const CarouselDisplay = () => {


  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Carousel 走马灯</h2>
        <p className={'display-explain'}>占据页面的固定空间依时序展示信息。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>元素需要一定空间占用，并且数量较多时。注意，事实证明轮播图的信息展示效率较低，重要信息推荐小尺寸平铺展示。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'在跑马灯组件中插入子元素,自动获取子元素宽度。'}
              code={Code1}
          >
            <Carousel>
              <CarouseCard>1</CarouseCard>
              <CarouseCard>2</CarouseCard>
              <CarouseCard>3</CarouseCard>
              <CarouseCard>4</CarouseCard>
              <CarouseCard>5</CarouseCard>
              <CarouseCard>6</CarouseCard>
            </Carousel>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自动播放'}
              explain={'启用自动播放并设置循环间隔.'}
              code={Code2}
          >
            <Carousel autoplay={true} interval={3000}>
              <CarouseCard>1</CarouseCard>
              <CarouseCard>2</CarouseCard>
              <CarouseCard>3</CarouseCard>
              <CarouseCard>4</CarouseCard>
              <CarouseCard>5</CarouseCard>
              <CarouseCard>6</CarouseCard>
            </Carousel>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default CarouselDisplay
