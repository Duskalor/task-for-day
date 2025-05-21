import axios from 'axios';

const binId = '678d3932ad19ca34f8f07c67';
const jsonbinApiUrl = `https://api.jsonbin.io/v3/b/${binId}`;
const jsonbinMasterKey =
  '$2b$10$aiK3eoE0khyY4TjJqH6fUu.w9tPxYJhcxP1hK1y5Y4j.u3GqJ.W4'; // Replace with your actual master key

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

export const fetchDayRouting = async () => {
  try {
    const response = await axios.get(jsonbinApiUrl, {
      headers: {
        'X-Master-Key': jsonbinMasterKey,
      },
    });
    return response.data.record;
  } catch (error) {
    console.error('Error fetching day routing:', error);
    return null;
  }
};

export const saveDayRouting = async (data: any) => {
  try {
    await axios.put(
      jsonbinApiUrl,
      { record: data },
      {
        headers: {
          'X-Master-Key': jsonbinMasterKey,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Day routing saved successfully');
  } catch (error) {
    console.error('Error saving day routing:', error);
  }
};

export const createTask = async (task: any) => {
  try {
    const updatedTasks = [...tasksLocal, task];
    await axios.put(
      jsonbinApiUrl,
      { record: updatedTasks },
      {
        headers: {
          'X-Master-Key': jsonbinMasterKey,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Task created successfully');
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const updatedTasks = tasksLocal.filter((task) => task.id !== taskId);
    await axios.put(
      jsonbinApiUrl,
      { record: updatedTasks },
      {
        headers: {
          'X-Master-Key': jsonbinMasterKey,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
