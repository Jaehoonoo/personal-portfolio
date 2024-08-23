import { Link } from "react-router-dom";
import {
    mobile,
    gainful,
    cardlet,
    healthgpt,
    web3,
    backend,
    creator,
    web,
    javascript,
    typescript,
    jquery,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    sql,
    nodejs,
    mongodb,
    postgre,
    git,
    githublogo,
    figma,
    docker,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    rocket,
    gdsc,
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
    {
      id: "resume",
      external: true,
      link: "./resume.pdf",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "IT Student",
      icon: mobile,
    },
    {
      title: "Aspiring Software Engineer",
      icon: backend,
    },
    {
      title: "Aspiring Full-stack Developer",
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "jQuery",
      icon: jquery,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: githublogo,
    },
    {
      name: "Web3",
      icon: web3,
    },
  ];
  
  const experiences = [
    {
      title: "Tech Lead",
      company_name: "Google Developer Student Club",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "August 2024 - Present",
      points: [
        "Organized a Taipy workshop to teach students how to build a full-stack app for tracking BMI and calorie intake.",
        "Collaborated with other tech leads and e-board to efficiently plan and execute workshops, imparting valuable knowledge to students.",
      ],
    },
    {
      title: "Software Engineer Fellow",
      company_name: "Headstarter AI",
      icon: rocket,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Built 5+ AI projects using ReactJS, NextJS, OpenAI, AWS, and StripeAPI.",
        "Developed projects from design to deployment with a team of 4 using agile methodology.",
        "Mentored by representatives of Google, Ruby, and TikTok on career guidance and project management.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "Cardlet",
      description:
        "This AI-powered app allows users to input text or upload files to automatically generate personalized study flashcards. By analyzing the content, it intelligently creates concise, organized flashcards, streamlining the study process and enhancing retention of key concepts.",
      tags: [
        {
          name: "Next.js/React",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
        {
          name: "Material UI",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: cardlet,
      source_code_link: "https://github.com/brandon-fernando/flashcard-saas",
    },
    {
      name: "HealthGPT",
      description:
        "Welcome to the Generative AI HealthGPT, your personal nutritionist powered by AI! This app uses Taipy and python to help you effortlessly get a customized meal plan tailored to your needs.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "green-text-gradient",
        },
        {
          name: "Taipy",
          color: "pink-text-gradient",
        },
      ],
      image: healthgpt,
      source_code_link: "https://github.com/Jaehoonoo/HealthGPT",
    },
    {
      name: "Customer Support Chatbot",
      description:
      "A chatbot that acts as customer service to answer user queries based on the information from Gainful's website, a company that provides personalized nutrition products.",
      tags: [
        {
          name: "OpenRouter API",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js/React",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: gainful,
      source_code_link: "https://github.com/Jaehoonoo/chatsupport",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };