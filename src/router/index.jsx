// Configuración de React Router
// Rutas: /, /malla, /malla/:careerId
// Lazy loading de components y manejo de 404

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../shared/components/Layout';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import MallaView from '../domains/malla/views/MallaView';

const NotFound = () => (
  <div className="p-8 text-center">
    <h2 className="text-xl font-bold text-red-600 mb-2">404 - Página no encontrada</h2>
    <a href="/" className="text-indigo-500 underline">Volver al inicio</a>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/malla" replace />} />
          <Route path="/malla" element={<MallaView />} />
          <Route path="/malla/:careerId" element={<MallaView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  </BrowserRouter>
);

export default AppRouter;

