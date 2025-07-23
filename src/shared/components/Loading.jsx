// Shared Component: Componente de loading reutilizable
// Diferentes tipos: spinner, skeleton, progress
// Props para personalización

const Loading = ({ type = 'spinner', size = 8, className = '', text = '' }) => {
  if (type === 'skeleton') {
    return (
      <div className={`animate-pulse bg-gray-200 rounded ${className}`} style={{ height: `${size * 8}px` }} />
    );
  }
  if (type === 'progress') {
    return (
      <div className={`w-full bg-gray-200 rounded h-2 ${className}`}>
        <div className="bg-indigo-500 h-2 rounded animate-pulse" style={{ width: '60%' }} />
      </div>
    );
  }
  // Spinner por defecto
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-4 border-indigo-500 border-t-transparent w-${size} h-${size}`} />
      {text && <span className="mt-2 text-gray-500 text-sm">{text}</span>}
    </div>
  );
};

export default Loading;

