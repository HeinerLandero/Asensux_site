import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{
        background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(0,116,217,0.05), transparent 80%)`,
        transition: "background 0.1s ease-out",
      }}
      aria-hidden
    />
  );
}
