export type Filtro = 'todas' | 'pendientes' | 'completadas';
export interface Tarea { id: string; titulo: string; completada: boolean; }
export interface EstadoTareas {
  tareas: Tarea[]; filtro: Filtro; busqueda: string;
  setFiltro: (f: Filtro) => void;
  setBusqueda: (b: string) => void;
  agregar: (titulo: string) => void;
  alternar: (id: string) => void;
  eliminar: (id: string) => void;
}
