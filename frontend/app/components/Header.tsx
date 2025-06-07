'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [logado, setLogado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => setLogado(!!localStorage.getItem('auth'));
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  function handleLogout() {
    localStorage.removeItem('auth');
    window.dispatchEvent(new Event('storage'));
    router.push('/login');
  }

  return (
    <Navbar className="border-b shadow-sm bg-backgroundContrast px-12 py-6 flex justify-between items-center">
      <NavbarBrand>
        <span
          className="font-extrabold text-2xl tracking-wide text-primary"
          style={{ letterSpacing: '0.1em' }}
        >
          CURSOS ONLINE
        </span>
      </NavbarBrand>
      {logado && (
        <NavbarContent className="flex gap-4 items-center">
          <NavbarItem>
            <Link
              href="/"
              className="text-default-500 hover:text-primary transition font-medium"
            >
              Cursos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              onClick={handleLogout}
              className="text-red-500 min-w-[80px]"
              variant="flat"
              size="sm"
            >
              Sair
            </Button>

          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
