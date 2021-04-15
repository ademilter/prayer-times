import useInterval from './useInterval'
import { DateTime } from 'luxon'
import { useState, useEffect } from 'react'

function getDate(date) {
  return DateTime.fromFormat(date, 'dd.LL.yyyy hh:mm')
}

export default function useTimer(data) {
  const [time, timeSet] = useState(null)
  const [timer, timerSet] = useState(null)
  const [error, errorSet] = useState(
    'Veri okunamıyor. İnternetiniz açıkken sayfayı yenileyin.'
  )

  useEffect(() => {
    if (data) errorSet(null)
  }, [])

  useInterval(
    () => {
      const now = DateTime.now()
      // saati ileri veya geri alamk için kullanılabilir
      // DateTime.now().plus({ hour: 2 })
      // DateTime.now().minus({ hour: 3 })

      const today = data.find((day) => {
        const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
        return date.hasSame(DateTime.local(), 'day')
      })

      // eğer mevcut vakit Yatsi ise ve 00:00'dan önce ise sonraki günün Imsak vaktine ihtiyaç var
      const tomorrow = data.find((day) => {
        const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
        return date.hasSame(DateTime.local().plus({ days: 1 }), 'day')
      })

      if (!today || !tomorrow) {
        errorSet(
          'Güncel veriye ulaşılamıyor.İnternetiniz açıkken sayfayı yenileyin.'
        )
      }

      // vakitleri luxon formatına çeviriyor
      const todayImsak = getDate(
        `${today.MiladiTarihKisaIso8601} ${today.Imsak}`
      )
      const todayGunes = getDate(
        `${today.MiladiTarihKisaIso8601} ${today.Gunes}`
      )
      const todayOgle = getDate(`${today.MiladiTarihKisaIso8601} ${today.Ogle}`)
      const todayIkindi = getDate(
        `${today.MiladiTarihKisaIso8601} ${today.Ikindi}`
      )
      const todayAksam = getDate(
        `${today.MiladiTarihKisaIso8601} ${today.Aksam}`
      )
      const todayYatsi = getDate(
        `${today.MiladiTarihKisaIso8601} ${today.Yatsi}`
      )
      const tomorrowImsak = getDate(
        `${tomorrow.MiladiTarihKisaIso8601} ${tomorrow.Imsak}`
      )

      const isImsak = now < todayGunes && now > todayImsak
      const isGunes = now < todayOgle && now > todayGunes
      const isOgle = now < todayIkindi && now > todayOgle
      const isIkindi = now < todayAksam && now > todayIkindi
      const isAksam = now < todayYatsi && now > todayAksam
      const isYatsi = now < tomorrowImsak && now > todayYatsi

      let time

      if (isImsak)
        time = {
          current: 'Imsak',
          next: 'Gunes',
          nextDate: todayGunes
        }
      else if (isGunes)
        time = {
          current: 'Gunes',
          next: 'Ogle',
          nextDate: todayOgle
        }
      else if (isOgle)
        time = {
          current: 'Ogle',
          next: 'Ikindi',
          nextDate: todayIkindi
        }
      else if (isIkindi)
        time = {
          current: 'Ikindi',
          next: 'Aksam',
          nextDate: todayAksam
        }
      else if (isAksam)
        time = {
          current: 'Aksam',
          next: 'Yatsi',
          nextDate: todayYatsi
        }
      else if (isYatsi)
        time = {
          current: 'Yatsi',
          next: 'Imsak',
          nextDate: tomorrowImsak
        }

      time = { ...time, today, tomorrow }

      // sonraki vakte kalan süre
      const timer = time.nextDate
        .diff(now, ['hours', 'minutes', 'seconds'])
        .toObject()

      timeSet(time)
      timerSet(timer)
    },
    error ? null : 1000
  )

  return [time, timer, error]
}
