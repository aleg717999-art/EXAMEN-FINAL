import React from 'react';
import { useTienda } from '../store/tienda';
import TareaItem from './TareaItem';

const Lista: React.FC = () => {
  const { tareas, filtro, busqueda } = useTienda();
  const visibles = tareas.filter((t) =>
    (filtro === 'todas' || (filtro === 'completadas') === t.completada) &&
    t.titulo.toLowerCase().includes(busqueda.toLowerCase()));
  if (!visibles.length) {
    return <p className="vacio">🌷 No hay tareas para mostrar. Escribe una arriba y presiona Agregar.</p>;
  }
  return (
    <ul className="lista">
      {visibles.map((t, i) => <TareaItem key={t.id} tarea={t} retraso={Math.min(i, 8) * 70} />)}
    </ul>
  );
};
export default Lista;
