import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'
import ClassNames from 'classnames'

export type ButtonSize = 'tiny' | 'normal' | 'full'
export type ButtonType = 'primary' | 'sub' | 'last' | 'link'
interface CustomButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children: React.ReactNode;
}
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>

const Button: React.FC<ButtonProps> = (props) => {
    const {
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
        'disabled': (btnType === 'link') && disabled
    })

    if (btnType === 'link' && href) {
        return (
            <a href={href} className={classes} {...restProps}>
                {children}
            </a>
        )
    } else {
        return (
            <button disabled={disabled} className={classes} {...restProps}>
                {children}
            </button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: 'primary',
    size: 'tiny'
}
export default Button

