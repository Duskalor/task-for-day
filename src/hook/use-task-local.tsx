import { useState } from 'react';
import { tasksLocal } from '../utils/crud-local-task';
import { useCalendar } from '@context/calendar-context';

export const dayRouting = [
  {
    id: crypto.randomUUID(),
    day: new Date(),
    ids_tasks: ['1'],
  },
];
function soloFecha(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export const useTaskLocal = () => {
  const { value } = useCalendar();
  const [tasks] = useState(tasksLocal);
  const [day, setDay] = useState(dayRouting);

  const today = day.find(
    (v) => soloFecha(v.day).getTime() === soloFecha(value as Date).getTime()
  );

  const handleChange = (id: string) => {
    if (!today) return;
    if (today.ids_tasks.includes(id)) {
      today.ids_tasks = today.ids_tasks.filter((v) => v !== id);
      setDay((prev) => prev.map((v) => (v.day === value ? today : v)));
      return;
    }
    today.ids_tasks.push(id);
    setDay((prev) => prev.map((v) => (v.day === value ? today : v)));
  };
  return {
    tasks: tasks.map((d) => ({
      ...d,
      completed: today?.ids_tasks.includes(d.id) ?? false,
    })),
    handleChange,
  };
};
