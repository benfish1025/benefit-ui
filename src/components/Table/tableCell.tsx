import React, {useContext, useEffect, useRef, useState} from 'react'
import {TableContext} from "./table";
import ClassNames from 'classnames'
import Input from "../Input/input";
import {useAutoFocus} from '../../hooks/useAutoFocus'
interface TableCellProps {
  rowKey: string,
  key?: string,
  cellKey: string,
  className?: string,
  value?: string
}

const TableCell: React.FC<TableCellProps> = (props) => {
  const {value, key, className, children, rowKey, cellKey } =props
  const context = useContext(TableContext)
  const [input , setInput] = useState(false)
  const classes = ClassNames(className, {
    'is-active': context.activeColumn === cellKey && context.activeRow === rowKey
  })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  },[context.inputRow,context.inputColumn])
  const handleClick = () => {
    if (context.onClickCell) {
      context.onClickCell(rowKey, cellKey)
    }
  }
  const handleDoubleClick = () => {
    if (context.onDoubleClick) {
      context.onDoubleClick(rowKey, cellKey)
    }

  }
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.code) {
      case 'Enter': {
        if (context.onDoubleClick) {
          context.onDoubleClick('', '')
        }
        break
      }
      default: break
    }
}
  return (
      <td onDoubleClick={handleDoubleClick} onClick={handleClick} className={classes} key={key}>
        {context.inputColumn === cellKey && context.inputRow === rowKey
          ? <input
            defaultValue={value}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className={'table-input'}/>
          : children}
      </td>
  )
}

export default TableCell