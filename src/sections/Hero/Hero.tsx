import classNames from 'classnames'

import { Button, ButtonTheme } from 'common/Button'
import { Card } from 'common/Card'

import HeroImage from 'assets/images/hero.png'
import { ReactComponent as Artwork } from 'assets/images/icons/artwork.svg'

import { IStatsItem, StatsItem } from './components/StatsItem/StatsItem'

import cls from './styles.module.scss'

const statsItems: Array<IStatsItem> = [
  {
    title: 'Art works',
    count: 8.9,
  },
  {
    title: 'Artists',
    count: 65,
  },
  {
    title: 'Collections',
    count: 87,
  },
]

export const Hero = () => (
  <section className={classNames(cls.hero, {}, ['grid'])}>
    <div className={cls.content}>
      <h1 className={cls.title}>
        Discover and Collect The Best NFTs
        {' '}
        <span className="primary">Digital Art.</span>
      </h1>
      <p className={cls.descr}>
        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
        Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
      </p>
      <div className={cls.buttons}>
        <Button>
          Explore Now
        </Button>
        <a href="#">
          Learn More
        </a>
      </div>
      <div className={cls.stats}>
        {
          statsItems.map((item) => (
            <StatsItem
              item={item}
              key={item.title}
            />
          ))
        }
      </div>
    </div>
    <div className={cls.heroBlock}>
      <img
        className={cls.heroImg}
        src={HeroImage}
        width="464px"
        height="544px"
        alt="Hero"
      />
      <Artwork className={cls.artwork} />
      <Card className={cls.card}>
        <div className={cls.cardHeader}>
          <div className={cls.cardItem}>
            <span className={cls.cardTitle}>Ends in</span>
            <span className={cls.cardValue}>05:45:47</span>
          </div>
          <div className={cls.cardItem}>
            <span className={cls.cardTitle}>Current bid</span>
            <span className={cls.cardValue}>0.24ETH</span>
          </div>
        </div>
        <Button theme={ButtonTheme.SECONDARY}>
          Place A Bid
        </Button>
      </Card>
    </div>
  </section>
)
