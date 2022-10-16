import dayjs from 'dayjs'

const defaultDateFormat = 'DD-MM-YYYY, HH:mm:ss'

export const dateWithFormat = (date: string, format = defaultDateFormat) => dayjs(date).format(format)
