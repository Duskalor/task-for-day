export const tasksLocal = [
  {
    completed: false,
    created_at: '2022-03-01T00:00:00.000Z',
    description: 'Task description',
    id: '1',
    name: 'doing something',
    task_id: '1',
  },
  {
    completed: false,
    created_at: '2022-03-02T00:00:00.000Z',
    description: 'Task description',
    id: '2',
    name: 'aaaa',
    task_id: crypto.randomUUID(),
  },
  {
    completed: false,
    created_at: '2022-03-03T00:00:00.000Z',
    description: 'Task description',
    id: '3',
    name: 'ssss',
    task_id: crypto.randomUUID(),
  },
  {
    completed: false,
    created_at: '2022-03-04T00:00:00.000Z',
    description: 'Task description',
    id: '4',
    name: 'cmr',
    task_id: crypto.randomUUID(),
  },
];

export const crudLocalTasks = () => {
  return tasksLocal;
};
