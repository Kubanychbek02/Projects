import {useState} from 'react'
import {Link, useMatch} from 'react-router-dom'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import {ListItem, ListItemButton, Theme, Typography} from '@mui/material'

import {RouteData} from 'src/route-config'

interface IProps {
  route: RouteData
}

export const SideBarRow = ({route}: IProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    route.child && setOpen((prev) => !prev)
  }

  const isCurrentRoute = !!useMatch(route.path)

  return (
    <>
      <ListItem key={route.path} disablePadding sx={listItemWrapper(route.isChild, isCurrentRoute)}>
        {!route.child ? (
          <Link to={route.path} style={{width: '100%', textDecoration: 'none'}}>
            <ListItemButton onClick={handleOpen} sx={buttonWrapper(isCurrentRoute)}>
              {route.logo && (
                <div style={{marginRight: '8px', display: 'flex'}}>{route.logo}</div>
              )}
              <Typography fontWeight='bold'>
                {route.title}
              </Typography>
            </ListItemButton>
          </Link>
        ) : (
          <ListItemButton onClick={handleOpen} sx={buttonWrapper(isCurrentRoute)}>
            {route.logo && (
              <div style={{marginRight: '8px', display: 'flex'}}>{route.logo}</div>
            )}
            <Typography fontWeight='bold'>
              {route.title}
            </Typography>
            {route.child && !open && (<ExpandMore sx={{marginLeft: 'auto'}} />)}
            {route.child && open && (<ExpandLess sx={{marginLeft: 'auto'}} />)}
          </ListItemButton>
        )}
      </ListItem>
      {open && route.child?.map((innerRoute) =>
        <SideBarRow route={innerRoute} key={innerRoute.path} />,
      )}
    </>
  )
}

const buttonWrapper = (active?: boolean) => (theme: Theme) => ({
  color: active ? 'rgb(16, 185, 129)' : theme.palette.grey[300],
})

const listItemWrapper = (child?: boolean, active?: boolean) => () => ({
  padding: '4px',
  marginLeft: child ? '15px' : '0',
  marginBottom: '4px',
  backgroundColor: active ? 'rgba(255, 255, 255, 0.08)' : 'inherit',
  borderRadius: active ? '8px' : '0',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '8px'
  }
})
