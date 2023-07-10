import classNames from 'classnames'

import cls from './styles.module.scss'

export interface IArtist {
  image: string
  name: string
  avatar: string
}

interface ArtistProps {
  artist: IArtist
  className: string
}

export const Artist = ({ artist, className }: ArtistProps) => {
  const { avatar, name, image } = artist

  return (
    <div className={classNames(cls.artist, {}, [className])} style={{ backgroundImage: `url(${image})` }}>
      <img
        className={cls.avatar}
        src={avatar}
        width={48}
        height={48}
        alt={name}
        loading="lazy"
      />
      <div>
        <span className={cls.title}>Owner</span>
        <h3 className={cls.name}>{name}</h3>
      </div>
    </div>
  )
}
