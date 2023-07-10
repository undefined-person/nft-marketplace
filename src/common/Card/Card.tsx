import { ReactNode } from 'react'
import classNames from 'classnames'

import cls from './styles.module.scss'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = (props: CardProps) => {
  const { children, className = '' } = props

  return (
    <div className={classNames(cls.card, {}, [className])}>
      {children}
    </div>
  )
}
