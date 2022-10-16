import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Paper, TextField } from '@mui/material'
import * as yup from 'yup'

import { AppTable, HeadCell } from 'src/components/app-table'
import { CellRender } from 'src/components/cell-render'
import { dateWithFormat } from 'src/helpers/date'
import { Path, request } from 'src/utils'

export const EmployesTable = () => {
  const form = useForm({resolver: yupResolver(shema)})
  const [filter, setFilter] = useState<any>()
  const {register, handleSubmit, reset, formState: {errors, dirtyFields}} = form

  const onSubmit = async (formData: FieldValues) => {
    const body = {
      filter: {
        ...formData
      },
      pageRequest: {
        limit: 1,
        page: 1
      },
    }
    console.log(body);
    
    const res = await request('POST', Path.Employees.search, {body}, true)
    setFilter(res && res)
  }
  console.log(filter);
  
  return (
    <div>
        <NavLink to='/add-employe'>
          <Button variant='outlined'>Add employe</Button>
        </NavLink>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper sx={{p: '20px', margin: '20px 0', display: 'flex', flexWrap: 'wrap', gap: '20px'}} elevation={2}>
              <TextField error={!!errors.inn} helperText={`${errors.inn ? errors.inn.message : ''}`} label='inn' size='small' sx={{width: '300px'}} {...register('inn')} />
              <TextField error={!!errors.name} helperText={`${errors.name ? errors.name.message : ''}`} label='name' size='small' sx={{width: '300px'}} {...register('name')} />
              <TextField label='surname' size='small' sx={{width: '300px'}} {...register('surname')} />
              <TextField label='patronymic' size='small' sx={{width: '300px'}} {...register('patronymic')} />
              <TextField label='role' size='small' sx={{width: '300px'}} value='ROLE_ADMIN' {...register('role')} />
              <Button onClick={() => reset()} sx={{mr: '0'}} color='error' variant='contained'>Reset</Button>
              <Button sx={{mr: '0'}} variant='contained'disabled={!dirtyFields.inn} color='info' type='submit'>Submit</Button>
          </Paper>
        </form>
        <AppTable headCells={headCells} list={filter && filter.content} disablePagination />
    </div>
  )
}

const shema = yup.object({
  inn: yup.string().required('inn required').min(14).max(14),
  name: yup.string().required('name req'),
})
const headCells: HeadCell<JudgementHistory>[] = [
    {
      label: '№',
      render: ({rowIdx}) => (rowIdx ? rowIdx + 1 : 1),
    },
    {
      label: 'Вид ',
      render: ({entity}) => (
        <CellRender text={entity.dcJudgementType.judgementType} type='custom' />
      ),
    },
    {
      label: 'Статус ',
      render: ({entity}) => (
        <CellRender
          text={entity.dcJudgementStatus.judgementStatus}
          type='custom'
        />
      ),
    },
    {
      label: 'Основание',
      render: ({entity}) => (
        <CellRender
          text={entity.dcJudgementReason.judgementReason}
          type='custom'
        />
      ),
    }
]