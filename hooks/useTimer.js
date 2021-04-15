import useInterval from './useInterval'
import { DateTime } from 'luxon'
import { useState } from 'react'

function getDate(date) {
  return DateTime.fromFormat(date, 'dd.LL.yyyy hh:mm')
}

export default function useTimer(today, tomorrow) {
  const [time, timeSet] = useState(null)
  const [timer, timerSet] = useState(null)

  useInterval(() => {
    let temp
    const now = DateTime.now()
    // saati ileri veya geri alamk için kullanılabilir
    // DateTime.now().plus({ hour: 2 })
    // DateTime.now().minus({ hour: 3 })

    // vakitleri luxon formatına çeviriyor
    const todayImsak = getDate(`${today.MiladiTarihKisaIso8601} ${today.Imsak}`)
    const todayGunes = getDate(`${today.MiladiTarihKisaIso8601} ${today.Gunes}`)
    const todayOgle = getDate(`${today.MiladiTarihKisaIso8601} ${today.Ogle}`)
    const todayIkindi = getDate(
      `${today.MiladiTarihKisaIso8601} ${today.Ikindi}`
    )
    const todayAksam = getDate(`${today.MiladiTarihKisaIso8601} ${today.Aksam}`)
    const todayYatsi = getDate(`${today.MiladiTarihKisaIso8601} ${today.Yatsi}`)
    const tomorrowImsak = getDate(
      `${tomorrow.MiladiTarihKisaIso8601} ${tomorrow.Imsak}`
    )

    const isImsak = now < todayGunes && now > todayImsak
    const isGunes = now < todayOgle && now > todayGunes
    const isOgle = now < todayIkindi && now > todayOgle
    const isIkindi = now < todayAksam && now > todayIkindi
    const isAksam = now < todayYatsi && now > todayAksam
    const isYatsi = now < tomorrowImsak && now > todayYatsi

    if (isImsak)
      temp = { current: 'Imsak', next: 'Gunes', nextDate: todayGunes }
    else if (isGunes)
      temp = { current: 'Gunes', next: 'Ogle', nextDate: todayOgle }
    else if (isOgle)
      temp = { current: 'Ogle', next: 'Ikindi', nextDate: todayIkindi }
    else if (isIkindi)
      temp = { current: 'Ikindi', next: 'Aksam', nextDate: todayAksam }
    else if (isAksam)
      temp = { current: 'Aksam', next: 'Yatsi', nextDate: todayYatsi }
    else if (isYatsi)
      temp = { current: 'Yatsi', next: 'Imsak', nextDate: tomorrowImsak }

    // sonraki vakte kalan süre
    const timer = temp.nextDate
      .diff(now, ['hours', 'minutes', 'seconds'])
      .toObject()

    timeSet(temp)
    timerSet(timer)
  }, 1000)

  return [time, timer]
}
