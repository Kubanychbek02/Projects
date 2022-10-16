import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

import {useActions, useAppSelector} from 'src/hooks'
import {MainLayout} from 'src/layout'
import {ROUTES} from 'src/route-config'
import {userMeAction} from 'src/store'
import {getToken} from 'src/utils'

const routes = ROUTES.map((route) => {
  return route.child ? route.child?.map((innerRoute) =>
      <Route path={innerRoute.path} key={innerRoute.path} element={innerRoute.page} />)
    : <Route path={route.path} key={route.path} element={route.page} />
})

function App() {
  const token = getToken('accessToken')
  const user = useAppSelector((state) => state.user)
  const location = useLocation()

  const {getMe} = useActions({
    getMe: userMeAction,
  })

  // if (!token && !location.pathname.includes('auth')) {
  //   return <Navigate to='/auth/sign-in' />
  // }

  // if (token && !user.user?.id && !user.loading && !user.loaded) {
  //   getMe()
  // }

  // if (user.loaded && !user.loading && user.user?.inn && location.pathname.includes('auth')) {
  //   return <Navigate to='/' />
  // }

  return (
    <MainLayout>
      <ToastContainer />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          {routes}
        </Routes>
      </LocalizationProvider>
    </MainLayout>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
