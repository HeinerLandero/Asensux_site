import ServiceCard from "../ServiceCard/ServiceCard";

const services = [
  {
    title: "Desarrollo Web",
    icon: "🧩",
    text: "Creamos sitios modernos, rápidos y accesibles con tecnologías como React, Angular y Laravel.",
  },
  {
    title: "SaaS a medida",
    icon: "☁️",
    text: "Diseñamos plataformas en la nube escalables para empresas que necesitan soluciones únicas.",
  },
  {
    title: "Automatización de procesos",
    icon: "🤖",
    text: "Integramos herramientas que optimizan tareas repetitivas y mejoran tu productividad.",
  },
];

export default function ServiceList() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  );
}
