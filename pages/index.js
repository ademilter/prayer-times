import { useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import Time from '../components/time'
import Timer from '../components/timer'
import cn from 'classnames'

export async function getStaticProps() {
  // const response = await fetch(
  //   'https://ezanvakti.herokuapp.com/vakitler?ilce=9541',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-parola': 'ademilter@'
  //     }
  //   }
  // )
  // const data = await response.json()

  const data = [
    {
      Aksam: '19:48',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r1.gif',
      Gunes: '06:21',
      GunesBatis: '19:41',
      GunesDogus: '06:28',
      HicriTarihKisa: '1.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '1 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:51',
      Imsak: '04:50',
      KibleSaati: '12:01',
      MiladiTarihKisa: '13.04.2021',
      MiladiTarihKisaIso8601: '13.04.2021',
      MiladiTarihUzun: '13 Nisan 2021 Salı',
      MiladiTarihUzunIso8601: '2021-04-13T00:00:00.0000000+03:00',
      Ogle: '13:10',
      Yatsi: '21:13'
    },
    {
      Aksam: '19:49',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r2.gif',
      Gunes: '06:20',
      GunesBatis: '19:42',
      GunesDogus: '06:27',
      HicriTarihKisa: '2.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '2 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:51',
      Imsak: '04:48',
      KibleSaati: '12:01',
      MiladiTarihKisa: '14.04.2021',
      MiladiTarihKisaIso8601: '14.04.2021',
      MiladiTarihUzun: '14 Nisan 2021 Çarşamba',
      MiladiTarihUzunIso8601: '2021-04-14T00:00:00.0000000+03:00',
      Ogle: '13:09',
      Yatsi: '21:14'
    },
    {
      Aksam: '19:50',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r3.gif',
      Gunes: '06:18',
      GunesBatis: '19:43',
      GunesDogus: '06:25',
      HicriTarihKisa: '3.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '3 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:52',
      Imsak: '04:47',
      KibleSaati: '12:01',
      MiladiTarihKisa: '15.04.2021',
      MiladiTarihKisaIso8601: '15.04.2021',
      MiladiTarihUzun: '15 Nisan 2021 Perşembe',
      MiladiTarihUzunIso8601: '2021-04-15T00:00:00.0000000+03:00',
      Ogle: '13:09',
      Yatsi: '21:16'
    },
    {
      Aksam: '19:51',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r4.gif',
      Gunes: '06:17',
      GunesBatis: '19:44',
      GunesDogus: '06:24',
      HicriTarihKisa: '4.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '4 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:52',
      Imsak: '04:45',
      KibleSaati: '12:02',
      MiladiTarihKisa: '16.04.2021',
      MiladiTarihKisaIso8601: '16.04.2021',
      MiladiTarihUzun: '16 Nisan 2021 Cuma',
      MiladiTarihUzunIso8601: '2021-04-16T00:00:00.0000000+03:00',
      Ogle: '13:09',
      Yatsi: '21:17'
    },
    {
      Aksam: '19:52',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r5.gif',
      Gunes: '06:15',
      GunesBatis: '19:45',
      GunesDogus: '06:22',
      HicriTarihKisa: '5.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '5 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:52',
      Imsak: '04:43',
      KibleSaati: '12:02',
      MiladiTarihKisa: '17.04.2021',
      MiladiTarihKisaIso8601: '17.04.2021',
      MiladiTarihUzun: '17 Nisan 2021 Cumartesi',
      MiladiTarihUzunIso8601: '2021-04-17T00:00:00.0000000+03:00',
      Ogle: '13:09',
      Yatsi: '21:19'
    },
    {
      Aksam: '19:53',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r6.gif',
      Gunes: '06:14',
      GunesBatis: '19:46',
      GunesDogus: '06:21',
      HicriTarihKisa: '6.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '6 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:53',
      Imsak: '04:41',
      KibleSaati: '12:02',
      MiladiTarihKisa: '18.04.2021',
      MiladiTarihKisaIso8601: '18.04.2021',
      MiladiTarihUzun: '18 Nisan 2021 Pazar',
      MiladiTarihUzunIso8601: '2021-04-18T00:00:00.0000000+03:00',
      Ogle: '13:09',
      Yatsi: '21:20'
    },
    {
      Aksam: '19:54',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/ilkdordun.gif',
      Gunes: '06:12',
      GunesBatis: '19:47',
      GunesDogus: '06:19',
      HicriTarihKisa: '7.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '7 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:53',
      Imsak: '04:39',
      KibleSaati: '12:03',
      MiladiTarihKisa: '19.04.2021',
      MiladiTarihKisaIso8601: '19.04.2021',
      MiladiTarihUzun: '19 Nisan 2021 Pazartesi',
      MiladiTarihUzunIso8601: '2021-04-19T00:00:00.0000000+03:00',
      Ogle: '13:08',
      Yatsi: '21:21'
    },
    {
      Aksam: '19:56',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i1.gif',
      Gunes: '06:11',
      GunesBatis: '19:49',
      GunesDogus: '06:18',
      HicriTarihKisa: '8.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '8 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:53',
      Imsak: '04:37',
      KibleSaati: '12:03',
      MiladiTarihKisa: '20.04.2021',
      MiladiTarihKisaIso8601: '20.04.2021',
      MiladiTarihUzun: '20 Nisan 2021 Salı',
      MiladiTarihUzunIso8601: '2021-04-20T00:00:00.0000000+03:00',
      Ogle: '13:08',
      Yatsi: '21:23'
    },
    {
      Aksam: '19:57',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i2.gif',
      Gunes: '06:09',
      GunesBatis: '19:50',
      GunesDogus: '06:16',
      HicriTarihKisa: '9.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '9 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:54',
      Imsak: '04:35',
      KibleSaati: '12:03',
      MiladiTarihKisa: '21.04.2021',
      MiladiTarihKisaIso8601: '21.04.2021',
      MiladiTarihUzun: '21 Nisan 2021 Çarşamba',
      MiladiTarihUzunIso8601: '2021-04-21T00:00:00.0000000+03:00',
      Ogle: '13:08',
      Yatsi: '21:24'
    },
    {
      Aksam: '19:58',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i3.gif',
      Gunes: '06:08',
      GunesBatis: '19:51',
      GunesDogus: '06:15',
      HicriTarihKisa: '10.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '10 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:54',
      Imsak: '04:33',
      KibleSaati: '12:04',
      MiladiTarihKisa: '22.04.2021',
      MiladiTarihKisaIso8601: '22.04.2021',
      MiladiTarihUzun: '22 Nisan 2021 Perşembe',
      MiladiTarihUzunIso8601: '2021-04-22T00:00:00.0000000+03:00',
      Ogle: '13:08',
      Yatsi: '21:26'
    },
    {
      Aksam: '19:59',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i4.gif',
      Gunes: '06:06',
      GunesBatis: '19:52',
      GunesDogus: '06:13',
      HicriTarihKisa: '11.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '11 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:54',
      Imsak: '04:31',
      KibleSaati: '12:04',
      MiladiTarihKisa: '23.04.2021',
      MiladiTarihKisaIso8601: '23.04.2021',
      MiladiTarihUzun: '23 Nisan 2021 Cuma',
      MiladiTarihUzunIso8601: '2021-04-23T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:27'
    },
    {
      Aksam: '20:00',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i5.gif',
      Gunes: '06:05',
      GunesBatis: '19:53',
      GunesDogus: '06:12',
      HicriTarihKisa: '12.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '12 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:55',
      Imsak: '04:29',
      KibleSaati: '12:04',
      MiladiTarihKisa: '24.04.2021',
      MiladiTarihKisaIso8601: '24.04.2021',
      MiladiTarihUzun: '24 Nisan 2021 Cumartesi',
      MiladiTarihUzunIso8601: '2021-04-24T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:29'
    },
    {
      Aksam: '20:01',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/i6.gif',
      Gunes: '06:03',
      GunesBatis: '19:54',
      GunesDogus: '06:10',
      HicriTarihKisa: '13.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '13 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:55',
      Imsak: '04:28',
      KibleSaati: '12:05',
      MiladiTarihKisa: '25.04.2021',
      MiladiTarihKisaIso8601: '25.04.2021',
      MiladiTarihUzun: '25 Nisan 2021 Pazar',
      MiladiTarihUzunIso8601: '2021-04-25T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:30'
    },
    {
      Aksam: '20:02',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/dolunay.gif',
      Gunes: '06:02',
      GunesBatis: '19:55',
      GunesDogus: '06:09',
      HicriTarihKisa: '14.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '14 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:55',
      Imsak: '04:26',
      KibleSaati: '12:05',
      MiladiTarihKisa: '26.04.2021',
      MiladiTarihKisaIso8601: '26.04.2021',
      MiladiTarihUzun: '26 Nisan 2021 Pazartesi',
      MiladiTarihUzunIso8601: '2021-04-26T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:32'
    },
    {
      Aksam: '20:03',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d1.gif',
      Gunes: '06:01',
      GunesBatis: '19:56',
      GunesDogus: '06:08',
      HicriTarihKisa: '15.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '15 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:56',
      Imsak: '04:24',
      KibleSaati: '12:05',
      MiladiTarihKisa: '27.04.2021',
      MiladiTarihKisaIso8601: '27.04.2021',
      MiladiTarihUzun: '27 Nisan 2021 Salı',
      MiladiTarihUzunIso8601: '2021-04-27T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:33'
    },
    {
      Aksam: '20:04',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d2.gif',
      Gunes: '05:59',
      GunesBatis: '19:57',
      GunesDogus: '06:06',
      HicriTarihKisa: '16.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '16 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:56',
      Imsak: '04:22',
      KibleSaati: '12:06',
      MiladiTarihKisa: '28.04.2021',
      MiladiTarihKisaIso8601: '28.04.2021',
      MiladiTarihUzun: '28 Nisan 2021 Çarşamba',
      MiladiTarihUzunIso8601: '2021-04-28T00:00:00.0000000+03:00',
      Ogle: '13:07',
      Yatsi: '21:35'
    },
    {
      Aksam: '20:05',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d3.gif',
      Gunes: '05:58',
      GunesBatis: '19:58',
      GunesDogus: '06:05',
      HicriTarihKisa: '17.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '17 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:56',
      Imsak: '04:20',
      KibleSaati: '12:06',
      MiladiTarihKisa: '29.04.2021',
      MiladiTarihKisaIso8601: '29.04.2021',
      MiladiTarihUzun: '29 Nisan 2021 Perşembe',
      MiladiTarihUzunIso8601: '2021-04-29T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:36'
    },
    {
      Aksam: '20:06',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d4.gif',
      Gunes: '05:57',
      GunesBatis: '19:59',
      GunesDogus: '06:04',
      HicriTarihKisa: '18.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '18 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:56',
      Imsak: '04:18',
      KibleSaati: '12:07',
      MiladiTarihKisa: '30.04.2021',
      MiladiTarihKisaIso8601: '30.04.2021',
      MiladiTarihUzun: '30 Nisan 2021 Cuma',
      MiladiTarihUzunIso8601: '2021-04-30T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:38'
    },
    {
      Aksam: '20:07',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d5.gif',
      Gunes: '05:55',
      GunesBatis: '20:00',
      GunesDogus: '06:02',
      HicriTarihKisa: '19.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '19 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:57',
      Imsak: '04:17',
      KibleSaati: '12:07',
      MiladiTarihKisa: '01.05.2021',
      MiladiTarihKisaIso8601: '01.05.2021',
      MiladiTarihUzun: '01 Mayıs 2021 Cumartesi',
      MiladiTarihUzunIso8601: '2021-05-01T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:39'
    },
    {
      Aksam: '20:08',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/d6.gif',
      Gunes: '05:54',
      GunesBatis: '20:01',
      GunesDogus: '06:01',
      HicriTarihKisa: '20.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '20 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:57',
      Imsak: '04:15',
      KibleSaati: '12:07',
      MiladiTarihKisa: '02.05.2021',
      MiladiTarihKisaIso8601: '02.05.2021',
      MiladiTarihUzun: '02 Mayıs 2021 Pazar',
      MiladiTarihUzunIso8601: '2021-05-02T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:41'
    },
    {
      Aksam: '20:09',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sondordun.gif',
      Gunes: '05:53',
      GunesBatis: '20:02',
      GunesDogus: '06:00',
      HicriTarihKisa: '21.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '21 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:57',
      Imsak: '04:13',
      KibleSaati: '12:08',
      MiladiTarihKisa: '03.05.2021',
      MiladiTarihKisaIso8601: '03.05.2021',
      MiladiTarihUzun: '03 Mayıs 2021 Pazartesi',
      MiladiTarihUzunIso8601: '2021-05-03T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:42'
    },
    {
      Aksam: '20:10',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd1.gif',
      Gunes: '05:52',
      GunesBatis: '20:03',
      GunesDogus: '05:59',
      HicriTarihKisa: '22.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '22 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:58',
      Imsak: '04:11',
      KibleSaati: '12:08',
      MiladiTarihKisa: '04.05.2021',
      MiladiTarihKisaIso8601: '04.05.2021',
      MiladiTarihUzun: '04 Mayıs 2021 Salı',
      MiladiTarihUzunIso8601: '2021-05-04T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:44'
    },
    {
      Aksam: '20:11',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd2.gif',
      Gunes: '05:50',
      GunesBatis: '20:04',
      GunesDogus: '05:57',
      HicriTarihKisa: '23.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '23 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:58',
      Imsak: '04:09',
      KibleSaati: '12:08',
      MiladiTarihKisa: '05.05.2021',
      MiladiTarihKisaIso8601: '05.05.2021',
      MiladiTarihUzun: '05 Mayıs 2021 Çarşamba',
      MiladiTarihUzunIso8601: '2021-05-05T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:45'
    },
    {
      Aksam: '20:12',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd3.gif',
      Gunes: '05:49',
      GunesBatis: '20:05',
      GunesDogus: '05:56',
      HicriTarihKisa: '24.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '24 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:58',
      Imsak: '04:08',
      KibleSaati: '12:09',
      MiladiTarihKisa: '06.05.2021',
      MiladiTarihKisaIso8601: '06.05.2021',
      MiladiTarihUzun: '06 Mayıs 2021 Perşembe',
      MiladiTarihUzunIso8601: '2021-05-06T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:47'
    },
    {
      Aksam: '20:13',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd4.gif',
      Gunes: '05:48',
      GunesBatis: '20:06',
      GunesDogus: '05:55',
      HicriTarihKisa: '25.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '25 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:58',
      Imsak: '04:06',
      KibleSaati: '12:09',
      MiladiTarihKisa: '07.05.2021',
      MiladiTarihKisaIso8601: '07.05.2021',
      MiladiTarihUzun: '07 Mayıs 2021 Cuma',
      MiladiTarihUzunIso8601: '2021-05-07T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:48'
    },
    {
      Aksam: '20:15',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd5.gif',
      Gunes: '05:47',
      GunesBatis: '20:07',
      GunesDogus: '05:54',
      HicriTarihKisa: '26.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '26 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:59',
      Imsak: '04:04',
      KibleSaati: '12:10',
      MiladiTarihKisa: '08.05.2021',
      MiladiTarihKisaIso8601: '08.05.2021',
      MiladiTarihUzun: '08 Mayıs 2021 Cumartesi',
      MiladiTarihUzunIso8601: '2021-05-08T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:50'
    },
    {
      Aksam: '20:16',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd6.gif',
      Gunes: '05:46',
      GunesBatis: '20:09',
      GunesDogus: '05:53',
      HicriTarihKisa: '27.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '27 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:59',
      Imsak: '04:03',
      KibleSaati: '12:10',
      MiladiTarihKisa: '09.05.2021',
      MiladiTarihKisaIso8601: '09.05.2021',
      MiladiTarihUzun: '09 Mayıs 2021 Pazar',
      MiladiTarihUzunIso8601: '2021-05-09T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:51'
    },
    {
      Aksam: '20:17',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/sd7.gif',
      Gunes: '05:45',
      GunesBatis: '20:10',
      GunesDogus: '05:52',
      HicriTarihKisa: '28.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '28 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '16:59',
      Imsak: '04:01',
      KibleSaati: '12:11',
      MiladiTarihKisa: '10.05.2021',
      MiladiTarihKisaIso8601: '10.05.2021',
      MiladiTarihUzun: '10 Mayıs 2021 Pazartesi',
      MiladiTarihUzunIso8601: '2021-05-10T00:00:00.0000000+03:00',
      Ogle: '13:06',
      Yatsi: '21:53'
    },
    {
      Aksam: '20:18',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/ictima.gif',
      Gunes: '05:43',
      GunesBatis: '20:11',
      GunesDogus: '05:50',
      HicriTarihKisa: '29.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '29 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '17:00',
      Imsak: '03:59',
      KibleSaati: '12:11',
      MiladiTarihKisa: '11.05.2021',
      MiladiTarihKisaIso8601: '11.05.2021',
      MiladiTarihUzun: '11 Mayıs 2021 Salı',
      MiladiTarihUzunIso8601: '2021-05-11T00:00:00.0000000+03:00',
      Ogle: '13:05',
      Yatsi: '21:54'
    },
    {
      Aksam: '20:19',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/ruyet.gif',
      Gunes: '05:42',
      GunesBatis: '20:12',
      GunesDogus: '05:49',
      HicriTarihKisa: '30.9.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '30 Ramazan 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '17:00',
      Imsak: '03:58',
      KibleSaati: '12:11',
      MiladiTarihKisa: '12.05.2021',
      MiladiTarihKisaIso8601: '12.05.2021',
      MiladiTarihUzun: '12 Mayıs 2021 Çarşamba',
      MiladiTarihUzunIso8601: '2021-05-12T00:00:00.0000000+03:00',
      Ogle: '13:05',
      Yatsi: '21:56'
    },
    {
      Aksam: '20:20',
      AyinSekliURL: 'http://namazvakti.diyanet.gov.tr/images/r1.gif',
      Gunes: '05:41',
      GunesBatis: '20:13',
      GunesDogus: '05:48',
      HicriTarihKisa: '1.10.1442',
      HicriTarihKisaIso8601: null,
      HicriTarihUzun: '1 Şevval 1442',
      HicriTarihUzunIso8601: null,
      Ikindi: '17:00',
      Imsak: '03:56',
      KibleSaati: '12:12',
      MiladiTarihKisa: '13.05.2021',
      MiladiTarihKisaIso8601: '13.05.2021',
      MiladiTarihUzun: '13 Mayıs 2021 Perşembe',
      MiladiTarihUzunIso8601: '2021-05-13T00:00:00.0000000+03:00',
      Ogle: '13:05',
      Yatsi: '21:57'
    }
  ]

  const today = data.find((day) => {
    const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
    return date.hasSame(DateTime.local(), 'day')
  })

  const tomorrow = data.find((day) => {
    const date = DateTime.fromISO(day.MiladiTarihUzunIso8601)
    return date.hasSame(DateTime.local().plus({ day: 1 }), 'day')
  })

  return {
    props: { today, tomorrow },
    revalidate: 86400 // 24 hours
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

function Home({ today }) {
  const [time, timeSet] = useState(null)
  const [timer, timerSet] = useState(null)

  useInterval(() => {
    let time
    const now = DateTime.now() //.plus({ hour: 5 })

    function getDate(date) {
      return DateTime.fromFormat(date, 'dd.LL.yyyy hh:mm')
    }

    const todayImsak = getDate(`${today.MiladiTarihKisaIso8601} ${today.Imsak}`)
    const todayGunes = getDate(`${today.MiladiTarihKisaIso8601} ${today.Gunes}`)
    const todayOgle = getDate(`${today.MiladiTarihKisaIso8601} ${today.Ogle}`)
    const todayIkindi = getDate(
      `${today.MiladiTarihKisaIso8601} ${today.Ikindi}`
    )
    const todayAksam = getDate(`${today.MiladiTarihKisaIso8601} ${today.Aksam}`)
    const todayYatsi = getDate(`${today.MiladiTarihKisaIso8601} ${today.Yatsi}`)

    const isYatsi = now < todayImsak
    const isImsak = now < todayGunes
    const isGunes = now < todayOgle
    const isOgle = now < todayIkindi
    const isIkindi = now < todayAksam
    const isAksam = now < todayYatsi

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

    const a = time.nextDate
      .diff(now, ['hours', 'minutes', 'seconds'])
      .toObject()

    timerSet(a)
    timeSet(time)
  }, 1000)

  if (!time || !timer) return null

  return (
    <div className="">
      <div className={cn('h-screen grid asd', [time.current])}>
        {['Imsak', 'Gunes', 'Ogle', 'Ikindi', 'Aksam', 'Yatsi'].map((key) => {
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

export default Home
