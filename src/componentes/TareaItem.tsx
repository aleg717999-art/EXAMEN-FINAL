import React, { useState } from 'react';
import { useTienda } from '../store/tienda';
import type { Tarea } from '../types/tarea';
import { Basura, Check } from './Iconos';

const TareaItem: React.FC<{ tarea: Tarea; retraso: number }> = ({ tarea: t, retraso }) => {
  const { alternar, eliminar } = useTienda();
  const [saliendo, setSaliendo] = useState(false);
  const borrar = () => { setSaliendo(true); setTimeout(() => eliminar(t.id), 350); };
  return (
    <li className={`tarea ${t.completada ? 'hecha' : ''} ${saliendo ? 'sale' : ''}`}
      style={{ animationDelay: `${retraso}ms` }}>
      <input type="checkbox" className="casilla" checked={t.completada}
        onChange={() => alternar(t.id)} aria-label={t.titulo} />
      <span className="titulo">{t.titulo}</span>
      <span className={`etiqueta ${t.completada ? 'verde' : ''}`}>
        {t.completada ? 'Completada' : 'Pendiente'}</span>
      <button className="btn-icono ok" onClick={() => alternar(t.id)}
        aria-label={t.completada ? 'Reabrir tarea' : 'Completar tarea'}><Check /></button>
      <button className="btn-icono borrar" onClick={borrar} aria-label="Eliminar tarea"><Basura /></button>
    </li>
  );
};
export default TareaItem;
