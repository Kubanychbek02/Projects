import React, { FC, useEffect, useState } from 'react'
import {Layout, Row, Button, Modal} from 'antd'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useActions } from '../hooks/UseActions'
import { useTypeSelector } from '../hooks/UseTypeSelector'
import { IEvent } from '../models/IEvent'

export const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const {fetchGuests, createEvent, fetchEvents} = useActions()
  const {guests, events} = useTypeSelector(state => state.event)
  const {user} = useTypeSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <EventCalendar events={events}/>
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal title='Добавить событие' visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}>
        <EventForm submit={addNewEvent} guests={guests}/>
      </Modal>
    </Layout>
  )
}
