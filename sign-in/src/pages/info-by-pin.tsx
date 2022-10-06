import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { UserInfoByPin } from '../components/userInfo-by-pin'

export const InfoByPin = () => {
  const location = useLocation()
  const formData: any = location.state
  const info = formData.info
  const address = formData.address
  const photo = formData.photo.photo
  console.log(formData);
  
  return (
    <Container sx={{display: 'flex', justifyContent: 'space-between', margin: '50px'}} maxWidth="lg">
      <Paper sx={{width: '500px', padding: '10px'}} elevation={3}>
        <UserInfoByPin info={info} photo={photo} address={address.address} />
      </Paper>
      <Paper sx={{width: '500px', padding: '10px'}} elevation={3}>
      </Paper>
    </Container>
  )
}
