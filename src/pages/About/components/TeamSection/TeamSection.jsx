import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ease, once } from "../../../../lib/animations";
import memberImg from "@/assets/team/member.jpg";

const teamMembers = [
  {
    name: "Fabián García",
    role: "Desarrollador Fullstack",
    image: memberImg,
  },
  {
    name: "Daniel Benavides",
    role: "Desarrollador Fullstack",
    image: memberImg,
  },
  {
    name: "Heiner Landero",
    role: "Desarrollador Fullstack",
    image: memberImg,
  },
];

export default function TeamSection() {
  return (
    <section className="  text-antiFlashWhite py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Nuestro <span className="text-electricBlue">Equipo</span>
          </h2>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            Tres desarrolladores que construyen productos completos — del concepto al deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-electricBlue/20 transition-all duration-500  Dark/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease }}
              viewport={once}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navyDark via-navyDark/20 to-transparent" />

                {/* Social links - appear on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-electricBlue/20 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-electricBlue/20 transition-colors"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-electricBlue/20 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-antiFlashWhite tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-stone mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
