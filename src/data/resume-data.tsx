import { GitHubIcon, LinkedInIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Lars van Herwijnen",
  initials: "LH",
  location: "Druten, Nederlands",
  locationLink: "https://www.google.com/maps/place/druten",
  about:
    "Student Informatica Avans",
  summary:
    "Ik ben een ambitieuze en leergierige student Informatica met een aanzienlijke ervaring als softwarebouwer, voornamelijk opgedaan tijdens mijn stages en bijbaan. Na het behalen van mijn MBO-diploma wilde ik mijn kennis uitbreiden, wat mij heeft geleid tot mijn huidige studie Informatica. Mijn passie voor het vakgebied en mijn streven naar continue groei motiveren mij om nieuwe uitdagingen aan te gaan.",
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
        url: "https://www.linkedin.com/in/larsvanherwijnen",
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
      company: "iO",
      link: "https://www.iodigital.com/nl",
      badges: [],
      title: "Stagiair Software Engineer",
      start: "Sep. 2024",
      end: "Jan. 2025",
      description: "Tijdens mijn stage bij iO heb ik onderzoek gedaan naar tools om verschillende administratieve processen te verbeteren, zoals het registreren van uren en het indienen van kilometerdeclaraties.",
    },
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
      title: "Stagiair Webdevelopment",
      start: "nov 2021",
      end: "mei 2022",
      description:"Als stagiair Webontwikkeling bij Aniday heb ik actief bijgedragen aan de ontwikkeling van hun SaaS-software. Dit platform fungeerde als een plannings- en boekingssysteem voor hondenpensions en andere dierprofessionals."
    },
    {
      company: "CBYTE",
      link: "https://cbyte.digital",
      badges: [],
      title: "Stagiair Webdevelopment",
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
