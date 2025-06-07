// Path: app/login/page.tsx
'use client';
import { Card, CardHeader, CardBody, Input, Button } from '@nextui-org/react';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-md w-full p-6">
        <CardHeader className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm text-default-500">
            Acesse sua conta (simulação)
          </p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4">
            <Input isRequired type="email" label="Email" />
            <Input isRequired type="password" label="Senha" />
            <p className="text-center text-small">
              Não tem uma conta?{' '}
              <span className="text-primary cursor-pointer">Cadastre-se</span>
            </p>
            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary">
                Entrar
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}