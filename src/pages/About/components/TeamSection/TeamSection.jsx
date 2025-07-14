import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Heiner Landero",
    role: "Fundador & Frontend Developer",
    image: "src/assets/team/member.jpg", // Coloca aquí tu imagen o un placeholder
  },
  {
    name: "Andrea Pérez",
    role: "UX/UI Designer",
    image: "src/assets/team/member.jpg",
  },
  {
    name: "Carlos Gómez",
    role: "Backend Developer",
    image: "src/assets/team/member.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-darkGreen text-antiFlashWhite py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Nuestro <span className="text-caribbeanGreen">Equipo</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="group bg-richBlack rounded-2xl p-6 border border-[#ffffff] shadow-xl transition-all duration-300 hover:border-caribbeanGreen hover:shadow-[0_0_20px_#ffffff]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-caribbeanGreen transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-caribbeanGreen/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-caribbeanGreen transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-stone">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
