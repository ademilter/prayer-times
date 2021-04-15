import cn from 'classnames'
import LANG from '../../lib/lang'
import styles from './styles.module.css'

export default function Time({ children, isCurrent, isNext, vakit, time }) {
  return (
    <div className={cn(styles.time, vakit)}>
      {children}
      <div>
        <div>{LANG.times[vakit]}</div>
        <div
          className={cn(styles.value, {
            '!text-[1.7rem]': isCurrent || isNext
          })}
        >
          {time}
        </div>
      </div>
    </div>
  )
}
