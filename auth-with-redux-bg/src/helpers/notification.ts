import {toast} from 'react-toastify';
import {ToastPosition} from 'react-toastify/dist/types'

type messageTypes = 'error' | 'success'

type Params = {
  message: string
  type: messageTypes
  id?: string
  autoClose?: number
  position?: ToastPosition
}

export const generateMessage = ({message, id, type, autoClose = 3000, position = 'top-right'}: Params) => {
  if (type === 'error') {
    toast.error(Array.isArray(message) ? message.join(', ') : message, {autoClose, toastId: id, position})
  } else if (type === 'success') {
    toast.success(message, {autoClose, toastId: id, position})
  }
}
