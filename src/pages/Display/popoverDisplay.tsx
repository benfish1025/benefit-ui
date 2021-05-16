import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Popover from "../../components/Popover/popover";
import Button from "../../components/Button/button";
import {ReactComponent as DemondSvg} from '../svg/demond.svg'
import {ReactComponent as DemondItemSvg} from '../svg/demond-item.svg'
import {ReactComponent as CompleteSvg} from '../svg/complete.svg'
import {ReactComponent as WraningSvg} from '../svg/wraning.svg'



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
    attribute: 'visible',
    description: '受控时，控制显示',
    type: `boolean`,
    default: `——`,
  },
  {
    key: '2',
    attribute: 'content',
    description: '卡片内容',
    type: `string | React.ReactNode`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'position',
    description: '卡片弹出位置',
    type: `'top' | 'left' | 'right' | 'bottom'`,
    default: `'top'`,
  },
  {
    key: '4',
    attribute: 'color',
    description: '自定义颜色',
    type: 'string',
    default: '——',
  },
  {
    key: '5',
    attribute: 'showAnimation',
    description: '是否显示弹出动画',
    type: 'boolean',
    default: 'false',
  }
]
const Code1 = `<Popover content={'采集的动作'}>
    <span className={'pop-anchor'}>采采</span>
  </Popover>
  <Popover content={'苍耳，可食用'}>
    <span className={'pop-anchor'}>卷耳</span>
  </Popover>，不盈顷筐。嗟我怀人，<Popover content={'放置'}>
  <span className={'pop-anchor'}>寘</span>
</Popover>彼<Popover content={'大路'}>
  <span className={'pop-anchor'}>周行</span>
</Popover>。
`
const Code2 = `<div className="margin-right-large">
  <Popover content={'Top!'}>
    <span className={'pop-anchor'}>上</span>
  </Popover>
</div>
<div className="margin-right-large">
  <Popover zIndex={50} position={'right'} content={'Right!'}>
    <span className={'pop-anchor'}>右</span>
  </Popover>
</div>
<div className="margin-right-large">
  <Popover position={'bottom'} content={'Bottom!'}>
    <span className={'pop-anchor'}>下</span>
  </Popover>
</div>
<Popover position={'left'} content={'Left!'}>
  <span className={'pop-anchor'}>左</span>
</Popover>
`
const Code3 = `<Popover bgColor={'#ffffff'} content={cardElement}>
  <DemondItemSvg/>
</Popover>
`
const Code4 = `<Popover
    content={'不归我管了！'}
    visible={visible}
    dark={true}
>
  <Button
      onClick={handleClick}
      size={'tiny'}
  >
    受控
  </Button>
</Popover>
`

const PopoverDisplay = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }
  const cardElement = (
      <div className="popover-inner-card">
        <div className="popover-inner-card__image">
          <DemondSvg/>
        </div>
        <div className="popover-inner-card__content">
          <span className={'tittle'}>宝石</span>
          <span className={'info'}>你有5块宝石</span>
          <Button size={'tiny'} btnType={'none'}>访问宝石商店</Button>
        </div>
      </div>
  )

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Popover 气泡卡片</h2>
        <p className={'display-explain'}>触发时弹出卡片浮层。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>提示与触发锚点相关的信息。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本用法'}
              explain={'基本用法，鼠标移入触发卡片弹出。'}
              code={Code1}
          >
            <Popover content={'采集的动作'}>
              <span className={'pop-anchor'}>采采</span>
            </Popover>
            <Popover content={'苍耳，可食用'}>
              <span className={'pop-anchor'}>卷耳</span>
            </Popover>，不盈顷筐。嗟我怀人，<Popover content={'放置'}>
            <span className={'pop-anchor'}>寘</span>
          </Popover>彼<Popover content={'大路'}>
            <span className={'pop-anchor'}>周行</span>
          </Popover>。
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'弹出位置'}
              explain={'卡片可从上、右、下、左四个方位弹出。'}
              code={Code2}
          >
            <div className="margin-right-large">
              <Popover content={'Top!'}>
                <span className={'pop-anchor'}>上</span>
              </Popover>
            </div>
            <div className="margin-right-large">
              <Popover zIndex={50} position={'right'} content={'Right!'}>
                <span className={'pop-anchor'}>右</span>
              </Popover>
            </div>
            <div className="margin-right-large">
              <Popover position={'bottom'} content={'Bottom!'}>
                <span className={'pop-anchor'}>下</span>
              </Popover>
            </div>
            <Popover position={'left'} content={'Left!'}>
              <span className={'pop-anchor'}>左</span>
            </Popover>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义'}
              explain={'自定义卡片子元素。'}
              code={Code3}
          >
            <Popover bgColor={'#ffffff'} content={cardElement}>
              <DemondItemSvg/>
            </Popover>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义颜色/取消动画'}
              explain={'用户自定义卡片颜色。可取消卡片弹出时的动画。。'}
              code={Code3}
          >
            <div className="margin-right-large">
              <Popover showAnimation={false} bgColor={'#58cc02'} content={'您已完成本节任务'}>
                <CompleteSvg/>
              </Popover>
            </div>
            <Popover showAnimation={false} bgColor={'#ff9600'} content={'订阅已开启'}>
              <WraningSvg/>
            </Popover>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'受控'}
              explain={'卡片的弹出交由外部状态管理。'}
              code={Code4}
          >
            <Popover
                content={'不归我管了！'}
                visible={visible}
                dark={true}
            >
              <Button
                  onClick={handleClick}
                  size={'tiny'}
              >
                受控
              </Button>
            </Popover>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default PopoverDisplay
