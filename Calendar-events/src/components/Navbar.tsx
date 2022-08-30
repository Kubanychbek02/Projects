import React from 'react';
import {Layout, Row, Menu} from 'antd'
import {Redirect, useHistory} from 'react-router-dom'
import { RouteNames } from '../routes';
import { useTypeSelector } from '../hooks/UseTypeSelector';
import { useActions } from '../hooks/UseActions';

export const Navbar = () => {
    const router = useHistory()
    const {isAuth, user} = useTypeSelector(state => state.auth)
    const {logout} = useActions()

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ?
            <><div style={{color: 'wheat'}}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false} >
                <Menu.Item onClick={logout}>Выйти</Menu.Item>
            </Menu> 
            </>
            :
            <Menu theme='dark' mode='horizontal' selectable={false} >
                <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}>Логин</Menu.Item>
            </Menu>
        }
      </Row>
    </Layout.Header>
  )
}
