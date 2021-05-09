import React, {useContext, useEffect, useRef, useState} from 'react'
import {TableContext} from "./table";
import ClassNames from 'classnames'
import Input from "../Input/input";
import useClickOutside from '../../hooks/useClickOutside'
import Popover from '../Popover/popover';

interface TableCellProps {
  rowKey: string,
  key?: string,
  cellKey: string,
  className?: string,
  value?: string
}

const TableCell: React.FC<TableCellProps> = (props) => {
  const [tip, setTip] = useState(false)
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

  const helpClickEvent =  context.edit ? {
    onDoubleClick: () => {
      if (context.onDoubleClick) {
        context.onDoubleClick(rowKey, cellKey)
      }
    },
    onClick: () => {
      if (context.onClickCell) {
        context.onClickCell(rowKey, cellKey)
      }
    }
  } : {}
  useClickOutside(inputRef,() => {
    if (context.onClickCell) {
      context.onClickCell('', '')
      setTip(true)
    }
  
  })
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
    
      <td {...helpClickEvent} className={classes} key={key}>
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
