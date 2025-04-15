import 'react-calendar/dist/Calendar.css';
import { createPortal } from 'react-dom';
import { useOpenTask } from '../hook/use-open-task';

export const NewTask = () => {
  const { open, handleOpen } = useOpenTask();

  return (
    <div>
      <div className='flex justify-end'>
        <button
          className='mt-2 px-5 py-2 border rounded-xl cursor-pointer'
          onClick={handleOpen}
        >
          Agregar Tarea
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className='absolute inset-0  bg-[#F3F3F1]/70  flex justify-center items-center'
            onClick={handleOpen}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='border border-black rounded'
            >
              <form className='w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  Agregar nueva tarea
                </h2>

                <div>
                  <label
                    htmlFor='task'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Nombre de la tarea
                  </label>
                  <input
                    type='text'
                    id='task'
                    name='task'
                    placeholder='Escribe tu tarea...'
                    className='outline-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 '
                    required
                  />
                </div>

                <div className='flex items-center justify-between'>
                  <button
                    type='submit'
                    className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium'
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
