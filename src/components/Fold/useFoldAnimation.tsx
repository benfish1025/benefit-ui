import React, {useEffect, useRef} from 'react'

export interface FoldAnimationProps {
  visible?: boolean,
  vertical?: boolean,
  transitionDru?: number,
}
interface TransitionEffect {
  vertical: string
  horizontal: string
}
interface LeaveTo {
  vertical: React.CSSProperties
  horizontal: React.CSSProperties
}
interface IHelpKey {
  [key: string]: any
}
interface PrevCssProp extends IHelpKey{
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
interface PrevSize {
  width: string | null
  height: string | null
}

const useFoldAnimation: React.FC<FoldAnimationProps> = (props) => {
  const { visible,
          vertical = true,
          transitionDru = 0.3,
          children } = props
  const componentRef = useRef<HTMLDivElement>(null)
  const currentNode = componentRef.current
  let nodeDisplay = useRef<string>('')
  let monitored = useRef(false)
  let rendered = useRef(false)
  let transitionEffect = useRef<TransitionEffect>({
    vertical: '',
    horizontal: ''
  })

  let leaveTo: LeaveTo = {
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
  let prevCssProp = useRef<PrevCssProp>({
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
  })
  let prevSize = useRef<PrevSize>({
    width: null,
    height: null
  })
  const handleTransitionEnd = (e: Event) => {
    const { overflowX, overflowY, overflow } = prevCssProp.current
    const { width, height } = prevSize.current
    if (componentRef.current) {
      setNodeStyle(componentRef.current, {
        overflowX,
        overflowY,
        overflow,
        width,
        height
      })
    }
    if (!visible && componentRef.current) {
      componentRef.current.style.display = 'none'
    }
  }
  const setNodeStyle = (node: HTMLElement, cssProps: IHelpKey) => {
    Object.keys(cssProps).forEach((key) => {
      node.style[key as any] = cssProps[key]
    })
  }
  const getNodeSize = (node: HTMLElement) => {
    const display = node.style.display
    console.log('display is', display)
    if (display === 'none') {
      node.style.display = ''
    }
    const {top, left, right, bottom } = node.getBoundingClientRect()
    const rectWidth = right - left
    const rectHeight = bottom - top
    const {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      width,
      height,
      overflowX,
      overflowY,
      overflow
    } = node.style
    if (display === 'none') {
      node.style.display = display
    }
    prevCssProp.current = {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      width: width || rectWidth + 'px',
      height: height || rectHeight + 'px',
      overflowX,
      overflowY,
      overflow
    }
    prevSize.current = {
      width,
      height
    }
  }
  const addTransitionListener = () => {
    if (componentRef.current) {
      componentRef.current.addEventListener('transitionend', handleTransitionEnd)
      monitored.current = true
      getNodeSize(componentRef.current)
    }
  }
  const showNode = () => {
    const {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      width,
      height
    } = prevCssProp.current
    if (componentRef.current) {
      const node = componentRef.current
      node.style.display = ''
      node.style.overflowX = 'hidden'
      node.style.overflowY = 'hidden'
      node.style.overflow = 'hidden'
      if (vertical) {
        setNodeStyle(node, {
          transition: '',
          ...leaveTo.vertical
        })
        // inforce repaint
        node.getBoundingClientRect()
        setNodeStyle(node, {
          transition: transitionEffect.current.vertical,
          paddingTop,
          paddingBottom,
          borderTopWidth,
          borderBottomWidth,
          height,
          width
        })
      } else {
        setNodeStyle(node, {
          transition: '',
          ...leaveTo.horizontal
        })
        // inforce repaint
        node.getBoundingClientRect()
        setNodeStyle(node, {
          transition: transitionEffect.current.horizontal,
          paddingLeft,
          paddingRight,
          borderLeftWidth,
          borderRightWidth,
          height,
          width
        })
      }
    }
  }
  const hideNode = () => {
    const {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      width,
      height
    } = prevCssProp.current
    if (componentRef.current) {
      const node = componentRef.current
      // nodeDisplay.current = node.style.display
      node.style.overflowX = 'hidden'
      node.style.overflowY = 'hidden'
      node.style.overflow = 'hidden'
      if (vertical) {
        setNodeStyle(node, {
          transition: '',
          paddingTop,
          paddingBottom,
          borderTopWidth,
          borderBottomWidth,
          width,
          height
        })
        // inforce repaint
        node.getBoundingClientRect()
        setNodeStyle(node, {
          transition: transitionEffect.current.vertical,
          ...leaveTo.vertical
        })
      } else {
        setNodeStyle(node, {
          transition: '',
          paddingLeft,
          paddingRight,
          borderLeftWidth,
          borderRightWidth,
          width,
          height
        })
        // inforce repaint
        node.getBoundingClientRect()
        setNodeStyle(node, {
          transition: transitionEffect.current.horizontal,
          ...leaveTo.horizontal
        })
      }
    }
  }
  useEffect(() => {
    if (visible) {
      rendered.current = true
    }
    transitionEffect.current = {
      vertical: `
      ${transitionDru}s height cubic-bezier(.645, .045, .355, 1), 
      ${transitionDru}s padding-top cubic-bezier(.645, .045, .355, 1), 
      ${transitionDru}s padding-bottom cubic-bezier(.645, .045, .355, 1)`,
      horizontal: `
      ${transitionDru}s width cubic-bezier(.645, .045, .355, 1), 
      ${transitionDru}s padding-left cubic-bezier(.645, .045, .355, 1), 
      ${transitionDru}s padding-right cubic-bezier(.645, .045, .355, 1)`
    }
    addTransitionListener()

    return () => {
      if (currentNode) {
        currentNode.removeEventListener('transitionend', handleTransitionEnd)
      }
    }
  })
  useEffect(() => {
    /*if (!monitored.current) {
      addTransitionListener()
    }*/
    if (visible) {
      rendered.current = true
      showNode()
      // to leave
    } else if (!visible) {
      hideNode()
    }

  },[visible])
  return (
    <>
      {visible && rendered &&
      <div ref={componentRef}>
        {children}
      </div>
      }
    </>
  )
}
export default useFoldAnimation
