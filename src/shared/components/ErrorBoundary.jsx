// Shared Component: Error boundary para manejo de errores React
// UI de fallback personalizable y logging de errores

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Logging de errores
    console.error('ErrorBoundary caught:', error, info);
    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">¡Ha ocurrido un error!</h2>
          <p className="text-gray-500 mb-4">{this.state.error?.message || 'Intenta recargar la página.'}</p>
          {this.props.fallback || <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => window.location.reload()}>Recargar</button>}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

