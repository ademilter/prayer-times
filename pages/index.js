import { DateTime } from 'luxon'
import Time from '../components/time'
import Timer from '../components/timer'
import cn from 'classnames'
import DATA from '../lib/data.json'
import useTimer from '../hooks/useTimer'
import { VAKITLER } from '../lib/constant'

function Home({ today }) {
  const [time, timer] = useTimer(today)

  if (!time || !timer)
    // tailwind purge whitelist çalışmadığı için;
    // bu sınıfların silinmemesi için ön tanımlı olarak getiriyorum
    return <div className="Yatsi Aksam Ikindi Ogle Gunes Imsak" />

  return (
    <div className={cn('h-screen grid', [time.current])}>
      {Object.keys(VAKITLER).map((key) => {
        const isCurrent = key === time.current
        const isNext = key === time.next

        return (
          <Time
            key={key}
            isCurrent={isCurrent}
            isNext={isNext}
            vakit={key}
            time={today[key]}
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

  const today = data.find((day) => {
    const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
    return date.hasSame(DateTime.local(), 'day')
  })

  return {
    props: { today },
    // kullanıcı sayısı farketmeksizin günde 1 defa api'ye gider cache'de saklar ve aynı veriyi geri döndürür
    revalidate: 86400 // 24 hours
  }
}

export default Home
