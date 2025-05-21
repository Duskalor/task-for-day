import { useState } from 'react';
import { tasksLocal } from '../utils/crud-local-task';
import { useCalendar } from '@context/calendar-context';
import dayjs from 'dayjs';
import { dayRouting } from '../data/day-routing';

function soloFecha(date: Date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export const useTaskLocal = () => {
  const { value } = useCalendar();

  const [tasks] = useState(tasksLocal);
  const [day, setDay] = useState(dayRouting);
  const today = soloFecha(value as Date) === soloFecha(new Date());

  const findDay = day.find(
    (v) => soloFecha(v.day as Date) === soloFecha(value as Date)
  );

  const handleChange = (id: string) => {
    if (!findDay) {
      setDay([
        ...day,
        { id: crypto.randomUUID(), day: value as Date, ids_tasks: [] },
      ]);
    }
    if (!findDay) return;
    if (findDay.ids_tasks.includes(id)) {
      findDay.ids_tasks = findDay.ids_tasks.filter((v) => v !== id);
      setDay((prev) => prev.map((v) => (v.day === value ? findDay : v)));
      return;
    }
    findDay.ids_tasks.push(id);
    setDay((prev) => prev.map((v) => (v.day === value ? findDay : v)));
  };
  return {
    today,
    tasks: tasks.map((d) => ({
      ...d,
      completed: findDay?.ids_tasks.includes(d.id) ?? false,
    })),
    handleChange,
  };
};
