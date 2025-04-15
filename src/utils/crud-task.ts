import supabase from './supabase';

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

  const getTasks = async () => {
    const { data, error } = await supabase.from(table).select('*');
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
  return {
    createTask,
    getTasks,
    deleteTask,
  };
};
