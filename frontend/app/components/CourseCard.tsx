// Path: components/CourseCard.tsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Importe o componente Image
import { Course } from '@/lib/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="p-4 h-full">
      {/* 2. Adicione o componente Image aqui */}
      <Image
        alt={`Imagem ilustrativa do curso ${course.title}`}
        className="object-cover rounded-xl w-full h-[180px] mb-4"
        src={`https://picsum.photos/seed/${course.id}/400/200`}
        width={400}
        height={200}
      />

      <CardHeader className="flex-col items-start pt-0 px-1">
        <p className="text-tiny uppercase font-bold">Curso</p>
        <h4 className="font-bold text-large capitalize">
          {course.title.substring(0, 25)}...
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-1">
        <p className="text-default-500">{course.body.substring(0, 100)}...</p>
      </CardBody>
      <CardFooter className="px-1">
        <Button
          as={Link}
          href={`/cursos/${course.id}`}
          color="primary"
          variant="solid"
          fullWidth
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}