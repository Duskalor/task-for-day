const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center  '>
      <div className='flex items-center space-x-2'>
        {/* Spinner animado */}
        <div className='w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
        {/* Texto "Cargando..." */}
        <span className='text-lg font-medium text-gray-800'>Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;
