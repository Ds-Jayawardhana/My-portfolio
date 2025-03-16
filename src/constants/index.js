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
  choice,
  winteref,
  zybertron,
  aqua,
  seafront,
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
    title: "Freelance Graphic Designer",
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2020 -  March 2022",
    points: [
      "Created visually appealing designs for global clients on Fiverr.",
      "Designed logos, banners, and promotional materials.",
      "Worked closely with clients to meet their creative vision and deadlines."
    ],
  },
  {
    title: "Freelance Web Designers",
    company_name: "SahaDigital",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Built professional websites tailored to client needs and branding.",
      "Focused on optimizing user experience and site performance.",
      "Delivered projects on time while ensuring high-quality standards."
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Grand Lanka Tours",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Jan 2025",
    points: [
      "Managing social media accounts to boost brand visibility for a tourism company.",
      "Creating engaging content to attract and retain customers.",
      "Analyzing campaign performance to optimize marketing strategies."
    ],
  },
  {
    title: "Freelance Web Designer",
    company_name: "Upsilon Solutions",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Designed and developed responsive websites for various clients.",
      "Collaborated with teams to deliver user-friendly digital solutions.",
      "Implemented modern web technologies to enhance functionality",
    ],
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
    source_code_link: "https://github.com/Ds-Jayawardhana/Amazon-Clone-with-JS",
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
    name: "TravelSense App UI",
    description:
      " UI for a travel app for the TechTriathlon competition by Rootcode, featuring an AI-powered travel itinerary generator and online visa application system. ",
    tags: [
      {
        name: "Photpshop",
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
    image: zybertron,
    source_code_link: "https://www.figma.com/design/5AE43WBPWhBkmaMWjddth1/Zybertron?node-id=0-1&t=05I42j3YeR7YpVqA-1",
  },
  {
    name: "Arcane Gallery Website",
    description:
      "Developed a striking WordPress-based art gallery site, featuring a visually rich design and smooth functionality to spotlight artwork with elegance and ease. ",
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
    source_code_link: "https://arcanegallery.art/",
  },{
    name: "CeylonOverseas Website",
    description:
      "Crafted a responsive WordPress website for Ceylon Overseas, blending custom themes and plugins to deliver a polished, user-friendly interface with seamless navigation. ",
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
    source_code_link: "https://ceylonoverseas.com/",
  },{
    name: "SefrontSuite Website",
    description:
      "Developed the official WordPress booking website for Seafront Suites Hotel in Jeddah, Saudi Arabia, integrating the MyFatoorah payment gateway for secure payments.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: seafront,
    source_code_link: "https://seafrontsuites.net/",
  },{
    name: "Winteref Website",
    description:
      "Official WordPress website for Winteref, an A/C repair station in Sri Lanka,responsive design to showcase services and enhance customer accessibility. ",
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
    image: winteref,
    source_code_link: "https://winteref.com/",
  },
  
  {
    name: "AquaHouse Website",
    description:
      "Officialwebsite for AquaHouseYala, a hotel and seafood restaurant near Yala, Sri Lanka, featuring a responsive design that captures its seaside charm and culinary appeal. ",
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
    image: aqua,
    source_code_link: "http://aqua.iconvisa.com/",
  },{
    name: "ChoiceLK(Inactive)",
    description:
      " Sri Lanka’s pioneering e-commerce WordPress site, offering crypto payments for electronics, with a secure, customer-focused  robust functionality.",
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
    image: choice,
    source_code_link: "https://choicelk.com/",
  },
  
];

export { services, technologies, experiences, projects };
