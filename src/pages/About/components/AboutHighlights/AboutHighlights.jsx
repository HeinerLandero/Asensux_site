import AboutCard from "../AboutCard/AboutCard";

const highlights = [
  {
    title: "Nuestra Historia",
    icon: "🌱",
    text: "Iniciamos como un pequeño equipo con grandes ideas. Hoy trabajamos con startups y empresas que confían en nuestro compromiso.",
  },
  {
    title: "Misión",
    icon: "🚀",
    text: "Empoderar a nuestros clientes con soluciones tecnológicas sólidas y modernas que potencien su crecimiento.",
  },
  {
    title: "Equipo",
    icon: "🤝",
    text: "Somos un grupo de desarrolladores, diseñadores y estrategas apasionados por transformar ideas en realidades digitales.",
  },
];

export default function AboutHighlights() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {highlights.map((item, idx) => (
        <AboutCard key={idx} {...item} index={idx} />
      ))}
    </div>
  );
}