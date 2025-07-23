// Shared Component: Navegación principal de la aplicación
// Logo, menú, breadcrumbs
// Responsive design y estado activo de rutas

import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Malla Curricular', path: '/malla' },
];

const HeaderNav = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-indigo-700">Malla Interactiva</span>
        </div>
        <nav className="flex gap-6">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-150 ${isActive ? 'border-b-2 border-indigo-600' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;

