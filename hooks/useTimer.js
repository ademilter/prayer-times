import useInterval from './useInterval'
import { DateTime } from 'luxon'
import { useState } from 'react'

function getDate(date) {
  return DateTime.fromFormat(date, 'dd.LL.yyyy hh:mm')
}

export default function useTimer(today) {
  const [time, timeSet] = useState(null)
  const [timer, timerSet] = useState(null)

  useInterval(() => {
    let time
    const now = DateTime.now()
    // debug mod için saati ileri veya geri alamk için kullanılabilir
    // DateTime.now().minus({ hour: 5 })
    // DateTime.now().plus({ hour: 5 })

    // vakitleri luxon formatına çeviriyor
    const todayImsak = getDate(`${today.MiladiTarihKisaIso8601} ${today.Imsak}`)
    const todayGunes = getDate(`${today.MiladiTarihKisaIso8601} ${today.Gunes}`)
    const todayOgle = getDate(`${today.MiladiTarihKisaIso8601} ${today.Ogle}`)
    const todayIkindi = getDate(
      `${today.MiladiTarihKisaIso8601} ${today.Ikindi}`
    )
    const todayAksam = getDate(`${today.MiladiTarihKisaIso8601} ${today.Aksam}`)
    const todayYatsi = getDate(`${today.MiladiTarihKisaIso8601} ${today.Yatsi}`)

    // vakitlerin sırası önemli
    const isYatsi = now < todayImsak
    const isImsak = now < todayGunes
    const isGunes = now < todayOgle
    const isOgle = now < todayIkindi
    const isIkindi = now < todayAksam
    const isAksam = now < todayYatsi

    // ilk başta yatsı'nın olmasının sebebi gece 00:00'dan sonra hesaplama problemi
    if (isYatsi)
      time = { current: 'Yatsi', next: 'Imsak', nextDate: todayImsak }
    else if (isImsak)
      time = { current: 'Imsak', next: 'Gunes', nextDate: todayGunes }
    else if (isGunes)
      time = { current: 'Gunes', next: 'Ogle', nextDate: todayOgle }
    else if (isOgle)
      time = { current: 'Ogle', next: 'Ikindi', nextDate: todayIkindi }
    else if (isIkindi)
      time = { current: 'Ikindi', next: 'Aksam', nextDate: todayAksam }
    else if (isAksam)
      time = { current: 'Aksam', next: 'Yatsi', nextDate: todayYatsi }

    // sonraki vakte kalan süre
    const timer = time.nextDate
      .diff(now, ['hours', 'minutes', 'seconds'])
      .toObject()

    timeSet(time)
    timerSet(timer)
  }, 1000)

  return [time, timer]
}
