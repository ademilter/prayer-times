import cn from 'classnames'
import styles from './styles.module.css'

export default function Time({ children, isCurrent, isNext, vakit, time }) {
  return (
    <div className={cn(styles.time, vakit)}>
      {children}
      <div>
        <div>{vakit}</div>
        <div
          className={cn(styles.value, {
            'text-2xl': isCurrent || isNext
          })}
        >
          {time}
        </div>
      </div>
    </div>
  )
}
