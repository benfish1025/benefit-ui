import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Tag from '../../components/Tag/tag'
import Input from "../../components/Input/input";
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
    attribute: 'type',
    description: '不同样式风格的按钮',
    type: `'gray' | 'red' | 'yellow' | 'blue' | 'green' | 'purple'`,
    default: `'blue'`,
  },
  {
    key: '2',
    attribute: '浅色主题',
    description: '按钮获得尺寸的方式',
    type: `boolean`,
    default: `false`,
  },
  {
    key: '3',
    attribute: 'closable',
    description: '显示关闭按钮',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '4',
    attribute: 'onTagClick',
    description: '点击标签时的回调',
    type: '() => void',
    default: '——',
  },
  {
    key: '5',
    attribute: 'onClose',
    description: '点击关闭按钮时的回调',
    type: '() => void',
    default: '——',
  },
  {
    key: '6',
    attribute: 'color',
    description: '自定义标签颜色',
    type: 'string',
    default: '——',
  },
  {
    key: '7',
    attribute: 'size',
    description: '标签大小',
    type: `'normal' | 'small'`,
    default: `'normal'`,
  },
  {
    key: '8',
    attribute: 'checkable',
    description: '标签是否是可选中的',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '9',
    attribute: 'checked',
    description: '标签的选中状态',
    type: 'boolean',
    default: '——',
  }
]
const Code1 = `<Tag type={'blue'}>标签一</Tag>
<Tag type={'red'}>标签二</Tag>
<Tag type={'yellow'}>标签三</Tag>
<Tag type={'green'}>标签四</Tag>
<Tag type={'purple'}>标签五</Tag>
<Tag type={'gray'}>标签六</Tag>
`
const Code2 = `<Tag type={'blue'} closable={true}>标签一</Tag>
<Tag type={'red'} closable={true}>标签二</Tag>
<Tag type={'yellow'} closable={true}>标签三</Tag>
<Tag type={'green'} closable={true}>标签四</Tag>
<Tag type={'purple'} closable={true}>标签五</Tag>
<Tag type={'gray'} closable={true}>标签六</Tag>
`
const Code3 = `<Tag type={'blue'} shallow={true} closable={true}>标签一</Tag>
<Tag type={'red'} shallow={true} closable={true}>标签二</Tag>
<Tag type={'yellow'} shallow={true} closable={true}>标签三</Tag>
<Tag type={'green'} shallow={true} closable={true}>标签四</Tag>
<Tag type={'purple'} shallow={true} closable={true}>标签五</Tag>
<Tag type={'gray'} shallow={true} closable={true}>标签六</Tag>
`
const Code4 = `<span style={{marginRight: '8px'}}>Favorite Foods:</span>
{orderTags.map((item,index) => {
  return <Tag 
      key={index} 
      closable={true} 
      onClose={() => handleClose(item)}
  >
    {item}
  </Tag>
})}
{!edit
    ? <Tag onTagClick={handleClickEdit} shallow={true}>+ 新增标签</Tag>
    : <div style={{width: '135px'}}>
      <Input 
          onBlur={handleBlur} 
          autoFocus={true} 
          onPressEnter={handleEnter} 
          inputSize={"mini"}
      />
    </div>}
`
const Code5 = `<span style={{marginRight: '8px'}}>Categories:</span>
<Tag onTagClick={handleTagClick} checkable={true} checked={checked} type={'blue'} shallow={true} >Movies</Tag>
<Tag onTagClick={handleTagClick2} checkable={true} checked={checked2} type={'blue'} shallow={true} >Books</Tag>
<Tag onTagClick={handleTagClick3} checkable={true} checked={checked3} type={'blue'} shallow={true} >Musics</Tag>
<Tag onTagClick={handleTagClick4} checkable={true} checked={checked4} type={'blue'} shallow={true} >Sports</Tag>
`
const Code6 = `<Tag type={'blue'} closable={true}>标签一</Tag>
<Tag type={'red'} closable={true}>标签二</Tag>
<Tag type={'yellow'} closable={true}>标签三</Tag>

<Tag size={'small'} type={'blue'} closable={true}>标签一</Tag>
<Tag size={'small'} type={'red'} closable={true}>标签二</Tag>
<Tag size={'small'} type={'yellow'} closable={true}>标签三</Tag>
`
const TagDisplay = () => {


  const [edit, setEdit] = useState(false)
  const [orderTags, setOrderTags] = useState<string[]>(['煎饼果子'])
  const handleClose = (value: string) => {
    const newValue = orderTags.filter((item) => item !== value)
    setOrderTags(newValue)
  }
  const handleClickEdit = () => {
    setEdit(true)
  }
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (target.value) {
      setEdit(false)
      setOrderTags(orderTags.concat(target.value))
    } else {setEdit(false)
    }
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (target.value) {
      setEdit(false)
      setOrderTags(orderTags.concat(target.value))
    } else {setEdit(false)
    }
  }
  const [checked, setChecked] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const handleTagClick = () => {
    setChecked(!checked)
  }
  const handleTagClick2 = () => {
    setChecked2(!checked2)
  }
  const handleTagClick3 = () => {
    setChecked3(!checked3)
  }
  const handleTagClick4 = () => {
    setChecked4(!checked4)
  }
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Tag 标签</h2>
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
            <Tag type={'blue'}>标签一</Tag>
            <Tag type={'red'}>标签二</Tag>
            <Tag type={'yellow'}>标签三</Tag>
            <Tag type={'green'}>标签四</Tag>
            <Tag type={'purple'}>标签五</Tag>
            <Tag type={'gray'}>标签六</Tag>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'可移除'}
              explain={'显示可移除按钮。'}
              code={Code2}
          >
            <Tag type={'blue'} closable={true}>标签一</Tag>
            <Tag type={'red'} closable={true}>标签二</Tag>
            <Tag type={'yellow'} closable={true}>标签三</Tag>
            <Tag type={'green'} closable={true}>标签四</Tag>
            <Tag type={'purple'} closable={true}>标签五</Tag>
            <Tag type={'gray'} closable={true}>标签六</Tag>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'不同主题'}
              explain={'深色和浅色两种主题。'}
              code={Code3}
          >
            <Tag type={'blue'} shallow={true} closable={true}>标签一</Tag>
            <Tag type={'red'} shallow={true} closable={true}>标签二</Tag>
            <Tag type={'yellow'} shallow={true} closable={true}>标签三</Tag>
            <Tag type={'green'} shallow={true} closable={true}>标签四</Tag>
            <Tag type={'purple'} shallow={true} closable={true}>标签五</Tag>
            <Tag type={'gray'} shallow={true} closable={true}>标签六</Tag>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'动态编辑'}
              explain={'通过输入框 动态生成标签。'}
              code={Code4}
          >
            <div className="flex-row-wrapper">
              <span style={{marginRight: '8px'}}>Favorite Foods:</span>
              {orderTags.map((item,index) => {
                return <Tag
                    key={index}
                    closable={true}
                    onClose={() => handleClose(item)}
                >
                  {item}
                </Tag>
              })}
              {!edit
                  ? <Tag onTagClick={handleClickEdit} shallow={true}>+ 新增标签</Tag>
                  : <div style={{width: '135px'}}>
                    <Input
                        onBlur={handleBlur}
                        autoFocus={true}
                        onPressEnter={handleEnter}
                        inputSize={"mini"}
                    />
                  </div>}
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'可选择的标签'}
              explain={'标签可被点亮，类似于多选框的功能。此组件为完全受控组件。'}
              code={Code5}
          >
            <div className="flex-row-wrapper">
              <span style={{marginRight: '8px'}}>Categories:</span>
              <Tag onTagClick={handleTagClick} checkable={true} checked={checked} type={'blue'} shallow={true} >Movies</Tag>
              <Tag onTagClick={handleTagClick2} checkable={true} checked={checked2} type={'blue'} shallow={true} >Books</Tag>
              <Tag onTagClick={handleTagClick3} checkable={true} checked={checked3} type={'blue'} shallow={true} >Musics</Tag>
              <Tag onTagClick={handleTagClick4} checkable={true} checked={checked4} type={'blue'} shallow={true} >Sports</Tag>
            </div>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'大小'}
              explain={'默认和迷你两种大小。'}
              code={Code6}
          >
            <div style={{width: '100%'}} className="flex-column-wrapper">
              <div className={'padding-bottom-small'}>
                <Tag type={'blue'} closable={true}>标签一</Tag>
                <Tag type={'red'} closable={true}>标签二</Tag>
                <Tag type={'yellow'} closable={true}>标签三</Tag>
              </div>
              <div>
                <Tag size={'small'} type={'blue'} closable={true}>标签一</Tag>
                <Tag size={'small'} type={'red'} closable={true}>标签二</Tag>
                <Tag size={'small'} type={'yellow'} closable={true}>标签三</Tag>
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

export default TagDisplay
