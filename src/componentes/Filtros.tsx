import React from 'react';
import { useTienda } from '../store/tienda';
import type { Filtro } from '../types/tarea';
import { Lupa } from './Iconos';
const OPCIONES: [Filtro, string][] = [
  ['todas', 'Todas'], ['pendientes', 'Pendientes'], ['completadas', 'Completadas'],
];
const Filtros: React.FC = () => {
  const { filtro, setFiltro, busqueda, setBusqueda } = useTienda();
  return (
    <div className="barra">
      <div className="pastillas">
        {OPCIONES.map(([id, texto]) => (
          <button key={id} onClick={() => setFiltro(id)}
            className={`pastilla ${filtro === id ? 'activa' : ''}`}>{texto}</button>
        ))}
      </div>
      <label className="buscador"><Lupa />
        <input placeholder="Buscar..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
      </label>
    </div>
  );
};
export default Filtros;
