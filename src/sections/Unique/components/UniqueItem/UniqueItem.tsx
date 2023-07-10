import { Card } from 'common/Card'
import { Button, ButtonTheme } from 'common/Button'

import { ReactComponent as EthereumIcon } from 'assets/images/icons/ethereum.svg'
import { ReactComponent as ClockIcon } from 'assets/images/icons/clock.svg'

import cls from './styles.module.scss'

export interface IUniqueItem {
  image: string
  title: string
  price: number
  endsIn: string
}

export interface UniqueItemProps {
  item: IUniqueItem
}

export const UniqueItem = ({ item }: UniqueItemProps) => {
  const {
    image,
    title,
    price,
    endsIn,
  } = item

  return (
    <Card className={cls.unique}>
      <img
        className={cls.image}
        src={image}
        alt={title}
        width={370}
        height={340}
        loading="lazy"
      />
      <div className={cls.info}>
        <h3>{title}</h3>
        <div className={cls.priceContainer}>
          <EthereumIcon />
          <span className={cls.price}>
            {price}
            ETH
          </span>
        </div>
      </div>
      <div className={cls.footer}>
        <div className={cls.endsInContainer}>
          <span className={cls.endsTitle}>Ending in</span>
          <div className={cls.endsInContent}>
            <ClockIcon />
            <span className={cls.endsIn}>{endsIn}</span>
          </div>
        </div>
        <Button theme={ButtonTheme.SECONDARY}>Place a Bid</Button>
      </div>
    </Card>
  )
}
