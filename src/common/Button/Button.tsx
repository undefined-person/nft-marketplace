import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

import cls from './styles.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className = '',
    theme = ButtonTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}

