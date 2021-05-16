import React from 'react'
import Card from '../../components/Card/card'
import Table from "../../components/Table/table"
import Upload from "../../components/Upload/upload";
import Button from "../../components/Button/button";
import {ReactComponent as FileSvg} from "../svg/File.svg";

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
    attribute: 'action',
    description: '上传的地址',
    type: `string`,
    default: `——`,
  },
  {
    key: '2',
    attribute: 'defaultFileList',
    description: '文件列表',
    type: `UploadFile[]`,
    default: `——`,
  },
  {
    key: '3',
    attribute: 'beforeUpload',
    description: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传',
    type: `(file: File) => boolean | Promise`,
    default: '——',
  },
  {
    key: '4',
    attribute: 'onProgress',
    description: '文件上传时的钩子',
    type: '(percentage: number, file: UploadFile) => void',
    default: '——',
  },
  {
    key: '5',
    attribute: 'onSuccess',
    description: '文件上传成功时的钩子',
    type: '(data: any, file: UploadFile) => void',
    default: '——',
  },
  {
    key: '6',
    attribute: 'onError',
    description: '文件上传失败时的钩子',
    type: '(err: any, file: UploadFile) => void',
    default: '——',
  },
  {
    key: '7',
    attribute: 'onChange',
    description: '文件状态改变时的钩子，上传成功或者失败时都会被调用',
    type: '(file: UploadFile) => void',
    default: '——',
  },
  {
    key: '8',
    attribute: 'onRemove',
    description: '文件列表移除文件时的钩子',
    type: '(file: UploadFile) => void',
    default: '——',
  },
  {
    key: '9',
    attribute: 'headers',
    description: '设置上传的请求头部',
    type: '{ [key: string]: any; }',
    default: '——',
  },
  {
    key: '10',
    attribute: 'name',
    description: '上传的文件字段名',
    type: 'string',
    default: 'files',
  },
  {
    key: '11',
    attribute: 'data',
    description: '上传时附带的额外参数',
    type: '{ [key: string]: any; }',
    default: 'files',
  },
  {
    key: '12',
    attribute: 'withCredentials',
    description: '支持发送 cookie 凭证信息',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '13',
    attribute: 'accept',
    description: '可选参数, 接受上传的文件类型',
    type: 'string',
    default: '——',
  },
  {
    key: '14',
    attribute: 'multiple',
    description: '是否支持多选文件',
    type: 'boolean',
    default: 'false',
  },
  {
    key: '15',
    attribute: 'drag',
    description: '使用拖拽上传',
    type: 'boolean',
    default: 'false',
  },

]
const Code1 = `<Upload
    action="https://run.mocky.io/v3/0fe6d8b9-3d95-4d40-a889-02709b88a7e3"
    name="file"
    onChange={function noRefCheck(){}}
    onProgress={function noRefCheck(){}}
    onRemove={function noRefCheck(){}}
    onSuccess={function noRefCheck(){}}
>
  <Button
      btnType="primary"
      disabled={false}
  >
    点击上传
  </Button>
</Upload>
`
const Code2 = `<Upload
    action="https://run.mocky.io/v3/0fe6d8b9-3d95-4d40-a889-02709b88a7e3"
    drag
    multiple
    name="fileName"
    onChange={function noRefCheck(){}}
    onRemove={function noRefCheck(){}}
>
  <FileSvg/>
  <br />
  <p>
    点击或拖动
    <br />
    到此区域上传
  </p>
</Upload>
`

const UploadDisplay = () => {
  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>Upload 上传</h2>
        <p className={'display-explain'}>文件选择上传和拖拽上传控件。</p>
        <h3 className={'display-tittle'}>何时使用</h3>
        <p className={'display-explain'}>当需要上传一个或一些文件时。</p>
        <h3 className={'display-tittle'}>代码演示</h3>
        <div className="display-card-container">
          <Card
              divider={'基本使用/自定义锚点元素'}
              explain={'最基本的使用方式。'}
              code={Code1}
          >
            <Upload
                action="https://run.mocky.io/v3/0fe6d8b9-3d95-4d40-a889-02709b88a7e3"
                name="file"
                onChange={function noRefCheck(){}}
                onProgress={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                onSuccess={function noRefCheck(){}}
            >
              <Button
                  btnType="primary"
                  disabled={false}
              >
                点击上传
              </Button>
            </Upload>
          </Card>
        </div>
        <div className="display-card-container">
          <Card
              divider={'拖拽上传'}
              explain={'开启拖拽框.'}
              code={Code2}
          >
            <Upload
                action="https://run.mocky.io/v3/0fe6d8b9-3d95-4d40-a889-02709b88a7e3"
                drag
                multiple
                name="fileName"
                onChange={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
            >
              <FileSvg/>
              <br />
              <p>
                点击或拖动
                <br />
                到此区域上传
              </p>
            </Upload>
          </Card>
        </div>
        <h3 className={'display-tittle'}>API</h3>
        <div className="display-table-container">
          <Table columns={columns} dataSource={dataSource}/>
        </div>

      </div>
  )
}

export default UploadDisplay
