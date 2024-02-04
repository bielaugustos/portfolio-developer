import {ClassValue, clsx} from 'clsx';
// adiciona classes de forma dinamica
import {twMerge} from 'tailwind-merge'
// junta estilos tailwind

export const cn = ( ...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}