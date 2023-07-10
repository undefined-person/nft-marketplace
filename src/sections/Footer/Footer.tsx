import classNames from 'classnames'

import { ReactComponent as Facebook } from 'assets/images/socials/facebook.svg'
import { ReactComponent as Telegram } from 'assets/images/socials/telegram.svg'
import { ReactComponent as Twitter } from 'assets/images/socials/twitter.svg'
import { ReactComponent as Linkedin } from 'assets/images/socials/linkedin.svg'

import cls from './styles.module.scss'

export const Footer = () => (
  <footer className={cls.footer}>
    <div className={classNames(cls.footerTop, {}, 'grid')}>
      <div className={cls.content}>
        <p className={cls.descr}>
          Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!
        </p>
        <div className={cls.socials}>
          <a href="#">
            <Facebook className={cls.icon} />
          </a>
          <a href="#">
            <Telegram className={cls.icon} />
          </a>
          <a href="#">
            <Twitter className={cls.icon} />
          </a>
          <a href="#">
            <Linkedin className={cls.icon} />
          </a>
        </div>
      </div>
      <div className={cls.info}>
        <div className={cls.column}>
          <h3 className={cls.title}>Explore</h3>
          <ul className={cls.list}>
            <li><a className={cls.link} href="#">Art Sign In</a></li>
            <li><a className={cls.link} href="#">Collectibles</a></li>
            <li><a className={cls.link} href="#">Domain Name</a></li>
            <li><a className={cls.link} href="#">Utility</a></li>
          </ul>
        </div>
        <div className={cls.column}>
          <h3 className={cls.title}>Statistic</h3>
          <ul className={cls.list}>
            <li><a className={cls.link} href="#">Ranking</a></li>
            <li><a className={cls.link} href="#">Collectibles</a></li>
            <li><a className={cls.link} href="#">Activity</a></li>
          </ul>
        </div>
        <div className={cls.column}>
          <h3 className={cls.title}>Company</h3>
          <ul className={cls.list}>
            <li><a className={cls.link} href="#">About Us</a></li>
            <li><a className={cls.link} href="#">Career</a></li>
            <li><a className={cls.link} href="#">Support</a></li>
            <li><a className={cls.link} href="#">Partners</a></li>
          </ul>
        </div>
        <div className={cls.column}>
          <h3 className={cls.title}>Resources</h3>
          <ul className={cls.list}>
            <li><a className={cls.link} href="#">Help Center</a></li>
            <li><a className={cls.link} href="#">Platform Status</a></li>
            <li><a className={cls.link} href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className={cls.footerBottom}>
      <p className={cls.copy}>© Copyright 2023 - davixq</p>
      <ul className={cls.terms}>
        <li><a className={cls.link} href="#">Privacy Policy</a></li>
        <li><a className={cls.link} href="#">Terms of Service</a></li>
      </ul>
    </div>
  </footer>
)
