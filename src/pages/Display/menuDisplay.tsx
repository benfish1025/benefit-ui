import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import MenuItem from '../../components/Menu/menuItem'
import Menu from '../../components/Menu/menu'
import SubMenu from '../../components/Menu/subMenu'


const MenuDisplay = () => {
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
      description: '指定默认活动菜单项的索引值。索引值内部自动生成',
      type: `string`,
      default: `0`,
    },
    {
      key: '2',
      attribute: 'mode',
      description: '菜单排列方式，分水平和垂直两种',
      type: `'horizontal' | 'vertical'`,
      default: `'horizontal'`,
    },
    {
      key: '3',
      attribute: 'defaultOpenSubMenus',
      description: '默认展开的菜单项，仅在垂直模式下生效',
      type: 'string[]',
      default: '[]',
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
      attribute: 'className',
      description: '自定义 Menu 类名',
      type: 'string',
      default: '——',
    },
    {
      key: '6',
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
  const dataSource3 =  [
    {
      key: '1',
      attribute: 'tabKey',
      description: '唯一键',
      type: `string`,
      default: `——`,
    },
    {
      key: '2',
      attribute: 'tab',
      description: '卡片标签的名称',
      type: `string`,
      default: `——`,
    },
    {
      key: '3',
      attribute: 'index',
      description: '卡片索引',
      type: 'number',
      default: '——',
    }
  ]

  const Code1 = `<Menu>
  <MenuItem>学校概况</MenuItem>
  <MenuItem>院系设置</MenuItem>
  <MenuItem>招生信息</MenuItem>
  <SubMenu tittle={'教育教学'}>
    <MenuItem>本科生培养</MenuItem>
    <MenuItem>研究生培养</MenuItem>
    <MenuItem>博士生培养</MenuItem>
    <MenuItem>留学生培养</MenuItem>
  </SubMenu>
  <MenuItem disabled={true}>科研成果</MenuItem>
</Menu>`
  const Code2 = `<Menu mode={'vertical'} defaultOpenSubMenus={['3']}>
  <MenuItem>学校概况</MenuItem>
  <MenuItem>院系设置</MenuItem>
  <MenuItem>招生信息</MenuItem>
  <SubMenu tittle={'教育教学'}>
    <MenuItem>本科生培养</MenuItem>
    <MenuItem>研究生培养</MenuItem>
    <MenuItem>博士生培养</MenuItem>
    <MenuItem>留学生培养</MenuItem>
  </SubMenu>
</Menu>`

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Menu 导航菜单</h2>
        <p className={'display-explain'}>为网站提供导航功能的菜单。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>引导用户进入不同业务分支时使用。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'水平导航'}
              explain={'水平排布的顶部导航菜单'}
              code={Code1}
          >
            <Menu>
              <MenuItem>学校概况</MenuItem>
              <MenuItem>院系设置</MenuItem>
              <MenuItem>招生信息</MenuItem>
              <SubMenu tittle={'教育教学'}>
                <MenuItem>本科生培养</MenuItem>
                <MenuItem>研究生培养</MenuItem>
                <MenuItem>博士生培养</MenuItem>
                <MenuItem>留学生培养</MenuItem>
              </SubMenu>
              <MenuItem disabled={true}>科研成果</MenuItem>
            </Menu>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'垂直导航'}
              explain={'垂直排布的侧边导航菜单'}
              code={Code2}
          >
            <Menu mode={'vertical'} defaultOpenSubMenus={['3']}>
              <MenuItem>学校概况</MenuItem>
              <MenuItem>院系设置</MenuItem>
              <MenuItem>招生信息</MenuItem>
              <SubMenu tittle={'教育教学'}>
                <MenuItem>本科生培养</MenuItem>
                <MenuItem>研究生培养</MenuItem>
                <MenuItem>博士生培养</MenuItem>
                <MenuItem>留学生培养</MenuItem>
              </SubMenu>
            </Menu>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <h3 className={'display-tittle'}>Menu</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource1}/>
        </div>
        <h3 className={'display-tittle'}>MenuItem</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource2}/>
        </div>
        <h3 className={'display-tittle'}>SubMenu</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource3}/>
        </div>
      </div>
  )
}

export default MenuDisplay
