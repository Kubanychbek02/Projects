import {useMemo} from 'react'
import { useTranslation } from 'react-i18next'
import {ChevronLeft, ChevronRight,Security} from '@mui/icons-material'
import {Divider, Drawer, IconButton, List, Theme, Typography} from '@mui/material'
import {styled, useTheme} from '@mui/material/styles'

import {drawerWidth} from 'src/components'
import {ROUTES} from 'src/route-config'

import {SideBarRow} from './row'

export const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface IProps {
  open: boolean
  handleDrawerClose: () => void
}

export const SideBar = ({handleDrawerClose, open}: IProps) => {
  const theme = useTheme()
  const {t} = useTranslation()
  const routes = useMemo(() => ROUTES.filter((it) => it.display), [])

  return (
    <Drawer
      sx={drawerStyles}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <DrawerHeader style={{minHeight: '120px'}} sx={{overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
        <IconButton size='small' sx={buttonStyles} onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> :
            <ChevronRight />}
        </IconButton>
        <Security transform='scale(1.5)' sx={{color: 'white'}} />
        <Typography color='white' sx={{margin: '5px auto 0', fontWeight: 'bold'}} variant='h6' noWrap component='div'>
          {t('name')}
        </Typography>
      </DrawerHeader>
      <Divider color='gray' />
      <List sx={muiListStyles}>
        {routes.map((route) => <SideBarRow key={route.path} route={route} />)}
      </List>
    </Drawer>
  )
}

const muiListStyles = (theme: Theme) => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: theme.palette.common.black,
    outline: `1px solid ${theme.palette.grey}`
  }
})

const buttonStyles = (theme: Theme) => ({
  marginLeft: 'auto',
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey['500'],
  }
})

const drawerStyles = (theme: Theme) => ({
  width: drawerWidth,
  overflow: 'hidden',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.dark,
    width: drawerWidth,
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
})
