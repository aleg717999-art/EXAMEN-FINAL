import React from 'react';
import Encabezado from './componentes/Encabezado';
import Formulario from './componentes/Formulario';
import Filtros from './componentes/Filtros';
import Lista from './componentes/Lista';
import './App.css';

const App: React.FC = () => (
  <main className="escena">
    <div className="petalos-fondo" aria-hidden>
      {Array.from({ length: 8 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}
    </div>
    <section className="tarjeta">
      <Encabezado /><Formulario /><Filtros /><Lista />
    </section>
  </main>
);
export default App;
