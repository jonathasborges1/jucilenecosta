import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="#inicio"
      className="flex items-center gap-2 text-violet-700 font-bold text-base sm:text-lg"
    >
      <Image
        src="/img/favicon.ico"
        alt="Símbolo de Psicologia"
        width={28}
        height={28}
        className="sm:inline"
      />
      Jucilene Almeida da Costa
    </Link>
  );
}
