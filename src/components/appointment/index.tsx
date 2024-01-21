'use client';

import { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { store } from '@/store';
import View from '@/components/appointment/view';
import Create from '@/components/appointment/create';
import Update from '@/components/appointment/update';
import Toolbar from '@/components/appointment/toolbar';
import { DayEvent, DayEventWrapper } from '@/components/appointment/day-view';
import MonthEvent from '@/components/appointment/month-view';
import { Events as EventsType } from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.scss';

const Appointment = () => {
  const { events, view, form } = useSnapshot(store);
  const localizer = momentLocalizer(moment);

  const components = useMemo(
    () => ({
      toolbar: Toolbar,
      day: {
        event: DayEvent,
        eventWrapper: DayEventWrapper,
      },
      month: {
        event: MonthEvent,
      },
    }),
    []
  );

  return (
    <section className="appointment">
      <Calendar
        events={events as EventsType}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="day"
        components={components}
      />
      {view.showView && <View />}
      {form.showForm.create && <Create />}
      {form.showForm.update && <Update />}
    </section>
  );
};

export default Appointment;
