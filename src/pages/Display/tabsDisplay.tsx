import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Tabs from '../../components/Tabs/tabs'
import TabPane, {TabPaneProps} from '../../components/Tabs/tabPane'
import {ReactComponent as DemondSvg} from "../svg/demond.svg";
import Button from "../../components/Button/button";
import {nanoid} from 'nanoid'
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
const dataSource1 =  [
  {
    key: '1',
    attribute: 'defaultIndex',
    description: '指定默认活动项的索引值。',
    type: `number`,
    default: `0`,
  },
  {
    key: '2',
    attribute: 'type',
    description: '选项卡风格,默认与卡片式两种',
    type: `'default' | 'card'`,
    default: `'default' `,
  },
  {
    key: '3',
    attribute: 'showBorder',
    description: '是否显示边框',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'onSelect',
    description: '点击菜单项触发的回调',
    type: '(selectedIndex: string) => void',
    default: '——',
  },
  {
    key: '5',
    attribute: 'editable',
    description: '选项卡是否显示关闭按钮',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '6',
    attribute: 'onEdit',
    description: '选项卡关闭时的回调',
    type: '(key: string) => void',
    default: '——',
  },
  {
    key: '7',
    attribute: 'className',
    description: '自定义 Menu 类名',
    type: 'string',
    default: '——',
  },
  {
    key: '8',
    attribute: 'style',
    description: '自定义 Menu 样式',
    type: 'React.CSSProperties',
    default: '——',
  }
]
const dataSource2 =  [
  {
    key: '1',
    attribute: 'index',
    description: '菜单项索引',
    type: `string`,
    default: `——`,
  },
  {
    key: '2',
    attribute: 'disabled',
    description: '菜单项是否被禁用',
    type: `boolean`,
    default: `false`,
  },
  {
    key: '3',
    attribute: 'className',
    description: '自定义 MenuItem 类名',
    type: 'string',
    default: '——',
  },
  {
    key: '4',
    attribute: 'style',
    description: '自定义 MenuItem 样式',
    type: 'React.CSSProperties',
    default: '——',
  }
]

const Code1 = `<Tabs>
  <TabPane tab={'个人中心'}>{cardElement}</TabPane>
  <TabPane tab={'课程专区'}>降价课程</TabPane>
  <TabPane tab={'学习反馈'}>学习中心</TabPane>
  <TabPane tab={'教师留言'}>留言区</TabPane>
  <TabPane tab={'学习日志'}>学习日志</TabPane>
</Tabs>
`
const Code2 = `<Tabs showBorder={true}>
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
`
const Code3 = `<Tabs showBorder={true} type={'card'}>
  <TabPane tab={'个人中心'}>{cardElement}</TabPane>
  <TabPane tab={'课程专区'}>降价课程</TabPane>
  <TabPane tab={'学习反馈'}>学习中心</TabPane>
  <TabPane tab={'教师留言'}>留言区</TabPane>
  <TabPane tab={'学习日志'}>学习日志</TabPane>
</Tabs>
`
const Code4 = `const handleClickButton = () => {
  setEditLIst(editLIst.concat({
    tab: \`新标签\`,
    tabKey: \`${nanoid()}\`,
    children: \`标签内容${nanoid()}\`
  }))
}

<Tabs defaultIndex={editLIst.length-1} onEdit={handleEdit} editable={true} showBorder={true} type={'card'}>
  {editLIst.map((item,index) => {
    return <TabPane
        tab={item.tab}
        tabKey={item.tabKey}
    >
      {item.children}
    </TabPane>
  })}
</Tabs>

<Button size={"tiny"} onClick={handleClickButton}>新增标签</Button>
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
      tab: `新标签`,
      tabKey: `${nanoid()}`,
      children: `标签内容${nanoid()}`
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
        <h2 className={'display-tittle'}>tabs 标签页</h2>
        <p className={'display-explain'}>展示同级折叠信息。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>方便用户切换时使用。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'基本使用。'}
              code={Code1}
          >
            <div style={{width: '450px'}}>
              <Tabs>
                <TabPane tab={'个人中心'}>{cardElement}</TabPane>
                <TabPane tab={'课程专区'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                    降价课程
                  </div>
                </TabPane>
                <TabPane tab={'学习反馈'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                    学习中心
                  </div>
                </TabPane>
                <TabPane tab={'教师留言'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                    留言区
                  </div>
                </TabPane>
                <TabPane tab={'学习日志'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                    学习日志
                  </div>
                </TabPane>
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
            <div style={{width: '470px'}}>
              <Tabs showBorder={true} type={'card'}>
                <TabPane tab={'个人中心'}>{cardElement}</TabPane>
                <TabPane tab={'课程专区'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                  降价课程
                  </div>
                </TabPane>
                <TabPane tab={'学习反馈'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                  学习中心
                  </div>
                </TabPane>
                <TabPane tab={'教师留言'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                  留言区
                  </div>
                </TabPane>
                <TabPane tab={'学习日志'}>
                  <div style={{
                    padding: "20px",
                    textAlign: 'center'
                  }}>
                  学习日志
                  </div>
                </TabPane>
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
              <div style={{ minWidth: '470px',width: 'auto', paddingBottom: '10px'}}>
                <Tabs defaultIndex={editLIst.length-1} onEdit={handleEdit} editable={true} showBorder={true} type={'card'}>
                  {editLIst.map((item,index) => {
                    return <TabPane
                        tab={item.tab}
                        tabKey={item.tabKey}
                    >
                      <div style={{
                        padding: "20px",
                        textAlign: 'center'
                      }}>
                      {item.children}
                      </div>
                    </TabPane>
                  })}
                </Tabs>
              </div>
              <Button size={"tiny"} onClick={handleClickButton}>新增标签</Button>
            </div>
          </Card>
        </div>

        <h3 className={'display-tittle'}>API</h3>
        <h3 className={'display-tittle'}>Tabs</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource1}/>
        </div>
        <h3 className={'display-tittle'}>TabPane</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>

      </div>
  )
}

export default TabsDisplay
