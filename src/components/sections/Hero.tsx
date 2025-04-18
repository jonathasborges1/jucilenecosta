// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// export function HeroSection() {
//   return (
//     <section
//       id="inicio"
//       aria-labelledby="inicio-title"
//       className="bg-gradient-to-b from-[#4fbb9c] to-[#e0f7fa] text-white py-20 border-20" // bg-gradient-to-br from-[#4fbb9c] via-[#a0e8e0] to-[#79d2b3]
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Texto */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center lg:text-left"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="inline-block mb-4 px-5 py-1 rounded-full text-sm font-semibold bg-green-200 text-green-800 uppercase tracking-wider"
//           >
//             Atendimento Online e Presencial
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl font-extrabold leading-tight text-green-900"
//             id="inicio-title"
//           >
//             Jucilene Costa
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-1 text-xl md:text-2xl font-semibold text-green-900"
//           >
//             Psicóloga Clínica — CRP 20/03418
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
//           >
//             Por meio de sessões de <strong>terapia online e presencial</strong>{" "}
//             em Manaus, te ajudo a cultivar o <strong>autoconhecimento</strong>,
//             fortalecer sua <strong>saúde mental</strong> e promover equilíbrio
//             emocional em sua vida.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mt-8 flex justify-center lg:justify-start"
//           >
//             <Link
//               href="https://wa.me/5592982482803?text=Olá! Gostaria de agendar uma consulta."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
//               aria-label="Iniciar conversa via WhatsApp"
//             >
//               <FaWhatsapp className="w-5 h-5" />
//               <span>Agendar Atendimento</span>
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Imagem */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex justify-center lg:justify-end"
//         >
//           <Image
//             src="/img/juci.jpg"
//             alt="Psicóloga Jucilene Almêda da Costa"
//             width={480}
//             height={600}
//             priority
//             className="rounded-xl object-cover max-h-[600px] shadow-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
