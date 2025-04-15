import supabase from './supabase';

export const createTask = async (task: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert({ task })
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const getTasks = async () => {
  const { data, error } = await supabase.from('task').select('*');

  if (error) {
    throw error;
  }

  return data;
};

export const deleteTask = async (id: string) => {
  const { data, error } = await supabase.from('tasks').delete().eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};
