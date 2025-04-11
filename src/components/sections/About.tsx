/* Arquivo: /components/AboutSection.tsx */

export function AboutSection() {
  return (
    // <section className="py-16 bg-white" id="sobre">
    //   <div className="mx-auto max-w-4xl px-4 text-center">
    //     <h3 className="text-2xl font-bold text-violet-700 mb-4">
    //       Sobre a Psicóloga
    //     </h3>
    //     <p className="text-gray-700">
    //       Jucilene Almeida da Costa é psicóloga (CRP 20/03418) com experiência
    //       clínica no atendimento a adultos, adolescentes, mulheres e casais.
    //       Atua com foco em ansiedade, depressão e burnout, oferecendo escuta
    //       qualificada, ética e acolhimento em cada sessão.
    //     </p>
    //   </div>
    // </section>
    <section className="py-16 px-4 md:px-8 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-6">
          Sobre a Psicóloga
        </h2>
        <p className="text-lg text-gray-800">
          Olá, sou <strong>Jucilene Almêda da Costa</strong>, psicóloga (CRP
          20/03418) com ampla experiência no atendimento de
          <strong> adultos, adolescentes, mulheres e casais</strong>. Realizo
          atendimentos presenciais em Manaus-AM e também atendimentos online
          para todo o Brasil, Portugal, EUA e Inglaterra.
        </p>
        <p className="mt-4 text-lg text-gray-800">
          Minha atuação é voltada para o cuidado com a saúde emocional,
          auxiliando no enfrentamento de desafios como
          <strong> ansiedade, depressão, estresse e burnout</strong>. Utilizo
          abordagens baseadas em evidências, como a Terapia de Aceitação e
          Compromisso (ACT).
        </p>
      </div>
    </section>
  );
}
