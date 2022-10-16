import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'

import { useAppSelector } from 'src/hooks'
import { Path, request } from 'src/utils'

export const ProfilePage = () => {
    const [open, setOpen] = useState(false)
    const form = useForm()
    const {register, handleSubmit} = form
    const userData = useAppSelector(state => state.user.user)
    const {t} = useTranslation()
    const onSubmit = (formData: FieldValues) => {
        console.log(formData);
        return request('PUT', Path.ChangePassword.change, {body: formData}, true)
    }
    console.log(userData);
    
  return (
   <>
        <h1>{userData?.name}</h1>
        <Button variant='contained' onClick={() => setOpen(true)}>Изменить</Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Изменить пароль</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField sx={{m: '15px 0'}} size='small' {...register('oldPassword')} label='Old password' />
                    <TextField sx={{mb: '15px'}} size='small' {...register('newPassword')} label='New password' />
                    <Button fullWidth type='submit' onClick={() => setOpen(false)}>Отправить</Button>
                </form>
            </DialogContent>
        </Dialog>
   </>
  )
}
