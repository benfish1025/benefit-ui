import React, { useRef } from 'react'
import ClassNames from 'classnames'

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
    // const [alertDelay, setAlertDelay] = useState(false)
    const ani = useRef<HTMLDivElement>(null)
    // if (showAlert) {
    //     setAlertDelay(showAlert)
    // } else {
    //     console.log(ani.current && ani.current.offsetWidth)
    //     setTimeout(() => {
    //         setAlertDelay(showAlert)
    //     },300)
    // }
    const classes = ClassNames('alert-fullscreen',className,
        {
            [`alert-${showAlert}`]: showAlert
        })
    if (showAlert) {
        return (
            <div ref={ani} className={classes}>
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
            </div>
        )
    } else {
        return null
    }

}
export default Alert
