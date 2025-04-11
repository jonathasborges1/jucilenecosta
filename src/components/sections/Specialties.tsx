/* Arquivo: /components/SpecialtiesSection.tsx */

export function SpecialtiesSection() {
  return (
    <section className="py-16 bg-gray-50" id="especialidades">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h3 className="text-2xl font-bold text-violet-700 mb-4">
          Especialidades
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>✔️ Ansiedade</li>
          <li>✔️ Depressão</li>
          <li>✔️ Burnout</li>
          <li>✔️ Autoconhecimento e equilíbrio emocional</li>
          <li>✔️ Atendimento individual e terapia de casal</li>
        </ul>
      </div>
    </section>
  );
}
