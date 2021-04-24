import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'
import ClassNames from 'classnames'
import Loading from "../Loading/loading";

export type ButtonSize = 'tiny' | 'middle' | 'full'
export type ButtonType = 'none' | 'image' | 'white' | 'ghost' | 'success' | 'primary' | 'error'| 'link' | 'default'
interface CustomButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    isLoading?: boolean,
    href?: string;
    children: React.ReactNode;
}
export type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        isLoading,
        className,
        disabled,
        size,
        btnType,
        href,
        children,
        ...restProps
    } = props

    const classes = ClassNames('btn',className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled,
        'is-loading': isLoading
    })
    const isHidden = ClassNames({
        'is-hidden': isLoading
    })
    if (btnType === 'link' && href) {
        return (
            <a href={href} className={'btn-link'} {...restProps}>
                {children}
            </a>
        )
    } else if (btnType === 'image') {
        return (
            <button className={'btn-image'}>

            </button>
        )
    } else {
        return (
            <button disabled={disabled} className={classes} {...restProps}>
                <Loading spinning={isLoading}>
                    <span className={isHidden}>
                        {children}
                    </span>
                </Loading>
            </button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: 'default',
    size: 'middle'
}
Button.displayName = 'Button'
export default Button

