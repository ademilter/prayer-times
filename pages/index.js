import { DateTime } from 'luxon'
import Time from '../components/time'
import Timer from '../components/timer'
import cn from 'classnames'
import DATA from '../lib/data.json'
import useTimer from '../hooks/useTimer'
import { VAKITLER } from '../lib/constant'


function Home({ today }) {
  const [time, timer] = useTimer(today)
  if (!time || !timer) return null

  return (
    <div className=''>
      <div className={cn('h-screen grid asd', [time.current])}>
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
    </div>
  )
}


export async function getStaticProps() {
  let data = DATA

  if (process.env.NODE_ENV !== 'development') {
    const response = await fetch(
      `${process.env.API_URL}/vakitler?ilce=9541`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-parola': process.env.API_X_PAROLA
        }
      }
    )
    data = await response.json()
  }


  const today = data.find((day) => {
    const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
    return date.hasSame(DateTime.local(), 'day')
  })

  return {
    props: { today },
    revalidate: 86400 // 24 hours
  }
}


export default Home
