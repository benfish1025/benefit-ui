import React, {useState} from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Popconfirm from '../../components/Popconfirm/popconfirm'
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
    attribute: 'visible',
    description: '控制显示',
    type: `boolean`,
    default: `false`,
  },
  {
    key: '2',
    attribute: 'tittle',
    description: '确认框标题',
    type: `string`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'detail',
    description: '标题下的说明文字',
    type: 'string',
    default: '——',
  },
  {
    key: '5',
    attribute: 'position',
    description: `'top' | 'left' | 'right' | 'bottom'`,
    type: 'string',
    default: '——',
  },
  {
    key: '6',
    attribute: 'bgColor',
    description: '确认框背景颜色',
    type: 'string',
    default: '#ffc800(明黄色)',
  },
  {
    key: '7',
    attribute: 'textColor',
    description: '标题说明的文本颜色',
    type: 'string',
    default: '#ffffff(白色)',
  },
  {
    key: '8',
    attribute: 'firstButtonText',
    description: '第一个按钮上的显示文本',
    type: 'string',
    default: '好',
  },
  {
    key: '9',
    attribute: 'secondButtonText',
    description: '第二个按钮上的显示文本',
    type: 'string',
    default: '查看详情',
  },
  {
    key: '10',
    attribute: 'onFirstButtonClick',
    description: '第一个按钮点击时的回调',
    type: '() => void',
    default: '——',
  },
  {
    key: '11',
    attribute: 'onSecondButtonClick',
    description: '第二个按钮上的显示文本',
    type: '() => void',
    default: '——',
  },
  {
    key: '12',
    attribute: 'replaceFirstButton',
    description: '替换掉第一个按钮',
    type: 'React.ReactNode',
    default: '——',
  },
  {
    key: '13',
    attribute: 'replaceSecondButton',
    description: '替换掉第二个按钮',
    type: 'React.ReactNode',
    default: '——',
  },
  {
    key: '14',
    attribute: 'style',
    description: '自定义Popconfirm样式',
    type: 'CSSProperties',
    default: '——',
  }

]
const PopconfirmDisplay = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }
  const [visible2, setVisible2] = useState(false)
  const handleClick2 = () => {
    setVisible2(!visible2)
  }
  const [visible6, setVisible6] = useState(false)
  const handleClick6 = () => {
    setVisible6(!visible6)
  }
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleClick3 = () => {
    setVisible3(!visible3)
  }
  const handleClick4 = () => {
    setVisible4(!visible4)
  }
  const handleClick5 = () => {
    setVisible5(!visible5)
  }

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

  const handleChecked = () => {
    clearTimeout(timer)
    setLoading(true)
    timer = setTimeout(() => {

      setVisible5(!visible5)
      setLoading(false)
    }, 1000)
  }
  const handleCancel = () => {
    setVisible5(!visible5)
  }
  const greenButton = <Button btnType={'success'} size={'full'}>确认</Button>
  const garyButton = <Button size={'full'}>取消</Button>
  const greenButton2 = <Button onClick={handleChecked} isLoading={loading} btnType={'primary'} size={'full'}>确认</Button>
  const garyButton2 = <Button onClick={handleCancel} size={'full'}>取消</Button>
  let timer: NodeJS.Timeout

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Popconfirm 气泡确认框</h2>
        <p className={'display-explain'}>点击锚点元素，弹出气泡式的确认框。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>锚点元素处需要用户进一步的确认时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用'}
              explain={'按照主色分类，按钮有四种类型：成功按钮、错误按钮、主要按钮和默认按钮。'}
              code={Code1}
          >
            <Popconfirm
                tittle={'单元四'}
                detail={'第4/21节'}
                visible={visible}
                secondButtonText={'查看详情'}
                firstButtonText={'好'}
            >
              <Button onClick={handleClick} btnType={'none'}>进入学习</Button>
            </Popconfirm>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'弹出位置'}
              explain={'放置在有色背景上，自动应用其主色'}
              code={Code4}
          >
            <Popconfirm position={'bottom'} tittle={'单元四'} detail={'第4/21节'} visible={visible2}>
              <Button onClick={handleClick2} btnType={'none'}>进入学习</Button>
            </Popconfirm>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'自定义颜色'}
              explain={'自定义确认框背景颜色'}
              code={Code2}
          >
            <div className="margin-right-small">
              <Popconfirm
                  bgColor={'#ff4b4b'}
                  tittle={'单元四'}
                  detail={'第4/21节'}
                  visible={visible3}
                  secondButtonText={'查看详情'}
                  firstButtonText={'好'}
              >
                <Button
                    onClick={handleClick3}
                    btnType={'none'}>红果果</Button>
              </Popconfirm>
            </div>
            <Popconfirm
                bgColor={'#58cc02'}
                tittle={'单元四'}
                detail={'第4/21节'}
                position={'bottom'}
                visible={visible4}
                secondButtonText={'查看详情'}
                firstButtonText={'好'}
            >
              <Button
                  onClick={handleClick4}
                  btnType={'none'}>绿泡泡</Button>
            </Popconfirm>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'更多组合'}
              explain={'可拔插的按钮组合,可以定制更多样式'}
              code={Code5}
          >
            <Popconfirm
                bgColor={'#f7f7f7'}
                textColor={'#777777'}
                tittle={'单元四'}
                detail={'第4/21节'}
                visible={visible6}
                replaceFirstButton={greenButton}
                replaceSecondButton={garyButton}
            >
              <Button
                  onClick={handleClick6}
                  btnType={'none'}>可拔插</Button>
            </Popconfirm>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'异步的确认框'}
              explain={'返回结果时，确认框收起，表示消息成功提交。'}
              code={Code3}
          >
            <Popconfirm
                bgColor={'#f7f7f7'}
                textColor={'#777777'}
                tittle={'确认删除?'}
                detail={'此次删除将不可撤销'}
                visible={visible5}
                replaceFirstButton={greenButton2}
                replaceSecondButton={garyButton2}
            >
              <Button
                  onClick={handleClick5}
                  btnType={'none'}
              >Delete</Button>
            </Popconfirm>
          </Card>
        </div>


        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default PopconfirmDisplay
