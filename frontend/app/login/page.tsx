'use client';

import { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email === 'admin@gmail.com' && senha === 'admin12-') {
      localStorage.setItem('auth', 'true');
      window.dispatchEvent(new Event('storage'));
      router.push('/');
    } else {
      setErro('Credenciais inválidas');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="max-w-md w-full p-6">
        <CardHeader className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm text-default-500">Acesse sua conta (simulação)</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              isRequired
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              type="password"
              label="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {erro && <p className="text-danger text-sm">{erro}</p>}
            <p className="text-center text-small">
              Não tem uma conta?{' '}
              <span className="text-primary cursor-pointer">Cadastre-se</span>
            </p>
            <div className="flex gap-2 justify-end">
              <Button type="submit" fullWidth color="primary">
                Entrar
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
