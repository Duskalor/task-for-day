import { CalendarSelect } from '@components/calendar';
import { NewTask } from '@components/new-task';
import { TaskList } from '@components/task-list';
import { AppLayout } from './layout/app-layout';

function App() {
  return (
    <AppLayout>
      <section className='flex justify-between'>
        <NewTask />
        <CalendarSelect />
      </section>
      <TaskList />
    </AppLayout>
  );
}

export default App;
