/* Arquivo: /components/Footer.tsx */

import { Mail, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#7d21c4] text-white pt-12 pb-6 px-4 mt-2" // bg-violet-500
    >
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-sm sm:text-base">
        {/* Coluna 1: Identificação */}
        <div>
          <h4 className="text-lg font-bold mb-2">Jucilene Almêda da Costa</h4>
          <p>Psicóloga - CRP 20/03418</p>
          <p>Atendimento presencial em Manaus-AM</p>
          <p>Atendimento online para Brasil, Portugal, EUA e Inglaterra</p>
        </div>

        {/* Coluna 2: Contatos */}
        <div>
          <h4 className="text-lg font-bold mb-2">Contato</h4>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <Link
              href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Iniciar conversa via WhatsApp"
            >
              (92) 9 8248-2803
            </Link>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:contatosamedh@gmail.com"
              aria-label="Enviar e-mail para contatosamedhy@gmail.com"
              className="hover:underline"
            >
              contatosamedh@gmail.com
            </Link>
          </p>
        </div>

        {/* Coluna 3: Horários */}
        <div>
          <h4 className="text-lg font-bold mb-2">Horários de Atendimento</h4>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Seg. a Sex: 08h–11h / 14h–20h
          </p>
          <p className="flex items-start gap-2 mt-2">
            <MapPin className="w-4 h-4 mt-1" />
            <span>
              Rua Teodulo de Matos, 1114
              <br />
              Parque 10 (Altos do Salão Kirei), Manaus - AM
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-violet-600 mt-10 pt-4 text-center text-xs text-violet-200">
        © {currentYear} Jucilene Almêda da Costa. Todos os direitos reservados.
      </div>
    </footer>
  );
}
