// Shared Component: Layout base de la aplicación
// Header + Content + Footer
// Sidebar opcional y responsive breakpoints

import HeaderNav from './HeaderNav';

const Layout = ({ children, sidebar = null }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <HeaderNav />
      <div className="flex flex-1 w-full">
        {sidebar && (
          <aside className="hidden md:block w-64 bg-white shadow-lg p-4">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 px-0 py-0 w-full mt-16">
          {/* Elimino cualquier contenedor extra y restricción de ancho, el children será full width */}
          {children}
        </main>
      </div>
      <footer className="bg-white text-center py-3 shadow-inner text-gray-400 text-sm w-full">
        © {new Date().getFullYear()} Malla Interactiva. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
