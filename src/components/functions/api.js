import axios from 'axios'
import { idData } from '../config'

export const getData = () => {
  return axios
    .get('https://osh-emulator.fin.cian.ru/offers', {
      headers: { userId: idData.userId },
    })
    .then((result) => result.data)
}
export const postData = () => {
  return axios
    .post('https://osh-emulator.fin.cian.ru/submit', null, {
      headers: { userId: idData.userId },
    })
    .then((result) => result.data)
}
