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
    <header className="bg-indigo-50 shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full px-8 h-16 max-h-16">
        <div className="flex items-center gap-3">
          <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
          <span className="font-extrabold text-2xl text-indigo-700 tracking-wide">Malla Interactiva</span>
        </div>
        <div className="flex gap-6 items-center h-full">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base text-indigo-700 hover:text-indigo-900 font-semibold transition-colors duration-150 px-2 py-1 ${isActive ? 'border-b-2 border-indigo-600' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
