import { useState } from 'react';

const todoList = [
  { id: 1, tarea: 'Comprar pan', completado: false },
  { id: 2, tarea: 'Estudiar JavaScript', completado: true },
  { id: 3, tarea: 'Hacer ejercicio', completado: false },
  { id: 4, tarea: 'Leer 10 páginas de un libro', completado: false },
  { id: 5, tarea: 'Llamar a mamá', completado: true },
];

export const TaskList = () => {
  const [todos, setTodos] = useState(todoList);

  const handleChange = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completado: !todo.completado } : todo
      )
    );
  };

  return (
    <div className='max-w-3xl mx-auto'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='flex  justify-between'>
            <div className='text-3xl'>
              {todo.completado ? <s>{todo.tarea}</s> : todo.tarea}
            </div>

            <label className='flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='hidden'
                checked={todo.completado}
                onChange={() => handleChange(todo.id)}
              />

              <span
                className={`relative flex items-center justify-center w-6 h-6 border-2 rounded-md mr-3 transition-colors duration-200 ${
                  todo.completado
                    ? 'border-red-500 bg-red-500'
                    : 'border-gray-400 bg-white'
                }`}
              >
                <svg
                  className={`w-4 h-4 text-white fill-current transition-transform duration-300 ${
                    todo.completado ? 'scale-100' : 'scale-0'
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                </svg>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
