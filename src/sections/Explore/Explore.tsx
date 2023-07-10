import { Button } from 'common/Button'

import Explore1 from 'assets/images/explore/explore-1.jpg'
import Explore2 from 'assets/images/explore/explore-2.jpg'

import cls from './styles.module.scss'

export const Explore = () => (
  <section className={cls.explore}>
    <div className={cls.content}>
      <h2 className={cls.title}>
        Create And Sell
        Your
        {' '}
        <span className="primary">Best NFTs</span>
      </h2>
      <p className={cls.descr}>
        Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
      </p>
      <div className={cls.navigation}>
        <Button>
          Create Now
        </Button>
        <a href="#">Learn More</a>
      </div>
    </div>
    <div className={cls.images}>
      <img
        className={cls.image}
        src={Explore1}
        alt="Explore 1"
        width={410}
        height={400}
        loading="lazy"
      />
      <img
        className={cls.image}
        src={Explore2}
        alt="Explore 2"
        width={410}
        height={475}
        loading="lazy"
      />
    </div>
  </section>
)
