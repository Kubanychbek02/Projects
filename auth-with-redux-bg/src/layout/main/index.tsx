import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Box, styled} from '@mui/material'

import {DrawerHeader, drawerWidth, NavBar, SideBar} from 'src/components'

interface IProps {
  children: React.ReactNode
}

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
  open?: boolean;
}>(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface IProps {
  children: React.ReactNode
}

export function MainLayout({children}: IProps) {
  const [open, setOpen] = useState(true)
  const [renderBars, setRenderBars] = useState(true)
  const location = useLocation()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setRenderBars(!location.pathname.includes('/auth'))
  }, [location.pathname])

  return (
    <>
      {renderBars ? (
        <Box sx={{display: 'flex'}}>
          <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      ) : children}
    </>
  )
}