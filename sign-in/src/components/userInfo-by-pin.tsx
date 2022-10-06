import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
    info: any
    photo: string
    address: string
}
export const UserInfoByPin = ({info, photo, address}: Props) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <Typography variant='h6'>Имя: {info?.name}</Typography>
          <Typography variant='h6'>Фимилия: {info?.surname}</Typography>
          <Typography variant='h6'>Отчество: {info?.patronymic}</Typography>
          <Typography variant='h6'>Дата рождения: {new Date(info?.dateOfBirth).toLocaleDateString()}</Typography>
          <Typography variant='h6'>ИНН: {info?.pin}</Typography>
          <Typography variant='h6'>Адрес: {address}</Typography>
        </Box>
        <Box>
          <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src={`data:image/png;base64,${photo}`} />
        </Box>
    </Box>
  )
}
