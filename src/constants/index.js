import { Link } from "react-router-dom";
import {
    mobile,
    cart,
    healthgpt,
    kinetic,
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
      link: "https://jhoon-resume.tiiny.site",
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
      name: "Add to Cart",
      description:
        "Simple web app designed to streamline your shopping experience. Add items you need, check them off as you shop, and never forget a crucial ingredient again.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: cart,
      source_code_link: "https://github.com/Jaehoonoo/add-to-cart",
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
      name: "Kinetic",
      description:
        "Kinetic is a comprehensive fitness tracker app designed to help you achieve your health and wellness goals. Whether you are a beginner starting your fitness journey or an experienced athlete, Kinetic offers a wide range of features to support your needs.",
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
      image: kinetic,
      source_code_link: "https://github.com/Jaehoonoo/kinetic",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };