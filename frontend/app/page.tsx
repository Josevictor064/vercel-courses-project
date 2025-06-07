// Path: app/page.tsx
import { getAllCourses } from '@/lib/api';
import { Course } from '@/lib/types';
import CourseCard from '@/components/CourseCard';

export default async function HomePage() {
  const courses = await getAllCourses();

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Nossos Cursos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}