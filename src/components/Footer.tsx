/* Arquivo: /components/Footer.tsx */

export function Footer() {
  return (
    <footer className="bg-violet-700 text-white py-8 px-4 mt-10">
      <div className="mx-auto max-w-6xl grid gap-4 text-sm md:grid-cols-2">
        <div>
          <p className="font-semibold">Jucilene Almeida da Costa</p>
          <p>Psicóloga - CRP 20/03418</p>
          <p>Atendimento presencial em Manaus-AM</p>
          <p>Atendimento online para Brasil, Portugal, EUA e Inglaterra</p>
        </div>
        <div>
          <p>
            <strong>WhatsApp:</strong> (92) 9 8248-2803
          </p>
          <p>
            <strong>Email:</strong> contatosamedhy@gmail.com
          </p>
          <p>
            <strong>Horários:</strong> Seg a Sex, 08h–11h / 14h–20h
          </p>
        </div>
      </div>
      <p className="mt-6 text-center text-xs">
        © {new Date().getFullYear()} Jucilene Almeida da Costa. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
