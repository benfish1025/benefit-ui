import React, { FC } from 'react'
import { UploadFile } from './upload'
import Progress from '../Progress/progress'
import Loading from "../Loading/loading";
import {ReactComponent as FileSvg} from "./file.svg";
import {ReactComponent as ForkSvg} from "../Tag/fork.svg";
import Popover from "../Popover/popover";
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
      <ul className="b-upload-list">
        {fileList.map(item => {
          return (
              <Popover bgColor={'#ea2b2b'} position={"left"} content={item.error && item.error.toString()}>
          <li className="b-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <FileSvg/>
              {item.name}
            </span>
            <span className="file-status">
            </span>
            <span className="file-actions">
             <ForkSvg onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' &&
            <Progress percent={item.percent || 0}/>}
          </li>
              </Popover>
          )
        })}
      </ul>
  )

}

export default UploadList;
