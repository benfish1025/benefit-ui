import React, {useState} from 'react'
import Unfold from '../Fold/fold'
import {ReactComponent as CodeSvg} from './code.svg'
// @ts-ignore
import Highlight from 'react-highlight'
import Divider from '../Divider/divider'

interface CardProps {
  divider?: string,
  explain?: string,
  code?: string,
  color?: string
}

const Card: React.FC<CardProps> = ({color,code, children, divider, explain}) => {
  const [spread, setSpread] = useState(false)
  const helpMargin = () => {
    if (color) {
      return {
        color: color,
        backgroundColor: color,
        marginBottom: '-8px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      }
    } else if (color === undefined) {
      return color
    }
  }
  const handleClick = () => {
    setSpread(!spread)
  }
  return (
    <div className="component-container">
      <div className={'component-card'}>
        <div
            style={helpMargin()}
            className="component-card-flex">
          {children}
        </div>

        <Divider>{divider}</Divider>
        <div className="component-explain">
          <span>{explain}</span>
          <div onClick={handleClick} className="component-show-code">
            <CodeSvg/>
          </div>
        </div>
      </div>
      <Unfold visible={spread} vertical={true}>
        <div className="component-drawer">
          <Highlight  language="javascript">
            {code}
          </Highlight>
        </div>
      </Unfold>
    </div>
  )
}

export default Card
