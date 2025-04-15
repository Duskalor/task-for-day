import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className=' h-screen p-5 grid grid-rows-[auto_1fr_100px]'>
      <header>
        <h1 className='text-5xl text-center font-bold'>Task for Day</h1>
      </header>
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
};
