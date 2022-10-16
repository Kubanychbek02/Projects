import * as React from 'react'
import {useState} from 'react'
import {ChevronLeft,Notifications, Security} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps, Button,
  IconButton, Menu, MenuItem,
  styled,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material'

import {useActions, useAppSelector} from 'src/hooks'
import {userSignOutAction} from 'src/store'
import { NavLink } from 'react-router-dom'

export const drawerWidth = 300

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

interface IProps {
  open: boolean
  handleDrawerOpen: () => void
}

export const NavBar = ({handleDrawerOpen, open}: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const user = useAppSelector((state) => state.user?.user)
  const dropdownOpen = Boolean(anchorEl)
  const {signOut} = useActions({
    signOut: userSignOutAction,
  })
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    signOut()
    setAnchorEl(null)
  }

  return (
    <AppBar color='inherit' position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{mr: 2, ...(open && {display: 'none'})}}
        >
          <MenuIcon />
        </IconButton>
        {!open && (
          <div style={{display: 'flex'}}>
            <Security transform='scale(1.5)' sx={iconStyles} />
            <Typography sx={{marginLeft: '15px'}} fontWeight='bold' variant='h6' noWrap component='div'>
              Безопасный город
            </Typography>
          </div>
        )}
        <div style={{margin: 'auto 0 auto auto', display: 'flex'}}>
          <Notifications sx={iconStyles} />
          <Button
            id='basic-button'
            aria-controls={dropdownOpen ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={dropdownOpen ? 'true' : undefined}
            onClick={handleClick}
          >
            <img style={{borderRadius: '50%', height: '30px', width: '22.500px', margin: 'auto 5px auto 20px'}}
                 src={`data:image/png;base64,${user?.inn}`} alt='user-logo' />
            <Typography sx={{margin: 'auto 0'}} textTransform='initial' fontWeight='normal'>
              {user?.name}, ${user?.surname}
            </Typography>
            <ChevronLeft sx={{transform: `rotate(${dropdownOpen ? 90 : 270}deg)`}} />
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={dropdownOpen}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <NavLink to='/profile'>
              <MenuItem>Личный кабинет</MenuItem>
            </NavLink>
            <MenuItem onClick={handleClose}>Выйти</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const iconStyles = (theme: Theme) => ({
  margin: 'auto 0',
  color: theme.palette.grey[700]
})
