import React, {createContext, useState} from 'react'
import ClassNames from 'classnames'
import TableRow from "./tabRow"
import CheckBox from "../CheckBox/checkBox";
import Loading from '../Loading/loading'
import {ReactComponent as SortTop} from './sort-top.svg'
import {ReactComponent as SortBottom} from './sort-bottom.svg'


export interface ColumnProps {
  title: string,
  dataIndex: string,
  key: string,
  render?: (...resProps: any[]) => React.ReactNode,
  sort?: boolean
}
export interface DataSourceProps {
  key: string
}
interface ObjectProps {
  [key: string]: any
}
interface SelectionItemProps {
  id: string,
  index: number
}
interface TableProps {
  dataSource: DataSourceProps[],
  columns: ColumnProps[],
  rowSelection?: boolean,
  onSelectionChange?: (selection: string[]) => void
  isLoading?: boolean,
  edit?: boolean
}
interface TableContextProps {
  activeRow?: string,
  activeColumn?: string,
  onClickCell?: (row: string, column: string) => void,
  onDoubleClick?: (row: string, column: string) => void,
  inputRow?: string,
  inputColumn?: string,
  edit?: boolean
}
const arrSortUtil = (column: string, data: ObjectProps[], mode: 'upper' | 'lower') => {
  const lowerColumn = column.toLowerCase()
    const queue = data.map( (item, index) => {
      return {
        col: item[lowerColumn],
        i: index
      }
    })
    return queue.sort((o1, o2) => {
      if (mode === 'upper') {
        if (typeof o1.col === 'string') {
          if( o1.col > o2.col) {
            return 1
          } if (o1.col < o2.col) {
            return -1
          } else return 0
        } else {
          return o1.col - o2.col
        }
      } else {
        if (typeof o1.col === 'string') {
          if( o1.col < o2.col) {
            return 1
          } if (o1.col > o2.col) {
            return -1
          } else return 0
        } else {
          return o2.col - o1.col
        }
      }
    }).map((item) => {
      return data[item.i]
    })
  }



export const TableContext = createContext<TableContextProps>({})
const Table = (props: TableProps) => {
  const {edit, isLoading, onSelectionChange, rowSelection, columns, dataSource} = props
  const [orderValue, setOrderValue] = useState<string[]>([])
  const [activeRow, setActiveRow] = useState<string>('')
  const [inputRow, setInputeRow] = useState<string>('')
  const [activeColumn, setActiveColumn] = useState<string>('')
  const [inputColumn, setInputColumn] = useState<string>('')
  const [upper, setUpper] = useState<'upper' | 'lower'| ''>('')
  const [lower, setLower] = useState<'upper' | 'lower'| ''>('')

  const handleClickCell = (row: string, column: string) => {
    setActiveRow(row)
    setActiveColumn(column)
  }
  const handleDoubleClickCell = (row: string, column: string) => {
    setInputeRow(row)
    setInputColumn(column)
  }
  const tableContext = {
    activeRow: activeRow,
    activeColumn: activeColumn,
    onClickCell: handleClickCell,
    onDoubleClick: handleDoubleClickCell,
    inputRow: inputRow,
    inputColumn: inputColumn,
    edit: edit
  }

  const handleChange = (key: string) => {
    const newValue = orderValue.includes(key)
        ? orderValue.filter((item) => item !== key)
        : [key, ...orderValue]
    setOrderValue(newValue)
    if (onSelectionChange) {
      onSelectionChange(newValue)
    }
  }
  const selectAll = (mode: boolean) => {
    const initial: string[] = []
    const newValue = mode
        ? dataSource.reduce((prev, current) => [current.key, ...prev], initial)
        : []
    setOrderValue(newValue)
    if (onSelectionChange) {
      onSelectionChange(newValue)
    }
  }
  const getStatus = () => {
    if (orderValue.length === dataSource.length) {
      return 'checked'
    } else if (orderValue.length > 0 && orderValue.length !== dataSource.length ) {
      return 'indeterminate'
    } else {
      return 'none'
    }
  }
  const helpDataource = () => {
    const mode = upper
    if (mode) {
      return arrSortUtil('date', dataSource, mode)
    }else return dataSource

  }
  const handleUpperClick = () => {
    if (upper === 'upper') {
      setUpper('')
    } else {
      setUpper('upper')
    }
  }
  const handleLowerClick = () => {
    if (upper === 'lower') {
      setUpper('')
    } else {
      setUpper('lower')
    }
  }
  const handleAll = (mode: boolean) => {
    if (getStatus() === 'checked') {
      selectAll(false)
      console.log(getStatus())
    } else {
      selectAll(true)
    }
  }
  const upperClasses = ClassNames({
    'is-active': upper === 'upper'
  })
  const lowerClasses = ClassNames({
    'is-active': upper === 'lower'
  })
  return (
      <Loading loading={isLoading}>

      <table className="b-table">
        <thead className={'t-row--head'}>
        <tr>
          {rowSelection &&
            <th
                className={'t-item t-item--head t-item--leftT'}>
                <CheckBox
                    onChange={handleAll}
                    indeterminate={getStatus() === 'indeterminate'}
                    checked={getStatus() === 'checked'}
                />
            </th>}
          {columns.map((column, index) => {
            const classes = ClassNames('t-item', 't-item--head', {
              't-item--leftT': index === 0 && !rowSelection,
              't-item--rightT': index === columns.length,
            })
            return(
              <th
                key={column.key}
                className={classes}>
                <div className={'t-item--head-wrapper'}>
                  <span>{column.title}</span>
                  {column.sort &&
                  <div className={'sort-wrapper'}>
                      <SortTop className={upperClasses} onClick={handleUpperClick}/>
                      <SortBottom className={lowerClasses} onClick={handleLowerClick}/>
                  </div>}
                </div>
              </th>
            )
          })}
        </tr>
        </thead>
        <TableContext.Provider value={tableContext}>
        <tbody>
        {helpDataource().map((rowData,index) => {
          return <TableRow rowSelectionOrder={orderValue} onSelectionChange={handleChange} rowSelection={rowSelection} index={index} key={rowData.key} headData={columns} rowData={rowData} />
        })}
        </tbody>
        </TableContext.Provider>
      </table>

      </Loading>
  )
}

export default Table
