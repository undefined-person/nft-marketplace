import cls from './styles.module.scss'

export interface IStatsItem {
  title: string
  count: number
}

interface StatsItemProps {
  item: IStatsItem
}

export const StatsItem = ({ item }: StatsItemProps) => {
  const { title, count } = item
  return (
    <div className={cls.stat}>
      <p className={cls.count}>
        <span className="primary">{count}</span>
        K
      </p>
      <h3 className={cls.title}>{title}</h3>
    </div>
  )
}
