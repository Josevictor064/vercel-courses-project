export default function Footer() {
  return (
    <footer className="w-full py-6 bg-zinc-900 border-t border-zinc-700 mt-12">
      <div className="container mx-auto flex justify-center items-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Plataforma de Cursos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
