import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Tabs from '../../components/Tabs/tabs'
import TabPane, {TabPaneProps} from '../../components/Tabs/tabPane'
import {ReactComponent as DemondSvg} from "../svg/demond.svg";
import Button from "../../components/Button/button";
const TabList: TabPaneProps[] = [{
  tab: '标签一',
  tabKey: '0',
  children: '标签内容'
},
  {
    tab: '标签二',
    tabKey: '1',
    children: '标签内容'
  },
  {
    tab: '标签三',
    tabKey: '2',
    children: '标签内容'
  }]
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
const TabsDisplay = () => {
  const [editLIst, setEditLIst] = useState(TabList)
  const handleEdit = (key: string) => {
    const newValue = editLIst.filter((item, index) => {
      return item.tabKey !== key
    })
    setEditLIst(newValue)
  }
  const handleClickButton = () => {
    setEditLIst(editLIst.concat({
      tab: `新标签${editLIst.length + 1.1 * Math.floor(Math.random())}`,
      tabKey: `${editLIst.length + Math.random()}`,
      children: '标签内容'
    }))
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
        <h2 className={'display-tittle'}>Button 按钮</h2>
        <p className={'display-explain'}>按钮用于开始一个即时操作。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div style={{width: '450px'}}>
              <Tabs>
                <TabPane tab={'我的'}>{cardElement}</TabPane>
                <TabPane tab={'降价课程'}>降价课程</TabPane>
                <TabPane tab={'学习中心'}>学习中心</TabPane>
                <TabPane tab={'留言区'}>留言区</TabPane>
                <TabPane tab={'学习日志'}>学习日志</TabPane>
              </Tabs>
            </div>

          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'显示边框'}
              explain={'显示边框'}
              code={Code2}
          >
            <div style={{width: '250px'}}>
              <Tabs showBorder={true}>
                <TabPane tab={'关注者'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>您还没有粉丝~</div>
                </TabPane>
                <TabPane tab={'已关注'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>寻找更多感兴趣的人吧~~</div>

                </TabPane>
              </Tabs>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'卡片样式'}
              explain={'卡片样式的标签。'}
              code={Code3}
          >
            <div style={{width: '450px'}}>
              <Tabs showBorder={true} type={'card'}>
                <TabPane tab={'我的'}>{cardElement}</TabPane>
                <TabPane tab={'降价课程'}>降价课程</TabPane>
                <TabPane tab={'学习中心'}>学习中心</TabPane>
                <TabPane tab={'留言区'}>留言区</TabPane>
                <TabPane tab={'学习日志'}>学习日志</TabPane>
              </Tabs>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'幽灵按钮'}
              explain={'放置在有色背景上，自动应用其主色'}
              code={Code4}
          >
            <div className="flex-column-left">
              <div style={{width: '550px', paddingBottom: '10px'}}>
                <Tabs onEdit={handleEdit} editable={true} showBorder={true} type={'card'}>
                  {editLIst.map((item,index) => {
                    return <TabPane
                        tab={item.tab}
                        tabKey={item.tabKey}
                    >
                      {item.children}
                    </TabPane>
                  })}
                </Tabs>
              </div>
              <Button size={"tiny"} onClick={handleClickButton}>新增标签</Button>
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

export default TabsDisplay
