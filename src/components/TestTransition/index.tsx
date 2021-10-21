import React, {useEffect, useRef, useState} from 'react'

interface TestTransitionProps {
  visible: boolean
  beforeEnter?: React.CSSProperties
  afterEnter?: React.CSSProperties
  beforeLeave?: React.CSSProperties
  afterLeave?: React.CSSProperties
  transitionActive?: React.CSSProperties
  innerRef:  React.RefObject<HTMLDivElement>
}
function usePrevious(prevVisible: boolean) {
  const ref = useRef<boolean>()
  useEffect(() => {
    ref.current = prevVisible
  })
  return ref.current
}
const TestTransition: React.FC<TestTransitionProps> = (props) => {
  const {
    visible,
    afterEnter,
    afterLeave,
    beforeEnter,
    beforeLeave,
    innerRef,
    transitionActive = {
      transition: '300ms all cubic-bezier(.645, .045, .355, 1)'
    },
    children} = props
  const [rendered, setRendered] = useState(false)
  const [monitered, setMonitered] = useState(false)
  const preVisible = usePrevious(visible)
  useEffect(() => {
    if (visible) {
      setRendered(true)
    }
    helpAddTransitionListener()
    return () => {
      innerRef.current && innerRef.current.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [visible])

  useEffect(() => {
    if (!monitered) {
      helpAddTransitionListener()
    }
    if (visible && !preVisible) {
      setRendered(true)
      showNode()
    } else if (!visible && preVisible) {
      hideNode()
    }

  })
  const showNode = () => {
    if (innerRef.current) {
      innerRef.current.style.display = 'block'
      helpSetNodeStyle(innerRef.current, {
        'transition': '',
        ...(beforeEnter || afterEnter || {})
      })
      innerRef.current.getBoundingClientRect()
      helpSetNodeStyle(innerRef.current, {
        ...transitionActive,
        ...(afterEnter || beforeEnter || {})
      })
    }
  }
  const hideNode = () => {
    if (innerRef.current) {
      helpSetNodeStyle(innerRef.current, {
        transition: '',
        ...(beforeLeave || afterEnter || {})
      })
      innerRef.current.getBoundingClientRect()
      helpSetNodeStyle(innerRef.current, {
        ...transitionActive,
        ...(afterLeave || beforeEnter || {})
      })
    }
  }
  const helpSetNodeStyle = (node: HTMLElement, cssProp: React.CSSProperties) => {
    Object.keys(cssProp).forEach((key) => {
      // @ts-ignore
      node.style[key] = cssProp[key]
    })
  }
  const helpAddTransitionListener = () => {
    innerRef.current && innerRef.current.addEventListener('transitionend', handleTransitionEnd)
    setMonitered(true)
  }
  const handleTransitionEnd = () => {
    if (!visible && innerRef.current) {
       innerRef.current.style.display = 'none'
    }
  }


  return (
    <>
      {
        (visible || rendered ) ? children : null
      }
    </>
  )
}

export default TestTransition
