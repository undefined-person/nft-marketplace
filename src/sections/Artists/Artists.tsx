import { Button } from 'common/Button'

import NFT1 from 'assets/images/nft/nft-1.jpg'
import NFT2 from 'assets/images/nft/nft-2.jpg'
import NFT3 from 'assets/images/nft/nft-3.jpg'
import NFT4 from 'assets/images/nft/nft-4.jpg'
import NFT5 from 'assets/images/nft/nft-5.jpg'

import Abraham from 'assets/images/artists/abraham.png'
import Cristio from 'assets/images/artists/cristio.png'
import Osvaldo from 'assets/images/artists/osvaldo.png'
import Ranson from 'assets/images/artists/ranson.png'
import Sebastian from 'assets/images/artists/sebastian.png'

import { IArtist, Artist } from './components/Artist/Artist'

import cls from './styles.module.scss'

const artists: Array<IArtist> = [
  {
    avatar: Osvaldo,
    name: 'Osvaldo Percy',
    image: NFT1,
  },
  {
    avatar: Ranson,
    name: 'Ranson Sqiure',
    image: NFT2,
  },
  {
    avatar: Sebastian,
    name: 'Sebastian Waltan',
    image: NFT3,
  },
  {
    avatar: Abraham,
    name: 'Abraham Zack',
    image: NFT4,
  },
  {
    avatar: Cristio,
    name: 'Cristio Leo',
    image: NFT5,
  },
]

export const Artists = () => (
  <section className={cls.artists}>
    <div className={cls.header}>
      <h2 className={cls.title}>
        Popular
        {' '}
        <span className="primary">Artists</span>
        {' '}
        On This Week
      </h2>
      <Button>
        See all
      </Button>
    </div>
    <div className={cls.content}>
      {artists.map((artist) => (
        <Artist
          className={cls.artist}
          key={artist.name}
          artist={artist}
        />
      ))}
    </div>
  </section>
)
