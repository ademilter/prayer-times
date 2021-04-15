import Time from '../components/time'
import Timer from '../components/timer'
import cn from 'classnames'
import DATA from '../lib/data.json'
import useTimer from '../hooks/useTimer'
import { VAKITLER } from '../lib/constant'
import styles from './index.module.css'

function Home({ data }) {
  const [time, timer, error] = useTimer(data)

  if (error) return <p>{error}</p>
  if (!timer) return <div>loading</div>

  return (
    <div className={cn(styles.container, `pt-${time.current}`)}>
      {Object.keys(VAKITLER).map((key) => {
        const isCurrent = key === time.current
        const isNext = key === time.next

        return (
          <Time
            key={key}
            isCurrent={isCurrent}
            isNext={isNext}
            vakit={key}
            time={time.today[key]}
          >
            {isCurrent && <Timer value={timer} />}
          </Time>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  // development yaparken çok fazla sayfa yenilendiği için sunucuya gitmiyorum
  let data = DATA

  if (process.env.NODE_ENV !== 'development') {
    const response = await fetch(`${process.env.API_URL}/vakitler?ilce=9541`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-parola': process.env.API_X_PAROLA
      }
    })
    data = await response.json()
  }

  return {
    props: { data },
    // kullanıcı sayısı farketmeksizin günde 1 defa api'ye gider cache'de saklar ve aynı veriyi geri döndürür
    revalidate: 86400 // 24 hours
  }
}

export default Home
