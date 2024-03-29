import React, { FC } from 'react'
import {Layout, Row, Card} from 'antd'
import { LoginForm } from '../components/LoginForm'

export const Login: FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='hh' >
        <Card>
          <LoginForm/>
        </Card>
      </Row>
    </Layout>
  )
}
