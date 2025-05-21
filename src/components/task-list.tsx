import { useTaskLocal } from '../hook/use-task-local';
import Loading from './loading';
const isPending = false;
export const TaskList = () => {
  // const { tasks, handleChange, isPending } = useTask();
  const { tasks, handleChange, today } = useTaskLocal();

  console.log(today);
  return (
    <div className='max-w-3xl mx-auto h-full'>
      <ul>
        {!isPending ? (
          tasks.map((task) => (
            <li key={task.id} className='flex  justify-between'>
              <div className='text-3xl'>
                {task.completed ? <s>{task.name}</s> : task.name}
              </div>

              <label className='flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  className='hidden'
                  checked={Boolean(task.completed)}
                  onChange={() => handleChange(task.id)}
                  disabled={!today}
                />

                <span
                  className={`relative flex items-center justify-center w-6 h-6 border-2 rounded-md mr-3 transition-colors duration-200 ${
                    task.completed
                      ? 'border-red-500 bg-red-500'
                      : 'border-gray-400 bg-white'
                  }`}
                >
                  <svg
                    className={`w-4 h-4 text-white fill-current transition-transform duration-300 ${
                      task.completed ? 'scale-100' : 'scale-0'
                    }`}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                  </svg>
                </span>
              </label>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};
