// Path: app/loading.tsx
import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner label="Carregando..." color="primary" />
    </div>
  );
}