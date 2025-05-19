import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useCalendar } from '../context/calendar-context';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export const CalendarSelect = () => {
  const { value, handleChange } = useCalendar();
  const [open, setopen] = useState(false);
  return (
    <div className=''>
      <div>
        <button
          className='mt-2 px-5 py-2 border rounded-xl cursor-pointer'
          onClick={() => setopen((prev) => !prev)}
        >
          {new Intl.DateTimeFormat('default', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(value instanceof Date ? value : new Date())}
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className='absolute inset-0  bg-[#F3F3F1]/70  flex justify-center items-center'
            onClick={() => setopen((prev) => !prev)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Calendar
                onChange={handleChange}
                onClickDay={() => setopen((prev) => !prev)}
                value={value}
                maxDate={new Date()}
                minDate={new Date()}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
