import { Task, TaskResponse } from '../hook/use-task';
import supabase from './supabase';

export const fetchDailyTasks = async () => {
  const { data } = await supabase.rpc('initialize_daily_tasks');
  return data
    .map((d: TaskResponse) => ({
      completed: d.task_date_completed,
      created_at: d.task_date_created_at,
      id: d.task_date_id,
      description: d.task_description,
      task_id: d.task_id,
      name: d.task_name,
    }))
    .sort(
      (a: Task, b: Task) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
};

export const crudTask = (table: string) => {
  const createTask = async (task: string) => {
    const { data, error } = await supabase
      .from(table)
      .insert({ task })
      .single();

    if (error) {
      throw error;
    }

    return data;
  };

  const getById = async (id: string) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  };

  const getTasks = async () => {
    const { data, error } = await supabase.from('task-date').select('*');
    console.log(data);
    if (error) {
      throw error;
    }

    return data;
  };

  const deleteTask = async (id: string) => {
    const { data, error } = await supabase.from(table).delete().eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  };

  const updateTask = async (id: string) => {
    const task = await getById(id);
    const newTask = { ...task, completed: !task.completed };
    const { data, error } = await supabase
      .from(table)
      .update(newTask)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  };

  return {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
  };
};
