import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EstadoTareas, Tarea } from '../types/tarea';

const nueva = (titulo: string, completada = false): Tarea => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, titulo, completada,
});

export const useTienda = create<EstadoTareas>()(persist((set) => ({
  tareas: [
    nueva('Estudiar React + TypeScript'),
    nueva('Hacer ejercicios de SQL', true),
    nueva('Leer documentación de Koha'),
    nueva('Construir proyecto en TypeScript'),
    nueva('Regar los tulipanes 🌷'),
  ],
  filtro: 'todas', busqueda: '',
  setFiltro: (filtro) => set({ filtro }),
  setBusqueda: (busqueda) => set({ busqueda }),
  agregar: (titulo) => set((s) => ({ tareas: [nueva(titulo), ...s.tareas] })),
  alternar: (id) => set((s) => ({
    tareas: s.tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)),
  })),
  eliminar: (id) => set((s) => ({ tareas: s.tareas.filter((t) => t.id !== id) })),
}), { name: 'tareas-tulipanes', partialize: (s) => ({ tareas: s.tareas }) }));
