import React, { useState } from 'react'
import {Form, Input, Button} from 'antd'
import { useTypeSelector } from '../hooks/UseTypeSelector'
import { useActions } from '../hooks/UseActions'

export const LoginForm = () => {
    const {error, isLoading} = useTypeSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }
  return (
    <Form onFinish={submit}>
        {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
