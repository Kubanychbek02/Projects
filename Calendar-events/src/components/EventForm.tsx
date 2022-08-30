import React, { FC, useState } from 'react'
import {Form, Input, DatePicker, Button, Row, Select} from 'antd'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/date'
import {Moment} from 'moment'
import { useTypeSelector } from '../hooks/UseTypeSelector'

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

export const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest:''
  })

  const {user} = useTypeSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if(date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Desc"
        name="username"
        rules={[{ required: true, message: 'Please input your text!' }]}
      >
        <Input onChange={e => setEvent({...event, description: e.target.value})} value={event.description} />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[{ required: true, message: 'Please input your text!' }]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[{ required: true, message: 'Please input your text!' }]}
      >
        <Select onChange={(guest: string) => setEvent({...event, guest})}>
            {props.guests.map(guest =>
                <Select.Option key={guest.username} value={guest.username}>
                    {}
                </Select.Option>    
            )}
        </Select>
      </Form.Item>
      
      <Row justify='end'>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Create
            </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
