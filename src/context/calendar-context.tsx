import { createContext, ReactNode, useContext, useState } from 'react';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarType {
  value: Value;
  handleChange: React.Dispatch<React.SetStateAction<Value>>;
}

export const CalendarContext = createContext<CalendarType>({
  value: new Date(),
  handleChange: () => ({}),
});

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarContext value={{ value, handleChange: onChange }}>
      {children}
    </CalendarContext>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error('out of context');
  return context;
};
