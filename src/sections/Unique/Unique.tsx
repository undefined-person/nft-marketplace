import classNames from 'classnames'

import { Button } from 'common/Button'

import Cyberpunk from 'assets/images/unique/cyberpunk.jpg'
import Charge from 'assets/images/unique/charge.jpg'
import Surgeon from 'assets/images/unique/surgeon.jpg'

import { IUniqueItem, UniqueItem } from './components/UniqueItem/UniqueItem'

import cls from './styles.module.scss'

const uniqueItems: Array<IUniqueItem> = [
  {
    image: Cyberpunk,
    title: 'Cyberpunk Cocomo',
    price: 490,
    endsIn: '03:24:56',
  },
  {
    image: Charge,
    title: 'Charge, Qi tiao yu',
    price: 490,
    endsIn: '03:24:56',
  },
  {
    image: Surgeon,
    title: 'Surgeon, Josh Rife',
    price: 490,
    endsIn: '03:24:56',
  },
]

export const Unique = () => (
  <section className={cls.container}>
    <div className={cls.header}>
      <h2 className={cls.title}>
        <span className="primary">Amazing</span>
        {' '}
        and Super Unique Art of This
        {' '}
        <span className="primary">Week</span>
      </h2>
      <Button>
        See All
      </Button>
    </div>
    <div className={classNames(cls.content, {}, ['grid'])}>
      {
        uniqueItems.map((item) => <UniqueItem item={item} key={item.title} />)
      }
    </div>
  </section>
)
