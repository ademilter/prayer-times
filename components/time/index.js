import cn from 'classnames'

export default function Time({ children, isCurrent, isNext, vakit, time }) {
  return (
    <div
      className={cn('relative flex items-center min-h-[80px]', {
        'order-1': isNext
      })}
    >
      {children}
      <div className="px-8 py-4">
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
