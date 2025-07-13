// src/sections/TechStackSection.tsx
import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase, SiVite } from "react-icons/si";

export default function TechStackSection() {
    const stack = [
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
        { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiMysql className="text-yellow-500" />, name: "MySQL" },
        { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
        { icon: <FaDatabase className="text-purple-400" />, name: "SQL" },
        { icon: <SiVite className="text-violet-500" />, name: "Vite" },
        { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    ];

    return (
        <section className="bg-gradient-to-r from-richBlack to-black bg-darkGreen py-20 px-6 text-center text-antiFlashWhite">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Tecnologías que <span className="text-caribbeanGreen">usamos</span>
                </h2>
                <p className="text-stone mb-12">
                    Trabajamos con herramientas modernas y confiables para garantizar
                    calidad, escalabilidad y eficiencia.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {stack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                        >
                            <div className="text-5xl">{tech.icon}</div>
                            <div className="text-sm text-stone">{tech.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
