import React from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

import { Path, request } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const AddEmploye = () => {
  const form = useForm({resolver: yupResolver(shema)})
  const {register, handleSubmit, formState: {errors}} = form

  const onSubmit = async (formData: FieldValues) => {
    console.log(formData);
    const res = await request('POST', Path.Employees.add, {...formData}, true)
  }
  const renderField = (reg: string,) => {
    console.log(errors?.reg);
    
    return <TextField error={!!errors?.reg}  key={reg} sx={{width: '300px'}} label={reg} type={'text'} {...register(reg)} size='small'/>
  }
  return (
    <Container maxWidth='md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={{padding: '20px', textAlign: 'center'}}>
          <Typography variant='h5'>Add employe</Typography>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '15px', margin: '0 auto'}}>
            {infos.map((i) => {
              return (
                <>
                  {renderField(i.name)}
                </>
                // <TextField key={i.name} sx={{width: '300px'}} label={i.label} type={i.type} {...register(i.name)} size='small'/>
              )
            })}
            
          </Box>
          <Button type='submit'>Submit</Button>
        </Paper>
      </form>
    </Container>
  )
}
const shema = yup.object({
  inn: yup.string().required('inn required').min(14).max(14),
  name: yup.string().required('name req'),
})
const infos = [
  {
    name: 'inn',
    type: 'text',
    label: 'inn'
  },
  {
    name: 'name',
    type: 'text',
    label: 'name'
  },
  {
    name: 'patronymic',
    type: 'text',
    label: 'patronymic'
  },
  {
    name: 'dateOfBirth',
    type: 'date',
    label: 'dateOfBirth'
  },
]