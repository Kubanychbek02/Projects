import {FieldValues, useForm} from 'react-hook-form'
import {useTranslation} from "react-i18next";
import {yupResolver} from '@hookform/resolvers/yup'
import { Security } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@mui/material'
import {object, string} from 'yup'

import {useActions, useAppSelector} from 'src/hooks'
import {UserLoginRequestDto, UserLoginResponseModel} from 'src/models'
import {userMeAction} from 'src/store'
import {Path, request, setToken} from 'src/utils'

export const SignInPage = () => {
  const {getMe} = useActions({getMe: userMeAction})
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})
  const userSelector = useAppSelector((state) => state.user)
  const {t} = useTranslation()
  const onSignIn = async (formData: FieldValues) => {
    try {
      const res = await request<UserLoginResponseModel, UserLoginRequestDto>('POST', Path.Auth.signIn, {
        body: {inn: formData.inn, password: formData.password},
      }, false)
      if (res?.authenticationToken && res?.refreshToken) {
        res && setToken(res?.authenticationToken || '', 'accessToken')
        res && setToken(res?.authenticationToken || '', 'refreshToken')
        getMe()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)}>
        <Box sx={{display: 'flex', height: '100vh'}}>
          <FormControl
            component={Paper}
            sx={{
              maxWidth: '600px',
              width: '100%',
              margin: 'auto',
              background: 'white',
              borderRadius: '8px',
            }}
          >
            <Box sx={headBlock}>
              <Box sx={{margin: '0 auto', textAlign: 'center'}}>
                <Security  transform='scale(2.5)' sx={{color: 'white', mb: '10px'}} />
                <Typography color='white' sx={{margin: '5px auto 0', fontWeight: 'bold'}} variant='h5' noWrap component='div'>
                  {t('name')}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '32px',
              }}
            >
              <TextField
                {...register('inn')}
                label={'Логин'}
                error={!!errors.inn}
                placeholder={t('auth.login')}
                helperText={`${errors.inn ? errors.inn.message : ''}`}
                fullWidth
                variant='outlined'
              />
              <TextField
                {...register('password')}
                label={'Пароль'}
                error={!!errors.password}
                variant='outlined'
                placeholder={t('auth.password')}
                helperText={`${errors.password ? errors.password.message : ''}`}
                fullWidth
                type={'password'}
              />
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={t('auth.remember')}
                />
                <Button disabled={userSelector.loading ? true : false} type={'submit'} variant={'contained'}>
                  {t('submit')}
                </Button>
              </Box>
              {userSelector.error && (
                <Card
                  sx={{
                    padding: '12px',
                    backgroundColor: '#e6808a',
                    borderColor: '#DA4453',
                  }}
                >
                  <Typography variant={'h6'}>
                    <b>Внимание!</b> Неправильный логин или пароль.
                  </Typography>
                </Card>
              )}
            </Box>
          </FormControl>
        </Box>
    </form>
    </div>
  )
}


const schema = object().shape({
  inn: string().required('Username is required'),
  password: string().required('Password is required').min(3),
})

const headBlock = (theme: Theme) => ({
  background: theme.palette.primary.main,
  height: '120px',
  padding: '32px 32px 12px 32px',
  boxSizing: 'border-box',
})
