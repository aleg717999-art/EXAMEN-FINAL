import React from 'react';
import { useTienda } from '../store/tienda';
import Tulipan from './Tulipan';

const Encabezado: React.FC = () => {
  const tareas = useTienda((s) => s.tareas);
  const hechas = tareas.filter((t) => t.completada).length;
  const nivel = tareas.length ? hechas / tareas.length : 0;
  return (
    <header className="encabezado">
      <Tulipan nivel={nivel} />
      <div className="titulos">
        <h1>Mi Lista de Tareas</h1>
        <p>{hechas} de {tareas.length} completadas</p>
        <div className="progreso"><span style={{ width: `${nivel * 100}%` }} /></div>
      </div>
    </header>
  );
};
export default Encabezado;
