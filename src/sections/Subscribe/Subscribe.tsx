import classNames from 'classnames'

import { Button } from 'common/Button'

import Subscribe1 from 'assets/images/subscribe/subscribe-1.png'
import Subscribe2 from 'assets/images/subscribe/subscribe-2.png'

import cls from './styles.module.scss'

export const Subscribe = () => (
  <section className={classNames(cls.subscribe, {}, 'grid')}>
    <div className={cls.images}>
      <img
        src={Subscribe1}
        alt="Subscribe1"
        width={410}
        height={376}
        loading="lazy"
      />
      <img
        className={cls.mainImage}
        src={Subscribe2}
        alt="Subscribe2"
        width={282}
        height={348}
        loading="lazy"
      />
    </div>
    <div className={cls.content}>
      <h2 className={cls.title}>
        Subscribe And
        {' '}
        <span className="primary">
          get our
          Updates
        </span>
        {' '}
        Every Week
      </h2>
      <p className={cls.descr}>
        We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
      </p>
      <div className={cls.inputWrapper}>
        <input
          className={cls.input}
          type="email"
          placeholder="Enter your email"
        />
        <Button>
          Subscribe
        </Button>
      </div>
    </div>
  </section>
)
