import { Button } from 'common/Button'

import cls from './styles.module.scss'

export const Header = () => (
  <header className={cls.header}>
    <nav>
      <ul className={cls.navList}>
        <li><a className={cls.link} href="#">Marketplace</a></li>
        <li><a className={cls.link} href="#">Artists</a></li>
        <li><a className={cls.link} href="#">Community</a></li>
        <li><a className={cls.link} href="#">Collections</a></li>
      </ul>
    </nav>
    <Button>
      Contact
    </Button>
  </header>
)
