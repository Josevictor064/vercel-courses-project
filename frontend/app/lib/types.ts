// Path: lib/types.ts
export interface Course {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Instructor {
  id: number;
  name: string;
  username: string;
  email: string;
}