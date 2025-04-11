/* Arquivo: /components/Header.tsx */

export function Header() {
  return (
    <header className="bg-white px-4 py-6 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-lg font-bold text-violet-700">
          Jucilene Almeida da Costa
        </h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#sobre" className="hover:text-violet-700">
            Sobre
          </a>
          <a href="#especialidades" className="hover:text-violet-700">
            Especialidades
          </a>
          <a href="#contato" className="hover:text-violet-700">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
