import React, {useEffect} from 'react'
import * as ReactDom from 'react-dom'
import * as PropTypes from "prop-types"

interface FoldAnimationProps {
  visible?: boolean,
  vertical?: boolean,
  transitionDru?: number
}

export interface TransitionEffect {
  vertical: string
  horizontal: string
}

export interface LeaveTo {
  vertical: React.CSSProperties
  horizontal: React.CSSProperties
}

export interface PrevCssProp {
  paddingLeft: string | null
  paddingRight: string | null
  paddingTop: string | null
  paddingBottom: string | null
  borderTopWidth: string | null
  borderBottomWidth: string | null
  borderLeftWidth: string | null
  borderRightWidth: string | null
  width: string | null
  height: string | null
  overflowX: string | null
  overflowY: string | null
  overflow: string | null
}

export interface PrevSize {
  width: string | null
  height: string | null
}

const FoldAnimation: React.FC<FoldAnimationProps> = (props) => {
  const { vertical, visible, transitionDru} = props
  const monitored: boolean = false
  const transitionEffect: TransitionEffect = {
    vertical: '',
    horizontal: ''
  }
  const leaveTo: LeaveTo = {
    vertical: {
      paddingTop: '0',
      paddingBottom: '0',
      borderTopWidth: '0',
      borderBottomWidth: '0',
      height: '0'
    },
    horizontal: {
      paddingLeft: '0',
      paddingRight: '0',
      borderLeftWidth: '0',
      borderRightWidth: '0',
      width: '0'
    }
  }
  const prevCssProp: PrevCssProp = {
    paddingLeft: '',
    paddingRight: '',
    paddingTop: '',
    paddingBottom: '',
    borderTopWidth: '',
    borderBottomWidth: '',
    borderLeftWidth: '',
    borderRightWidth: '',
    width: '',
    height: '',
    overflowX: '',
    overflowY: '',
    overflow: ''
  }
  const prevSize: PrevSize = {
    width: null,
    height: null
  }
  const addTransitionListener = () => {

  }
  useEffect(() => {
    if (visible) {
      let rendered: boolean = false
      rendered = true
    }
  }, [])
  return (
      <></>
  )
}
FoldAnimation.defaultProps = {
  vertical: false,
  transitionDru: 0.3
}
FoldAnimation.propTypes = {
  visible: PropTypes.bool.isRequired,
  vertical: PropTypes.bool,
  transitionDru: PropTypes.number
}
export default FoldAnimation
