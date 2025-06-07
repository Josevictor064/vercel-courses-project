import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourseById, getInstructorById } from '@/lib/api';
import { Button, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: Promise<{ id: string }>;
}

export const revalidate = 3600;
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const course = await getCourseById(id);
    return {
      title: course.title,
      description: course.body.substring(0, 150),
    };
  } catch {
    return {
      title: 'Curso Não Encontrado',
      description: '',
    };
  }
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  let course;
  try {
    course = await getCourseById(id);
  } catch {
    notFound();
  }
  const instructor = await getInstructorById(course.userId);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Button as={Link} href="/" variant="ghost" className="mb-6">
        &larr; Voltar para todos os cursos
      </Button>
      <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
        <Image
          alt={`Imagem do curso ${course.title}`}
          className="object-cover w-full max-h-[300px]"
          src={`https://picsum.photos/seed/${course.id}/800/400`}
          width={800}
          height={400}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 capitalize">{course.title}</h1>
      <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl mb-6">
        <Avatar name={instructor.name} size="lg" className="bg-primary-500 text-white" />
        <div>
          <p className="text-sm text-default-500">Instrutor</p>
          <p className="font-bold text-lg">{instructor.name}</p>
          <p className="text-sm text-default-400">{instructor.email}</p>
        </div>
      </div>
      <div className="prose prose-invert max-w-none text-default-300">
        <p className="text-lg leading-relaxed">{course.body}</p>
      </div>
    </div>
  );
}
