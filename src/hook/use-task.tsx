import { useEffect, useState, useTransition } from 'react';
import { crudTask, fetchDailyTasks } from '../utils/crud-task';

export interface Task {
  completed: string;
  created_at: string;
  description: string;
  id: string;
  name: string;
  task_id: string;
}
export interface TaskResponse {
  task_date_completed: string;
  task_date_created_at: string;
  task_date_id: string;
  task_description: string;
  task_id: string;
  task_name: string;
}

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      fetchDailyTasks().then(setTasks);
    });
  }, []);

  const handleChange = (id: string) => {
    startTransition(async () => {
      await crudTask('task-date').updateTask(id);
      fetchDailyTasks().then(setTasks);
    });
  };

  return { tasks, handleChange, isPending };
};
