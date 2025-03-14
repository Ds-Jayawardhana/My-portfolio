import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  bloom,
  banking,
  ticketing,
  bus,
  amazon,
  threejs,
  arcane,
  ceylon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Springboot",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "python",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bloom App",
    description:
      "Bloom is a revolutionary IoT-based smart gardening solution that combines traditional knowledge with cutting-edge technology.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: bloom,
    source_code_link: "https://github.com/SDGP-CS-09",
  },
  {
    name: "Banking Landing Page",
    description:
      "Developed a responsive banking website using React.js and Tailwind CSS, delivering a modern and intuitive user interface.",
    tags: [
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: banking,
    source_code_link: "https://github.com/Ds-Jayawardhana/Banking_Landing_page",
  },
  {
    name: "Realtime Ticketing",
    description:
      "A modern event ticketing platform built with React and Spring Boot, featuring real-time updates using WebSocket technology.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: ticketing,
    source_code_link: "https://github.com/Ds-Jayawardhana/Ticketing_System",
  },
  {
    name: "Amazon Clone",
    description:
      "Developed a fully responsive Amazon clone using HTML, CSS, and JavaScript that replicates the core functionality and visual design of the e-commerce giant. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },
  {
    name: "Bus Booking App UI",
    description:
      "Designed and developed a comprehensive bus booking mobile application UI showcasing a full user journey from search to payment confirmation.  ",
    tags: [
      {
        name: "Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: bus,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },
  {
    name: "Arcane Gallery Website",
    description:
      "Developed a fully responsive Amazon clone using HTML, CSS, and JavaScript that replicates the core functionality and visual design of the e-commerce giant. ",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: arcane,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },{
    name: "CeylonOverseas Website",
    description:
      "Developed a fully responsive Amazon clone using HTML, CSS, and JavaScript that replicates the core functionality and visual design of the e-commerce giant. ",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: ceylon,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },{
    name: "Amazon Clone",
    description:
      "Developed a fully responsive Amazon clone using HTML, CSS, and JavaScript that replicates the core functionality and visual design of the e-commerce giant. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },{
    name: "Amazon Clone",
    description:
      "Developed a fully responsive Amazon clone using HTML, CSS, and JavaScript that replicates the core functionality and visual design of the e-commerce giant. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://www.figma.com/design/sE1I9AyNzeisfnF4VtwRPx/Bus-Booking-App?m=auto&t=xRaqq6CktGhZYCAk-6",
  },
];

export { services, technologies, experiences, testimonials, projects };
