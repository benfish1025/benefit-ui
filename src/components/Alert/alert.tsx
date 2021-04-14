import React, { useRef } from 'react'
import ClassNames from 'classnames'
import Transition from '../Transition/transition'

interface AlertProps {
    alertController: () => void,
    showAlert: boolean,
    children?: React.ReactNode,
    className?: string,
    tittle?: string,
    section?: string,
    detail?: string
}

const Alert: React.FC<AlertProps> = (props) => {
    const {
        children,
        tittle,
        section,
        detail,
        showAlert,
        alertController,
        className } = props
    const ani = useRef<HTMLDivElement>(null)
    const classes = ClassNames('alert-fullscreen',className,
        {
            [`alert-${showAlert}`]: showAlert
        })
        return (
            <>
                <Transition in={showAlert} timeout={300} classNames={'alert-background'}>
                    <div ref={ani} className={classes}>

                    </div>
                </Transition>
                <Transition in={showAlert} timeout={300} animation="alert">
                    <div className={'alert-container'}>
                        <div className="alert-container__closer" onClick={alertController}>
                            <img src="//duolingo-forum-web.duolingo.com/images/x.svg" />
                        </div>
                        <div className="alert-content">
                            <h1 className={'alert-content__tittle'}>{tittle}</h1>
                            <div className={'alert-content__section'}>{section}</div>
                            <div className={'alert-content__detail'}>{detail}</div>
                            {children}
                        </div>
                    </div>
                </Transition>
            </>


        )


}
export default Alert
