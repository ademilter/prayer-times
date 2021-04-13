import cn from 'classnames'

export default function Time({ children, isCurrent, isNext, vakit, time }) {
  return (
    <div
      className={cn('relative flex items-center px-8 py-2 min-h-[80px]', {
        'order-1': isNext
      })}
    >
      {children}
      <div>
        <div>{vakit}</div>
        <div
          className={cn('text-xl font-bold tabular-nums', {
            'text-2xl': isCurrent || isNext
          })}
        >
          {time}
        </div>
      </div>
    </div>
  )
}
