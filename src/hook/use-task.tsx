import { useEffect, useState } from 'react';
import { crudTask } from '../utils/crud-task';

interface Task {
  created_at: string;
  description: string;
  id: string;
  tarea: string;
}

export const useTask = () => {
  const [task, setTask] = useState<Task[]>([]);

  useEffect(() => {
    crudTask('task')
      .getTasks()
      .then((data) => setTask(data));

    crudTask('task-date').getTasks().then(console.log);
  }, []);

  return { task };
};
