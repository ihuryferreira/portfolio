export type ProjectPreview = "donalds" | "recipes" | "survey" | "taskflow";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  preview: ProjectPreview;
}

export const projects: Project[] = [
  {
    title: "Donalds-Delivery",

    description:
      "Projeto Realizado Durante a Sétima - e Melhor - Edição da Full Stack Week!",

    image: "/Donalds-Delivery.png",

    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS", "Zod"],

    github: "https://github.com/ihuryferreira/donalds-delivery",

    demo: "https://donalds-delivery.vercel.app/fsw-donalds",

    preview: "donalds",
  },

  {
    title: "Receitas Culinárias",

    description: "Aplicação web para busca e organização de receitas.",

    image: "/receitas.png",

    technologies: ["React", "CSS", "API"],

    github: "https://github.com/ihuryferreira/receitasculinariasapp",

    demo: "https://receita-app-eta.vercel.app/",

    preview: "recipes",
  },

  {
    title: "Sistema de Pesquisa",

    description: "Dashboard para coleta e visualização de respostas.",

    image: "/pesquisa.png",

    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],

    github: "https://github.com/ihuryferreira/sistema-pesquisa",

    demo: "#",

    preview: "survey",
  },

  {
    title: "Waguinho Hambúrgueres",

    description: "Site responsivo para apresentação e divulgação de hambúrgueres artesanais.",

    image: "/projeto-whatsapp.png",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],

    github: "#",

    demo: "https://waguinho-hamburgueres.vercel.app/",

    preview: "taskflow",
  },
];
