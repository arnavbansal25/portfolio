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
  carrent,
  jobit,
  tripguide,
  threejs,
  accuknox,
  strideahead,
  deskera,
  mern,
  reactNative,
  aws,
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
    title: "Fullstack Web Developer MERN",
    icon: mern,
  },
  {
    title: "Mobile Developer React Native",
    icon: reactNative,
  },
  {
    title: "Cloud Engineer AWS",
    icon: aws,
  },
  {
    title: "Skilled Writer Technical Blogs",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "ReactJs Developer",
    company_name: "Accuknox",
    icon: accuknox,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Optimizing application flow through code refactoring, seamless API integration, and comprehensive testing.",
      "Adapting to scalable methodologies and writing efficient code to meet constantly changing product requirements, while ensuring standardization across a team of 10+ developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Stride Ahead",
    icon: strideahead,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: [
      "Maintaining extensive code-bases with media, reduced rework by 30% with streamlined development processes.",
      "Handled deployment on AWS EC2 Linux instances using GitHub CI/CD pipelines.",
    ],
  },
  {
    title: "Product Development Intern",
    company_name: "Deskera",
    icon: deskera,
    iconBg: "#383E56",
    date: "July 2021 - September 2021",
    points: [
      "Built an Automated Timesheet system with GPS and Image Capture.",
      "Assisted Backend Team in API structuring (SpringBoot) and PostgreSQL management.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "ReTube",
    description:
      "A highly performant Video Streaming app with real-time YT api data & Config Driven UI. Optimized using Chunking, Caching, Shimmer UI and Debounced Search. Advanced features like Live Chat, Google Auth, Nested Comments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "google search",
        color: "pink-text-gradient",
      },
      {
        name: "live chat",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/45120883/376360555-aeb0afb6-a3e8-4b79-81ad-0f012b10e7ea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241014%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241014T210102Z&X-Amz-Expires=300&X-Amz-Signature=faf63d075149890744f8c10466db6a35c28f3b00a8c4d29dccc92334dffb4b24&X-Amz-SignedHeaders=host",
    source_code_link: "https://github.com/arnavbansal25/retube",
    demo_link: "https://ab-retube.netlify.app/",
  },
  {
    name: "Mood Music",
    description:
      "A completely client side web app for personalized song recommendations utilizing Live Webcam Feed (analyze and Detect User Emotions in Real-Time) and Weather Detection to capture location-specific data with engaging visuals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "face-api",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/arnavbansal25/mood-music/refs/heads/main/screenshots/interface1.png",
    source_code_link: "https://github.com/arnavbansal25/mood-music",
    demo_link: "https://mood-music-ab.netlify.app/",
  },
  {
    name: "Private",
    description:
      "A completely client-side web app for transforming images over the internet using encryption and steganography.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/arnavbansal25/private/refs/heads/main/screenshots/Screenshot%20from%202024-10-15%2000-32-05.png",
    source_code_link: "https://github.com/arnavbansal25/private",
    demo_link: "https://private-ab.netlify.app/",
  },
  {
    name: "Distributed HyperParameter Tuning",
    description:
      "Accelerating the process of Hyper-parameter optimization using High-performance containerized systems (Docker).",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://private-user-images.githubusercontent.com/45120883/376359745-81ca4ef8-23e8-422e-a4db-b63b35372709.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjg5MzM2MjIsIm5iZiI6MTcyODkzMzMyMiwicGF0aCI6Ii80NTEyMDg4My8zNzYzNTk3NDUtODFjYTRlZjgtMjNlOC00MjJlLWE0ZGItYjYzYjM1MzcyNzA5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE0VDE5MTUyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZjMmJlZmQyZWYzNmI1ODA0NTkxYWM4Y2UzNDJhMjZiZTYxY2Y3ZjcwOTcyMTQ3ZGYwZGY3MjNlNWMyZjRhNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xwWjCy3aZLt3ahXOHNU8T6K9kg-vspbXXfQvpXUsIFA",
    source_code_link:
      "https://github.com/arnavbansal25/distributed-hyperparameter-tuning",
    demo_link: "https://www.youtube.com/watch?v=RM_JSDS5NuY",
  },
];

export { services, technologies, experiences, testimonials, projects };
