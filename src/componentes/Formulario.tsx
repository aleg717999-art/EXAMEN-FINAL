import React, { useState } from 'react';
import { useTienda } from '../store/tienda';

const Formulario: React.FC = () => {
  const agregar = useTienda((s) => s.agregar);
  const [texto, setTexto] = useState('');
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto.trim()) { agregar(texto.trim()); setTexto(''); }
  };
  return (
    <form className="formulario" onSubmit={enviar}>
      <input className="campo" placeholder="Nueva tarea..." value={texto}
        onChange={(e) => setTexto(e.target.value)} />
      <button className="btn btn-tulipan" type="submit">Agregar</button>
    </form>
  );
};
export default Formulario;
