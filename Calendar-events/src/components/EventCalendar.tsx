import React, { FC } from 'react'
import {Calendar} from 'antd'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { formatDate } from '../utils/date'
import { userSlice } from '../store/reducers/UserSlice'
import { useTypeSelector } from '../hooks/UseTypeSelector'
import { useDispatch } from 'react-redux'
import { EventForm } from './EventForm'
import { useActions } from '../hooks/UseActions'

interface EventCalendarProps {
    events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
  const {count} = useTypeSelector(state => state.shet)
  const {increment, decrement} = userSlice.actions
  const dispatch = useDispatch()
  const {deleteEvent} = useActions()

  const dateCellRender = (value: Moment) => {
    const formateDate = formatDate(value.toDate())
    const currentDayEvents = props.events.length ? props.events.filter(el => el.date === formateDate) : null

    return (
      <div>
        {currentDayEvents?.map((ev, id) => 
          <>
            <div key={id}>{ev.description}</div>
            <button onClick={() => deleteEvent(currentDayEvents)}>del</button>
            <div>

            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>inc</button>
      <button onClick={() => dispatch(decrement(1))}>dec</button>
      <Calendar dateCellRender={dateCellRender} />
    </>
  )
}
