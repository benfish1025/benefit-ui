import React from 'react'
import {ColumnProps} from './table'
import ClassNames from 'classnames'
import CheckBox from "../CheckBox/checkBox";
import TableCell from './tableCell'

interface RowDataProps {
  [key: string]: any
}
interface TableRowProps {
  rowData: RowDataProps,
  headData: ColumnProps[]
  key: string,
  index: number,
  rowSelection?: boolean,
  onSelectionChange: (key: string) => void,
  rowSelectionOrder: string[],
  disabled?: boolean
}
const TableRow = (props: TableRowProps) => {
  const {rowSelectionOrder, onSelectionChange, rowSelection, key, rowData, headData, index} = props
  const rowClasses = ClassNames('t-row', {
    'is-selected': rowSelectionOrder.includes(rowData.key)
  })
  return (
      <tr key={key} className={rowClasses}>
        {rowSelection &&
          <td className={'t-item t-item--first'}>
              <CheckBox
                  key={rowData.key}
                  checked={rowSelectionOrder.includes(rowData.key)}
                  disabled={rowData.disabled}
                  onChange={() => onSelectionChange(rowData.key)}
              />
          </td>}
        {headData && headData.map((item,index) => {
          const classes = ClassNames('t-item', {
            't-item--first': index === 0 && !rowSelection
          })
          if (!item.render) {
            return (
            <TableCell value={rowData[item.key.toLowerCase()]} cellKey={item.key} rowKey={rowData.key} key={item.key} className={classes}>
              <span>{rowData[item.key.toLowerCase()]}</span>
            </TableCell>
            )
        } else {
            return (
                    <td className={'t-item'}>
                      {item.render(rowData)}
                    </td>
                )

          }
        })
        }
      </tr>
  )
}

export default TableRow
