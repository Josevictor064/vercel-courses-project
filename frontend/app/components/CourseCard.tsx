'use client';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '@/lib/types';
import { motion } from 'framer-motion';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (!token) router.push('/login');
    else setLoading(false);
  }, [router]);

  if (loading) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card
        isHoverable
        isPressable
        className="p-4 h-full rounded-xl border border-default-200 dark:border-default-700 shadow-sm"
      >
        <Link href={`/cursos/${course.id}`} className="block overflow-hidden rounded-xl mb-4">
          <Image
            alt={`Imagem ilustrativa do curso ${course.title}`}
            className="object-cover w-full h-[180px] transition-transform duration-300"
            src={`https://picsum.photos/seed/${course.id}/400/200`}
            width={400}
            height={200}
            priority={false}
          />
        </Link>

        <CardHeader className="flex flex-col items-start pt-0 px-1">
          <p className="text-xs uppercase font-semibold tracking-wide text-default-500 dark:text-default-400">
            Curso
          </p>
          <h4 className="font-bold text-lg capitalize text-default-900 dark:text-default-100">
            {course.title.length > 25
              ? course.title.substring(0, 25) + '...'
              : course.title}
          </h4>
        </CardHeader>

        <CardBody className="overflow-visible py-2 px-1">
          <p className="text-sm text-default-600 dark:text-default-400">
            {course.body.length > 100
              ? course.body.substring(0, 100) + '...'
              : course.body}
          </p>
        </CardBody>

        <CardFooter className="px-1">
          <Button
            as={Link}
            href={`/cursos/${course.id}`}
            color="primary"
            variant="solid"
            fullWidth
            size="md"
          >
            Ver Detalhes
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
