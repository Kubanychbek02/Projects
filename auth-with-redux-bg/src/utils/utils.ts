import axios, {AxiosError, Method} from 'axios'
import { generateMessage } from 'src/helpers'

import {store} from 'src/store'
import {getToken} from 'src/utils'

interface RequestData<K> {
  body?: K,
  params?: K,
}

export const request = async <T, K = never>(
  method: Method,
  url: string,
  opts: RequestData<K>,
  withCredentials = true
) => {
  try {
    const res = await axios.request<T>({
      method,
      url,
      data: opts && opts.body,
      params: opts && opts.params,
      headers: withCredentials ? {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${getToken('accessToken')}` || false,
      } : {},
    })
    return res.data
  } catch (err) {
    const error = err as AxiosError
    generateMessage({message: 'Повторите попытку', type: 'error', id: url})
    if (error.response?.status === 401) {
      store.dispatch({
        type: 'user/sign-out'
      })
    }
  }
}
