import styles from './styles.module.css'

export default function Timer({ value }) {
  let pad = (x) => {
    return x < 10 ? '0' + x : x
  }
  return (
    <div className={styles.timer}>
      {pad(value.hours)}:{pad(value.minutes)}:{pad(value.seconds.toFixed(0))}
    </div>
  )
}
