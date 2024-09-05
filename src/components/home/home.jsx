import React from 'react';
import './home.css';

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const RecycleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const InfoCard = ({ icon, title, description }) => (
  <div className="info-card">
    <div className="icon">{icon}</div>
    <h2>{title}</h2>
    {typeof description === 'string' ? (
      <p>{description}</p>
    ) : (
      description
    )}
  </div>
);

const HomePage = () => {
  return (


    <div className="home-page">
      <header className="welcome-section">
        <div className="content">
          <h1>Bienvenido a Nuestra Tienda</h1>
          <button className="cta-button">Conocer Productos</button>
        </div>
      </header>

      <section className="info-section">
        <InfoCard
          icon={<ShoppingBagIcon />}
          title="Productos naturales"
          description="Todos nuestros productos vienen del mejor suelo del campo"
        />
        <InfoCard
          icon={<DollarSignIcon />}
          title="Precios económicos"
          description="Manejamos precios ajustados para tu beneficio"
        />
        <InfoCard
          icon={<PackageIcon />}
          title="Tus pedidos"
          description="Todos tus pedidos en un mismo paquete"
        />
        <InfoCard
          icon={<TruckIcon />}
          title="Envíos"
          description={
            <ul>
              <li>Envíos gratis en el municipio</li>
              <li>Muy pronto envíos a todo Colombia</li>
            </ul>
          }
        />
        <InfoCard
          icon={<RecycleIcon />}
          title="Empaques reutilizables"
          description="Utilizamos botellas de vidrio y empaques de papel para disminuir la contaminación."
        />
      </section>

      <section className="all-in-one-section">
        <div className="content">
          <h2>Todo lo que necesitas en un solo lugar</h2>
          <p>Encuentra todos nuestros productos naturales y económicos aquí mismo.</p>
          <button className="cta-button">Conocer Productos</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;