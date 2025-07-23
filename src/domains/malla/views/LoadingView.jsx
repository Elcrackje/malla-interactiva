// Domain View: Vista de loading específica para malla
// Skeleton de la estructura de malla y placeholder content
import Loading from '../../../shared/components/Loading';

const LoadingView = () => (
  <div className="p-8">
    <Loading type="skeleton" size={10} className="w-full h-8 mb-4" />
    <Loading type="skeleton" size={8} className="w-full h-6 mb-2" />
    <Loading type="skeleton" size={8} className="w-full h-6 mb-2" />
    <Loading type="progress" className="my-6" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {[...Array(6)].map((_, i) => (
        <Loading key={i} type="skeleton" size={6} className="h-20" />
      ))}
    </div>
  </div>
);

export default LoadingView;

