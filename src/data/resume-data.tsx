import { GitHubIcon, LinkedInIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Lars van Herwijnen",
  initials: "LH",
  location: "Druten, Nederlands",
  locationLink: "https://www.google.com/maps/place/druten",
  about:
    "Student Informatica Avans",
  summary:
    "Ambiteuze student met intresse in het bouwen van maatwerk software. Ben ik opzoek naar een stageplek waar ik veel kan leren. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/77294984?v=4",
  contact: {
    email: "Lars.druten@gmail.com",
    tel: "+31610679274",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Larsvanherwijnen",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lars-van-herwijnen-94ab76193/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Avans Hogeschool Den Bosch",
      degree: "BSc Informatica",
      start: "2022",
      end: "heden",
    },
    {
      school: "ROC Nijmegen",
      degree: "MBO Software Ontwikkeling",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "CBYTE",
      link: "https://cbyte.digital",
      badges: [],
      title: "Junior Software Engineer",
      start: "jul. 2021",
      end: "aug. 2023",
      description: "Tijdens mijn tijd bij CBYTE, werkte ik aan een breed scala van projecten, variërend van websites tot op maat gemaakte softwareproducten. Mijn taken omvatten het werken met technologieën zoals Laravel, Vue.js en StatamicCMS.",
    },
    {
      company: "WeAreKonzept/Aniday",
      link: "https://www.aniday.io/",
      badges: [],
      title: "Stagiaire Webdevelopment",
      start: "nov 2021",
      end: "mei 2022",
      description:"Als stagiair Webontwikkeling bij Aniday heb ik actief bijgedragen aan de ontwikkeling van hun SaaS-software. Dit platform fungeerde als een plannings- en boekingssysteem voor hondenpensions en andere dierprofessionals."
    },
    {
      company: "CBYTE",
      link: "https://cbyte.digital",
      badges: [],
      title: "Stagiaire Webdevelopment",
      start: "aug. 2020",
      end: "jan. 2021",
      description:
        "Tijdens mijn stage bij CBYTE heb ik uitgebreid gewerkt met Laravel en heb ik mijn vaardigheden ontwikkeld door aan diverse projecten te werken, variërend van websites tot planningsystemen. Deze ervaring heeft mijn interesse gewekt in het bouwen van op maat gemaakte softwareoplossingen.",
    }
  ],
  skills: [
    "PHP/Laravel",
    "Tailwindcss",
    ".NET",
    "MYSQL",
    "MSSQL",
  ],
} as const;
