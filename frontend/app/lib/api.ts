// Path: lib/api.ts
import { Course, Instructor } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Função para buscar todos os cursos (posts)
export async function getAllCourses(): Promise<Course[]> {
  // Pegamos apenas os 12 primeiros para não sobrecarregar a página inicial
  const res = await fetch(`${API_URL}/posts?_limit=12`);
  if (!res.ok) {
    throw new Error('Falha ao buscar os cursos');
  }
  return res.json();
}

// Função para buscar um curso específico pelo ID
export async function getCourseById(id: string): Promise<Course> {
  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) {
    throw new Error('Falha ao buscar o curso');
  }
  return res.json();
}

// Função para buscar o instrutor (usuário) pelo ID
export async function getInstructorById(id: number): Promise<Instructor> {
  const res = await fetch(`${API_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error('Falha ao buscar o instrutor');
  }
  return res.json();
}