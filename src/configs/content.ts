import {
  BeakerIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "experience.title",
    description: "experience.description",
    icon: ShieldCheckIcon,
  },
  {
    title: "usage.title",
    description: "usage.description",
    icon: BuildingOfficeIcon,
  },
  {
    title: "projects.title",
    description: "projects.description",
    icon: BeakerIcon,
  },
];

const education = [
  {
    title: "uspeng.title",
    description: "uspeng.description",
    keywords: "uspeng.keywords",
    link: "https://mbauspesalq.com/cursos/mba-em-engenharia-de-software",
  },
  {
    title: "pluralsight.title",
    description: "pluralsight.description",
    keywords: "pluralsight.keywords",
    link: "https://app.pluralsight.com/profile/marcelo3macedo",
  },
  {
    title: "rocketseat.title",
    description: "rocketseat.description",
    keywords: "rocketseat.keywords",
    link: "https://www.rocketseat.com.br",
  },
  {
    title: "ufscar.title",
    description: "ufscar.description",
    keywords: "ufscar.keywords",
    link: "https://www.latosensudc.ufscar.br/institucional/equipe",
  },
  {
    title: "udemy.title",
    description: "udemy.description",
    keywords: "udemy.keywords",
    link: "https://www.udemy.com",
  },
  {
    title: "others.title",
    description: "others.description",
    keywords: "others.keywords",
    link: "https://github.com/marcelo3macedo",
  },
];

const projects = [
  {
    title: "list.portfolio.title",
    contents: [
      { type: "text", value: "list.portfolio.intro" },
      { type: "text", value: "list.portfolio.tools" },
      { type: "text", value: "list.portfolio.pipeline" },
      {
        type: "link",
        href: "https://marcelo3macedo.github.io/my-portfolio",
        value: "action.access",
      },
      { type: "text", value: "list.portfolio.development" },
      {
        type: "link",
        href: "https://github.com/marcelo3macedo/my-portfolio/pulls?q=is%3Apr+is%3Aclosed",
        value: "action.access",
      },
    ],
  },
  {
    title: "list.memo.title",
    contents: [
      { type: "text", value: "list.memo.intro" },
      { type: "text", value: "list.memo.details" },
      { type: "text", value: "list.memo.types" },
      { type: "text", value: "list.memo.link" },
      {
        type: "link",
        href: "https://play.google.com/store/apps/details?id=com.app.memorizou&hl=en_US",
        value: "action.access",
      },
    ],
  },
  {
    title: "list.abcshow.title",
    contents: [
      { type: "text", value: "list.abcshow.intro" },
      { type: "text", value: "list.abcshow.details" },
      { type: "text", value: "list.abcshow.types" },
      { type: "text", value: "list.abcshow.link" },
      {
        type: "link",
        href: "https://play.google.com/store/apps/details?id=com.app.abcshow&hl=ar",
        value: "action.access",
      },
    ],
  },
  {
    title: "list.customup.title",
    contents: [
      { type: "text", value: "list.customup.intro" },
      { type: "text", value: "list.customup.details" },
      { type: "text", value: "list.customup.types" },
      { type: "text", value: "list.customup.link" },
      {
        type: "link",
        href: "https://www.youtube.com/watch?v=E9Pt-P63vKE",
        value: "action.access",
      },
    ],
  },
];

export { highlights, education, projects };
