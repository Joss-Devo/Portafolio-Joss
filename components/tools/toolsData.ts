import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Cpu
} from "lucide-react";

export const tools = [
  {
    id: 1,
    name: "Frontend",
    description: "React, Next.js, TypeScript, TailwindCSS, Angular, Bootstrap",
    icon: Code2,
  },
  {
    id: 2,
    name: "Backend",
    description: "Laravel, Node.js, Java, Python, PHP, JavaScript, TypeScript, Livewire",
    icon: Server,
  },
  {
    id: 3,
    name: "Bases de Datos",
    description: "MySQL, PostgreSQL, Supabase, MongoDB",
    icon: Database,
  },
  {
    id: 4,
    name: "Control de Versiones",
    description: "Git, GitHub",
    icon: GitBranch,
  },
  {
    id: 5,
    name: "Despliegue",
    description: "Vercel, Hostinger, VPS",
    icon: Globe,
  },
  {
    id: 6,
    name: "Otras Tecnologías",
    description: "AWS",
    icon: Cpu,
  },
];
