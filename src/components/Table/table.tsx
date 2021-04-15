import React, {useState} from 'react'
import ClassNames from 'classnames'
import TableRow from "./tabRow"
import CheckBox from "../CheckBox/checkBox";
import Loading from '../Loading/loading'
export interface ColumnProps {
  title: string,
  dataIndex: string,
  key: string,
  render?: (...resProps: any[]) => React.ReactNode
}
export interface DataSourceProps {
  key: string
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
  isLoading?: boolean
}

const Table = (props: TableProps) => {
  const {isLoading, onSelectionChange, rowSelection, columns, dataSource} = props
  const [orderValue, setOrderValue] = useState<string[]>(['1','2'])
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
  const handleAll = (mode: boolean) => {
    if (getStatus() === 'checked') {
      selectAll(false)
      console.log(getStatus())
    } else {
      selectAll(true)
    }
  }
  return (
      <Loading spinning={isLoading}>
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
            return <th key={column.key} className={classes}>{column.title}</th>
          })}
        </tr>
        </thead>
        <tbody>
        {dataSource.map((rowData,index) => {
          return <TableRow rowSelectionOrder={orderValue} onSelectionChange={handleChange} rowSelection={rowSelection} index={index} key={rowData.key} headData={columns} rowData={rowData} />
        })}
        </tbody>
      </table>
      </Loading>
  )
}

export default Table
