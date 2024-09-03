import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import projectImage7 from "../assets/project7.jpeg";
import projectImage8 from "../assets/project8.jpeg";
import projectImage9 from "../assets/project9.jpeg";
import toto from "../assets/toto.jpeg";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import rep from "../assets/rep.png";
import tt from "../assets/tt.png";
import tp from "../assets/tp.png";
import tr from "../assets/tr.png";
import ml from "../assets/ml.png";

import classImg from "../assets/classImg.jpeg";
import classImg2 from "../assets/classImg2.jpeg";
import classImg3 from "../assets/classImg3.jpeg";
import thor from "../assets/thor.png";
import pc from "../assets/pc.png";
import class3 from "../assets/class1.png";

import qu from "../assets/qu.png";
import team from "../assets/team.png";
import que from "../assets/que.png";
import mot from "../assets/mot.png";
import bmo from "../assets/bmo.png";
import ok from "../assets/ok.png";


import { RiReactjsLine } from "react-icons/ri";

import { BiLogoPostgresql } from "react-icons/bi";
import {BiLogoAws} from "react-icons/bi"

import { BiLogoPython ,BiDevices,BiColumns, BiCabinet, BiLogoCPlusPlus, BiCodeBlock, BiLogoJava} from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" }, //here include things youve done in class 
  { label: "Game Center", href: "#gamecenter" }, 
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "NESSMA MOHDY",
  greet: "Hello there! 👋🏻",
  description:
    "I am a committed Software and Mechatronics student with a deep enthusiasm for everything connected to electronics and coding. I hope to work on cars, airplanes, or chip development.",
};

export const CLASSES = [
  {
    id: 1,
    name: "Machine Learning",
    description:
      "Techniques for extracting, cleaning, and visualizing data from engineering applications, along with fundamental numerical computation methods used in learning algorithms.",
    image: classImg,
    smallDes: "Covers essential supervised and unsupervised learning algorithms, with a focus on utilizing existing software libraries and frameworks to address challenges in various engineering fields. <br /> Tasks (Python, sckit-learn): <br /> -Pre processing on a heart disease data set using columnTransfer and standardScaller. Thus using hyper-parameters on a pipeline with SVC, Logistic Regression, and Random Forest. <br /> - Classifcation and regression on a wine data linear set <br /> - Compared MSE and R^2 for DT, RF, and GB", 
    secondImage: ml,
    githubLink: "https://github.com/nessmamd/MachineLearning",
  },

  {
    id: 3,
    name: "Operating Systems",
    description:
      "In ENSF 461, I explored essential operating system principles, including virtual memory and address space management, I/0 operations, and processes and threads. I fimilarized with applying OS concepts in the Linux operating systems.",
    image: classImg2,
    secondImage: null,
    smallDes: "Covered CPU scheduling techniques for optimizing performance and persistent storage strategies for maintaining data beyond process execution. I also delved into concurrent programming to handle inter-process communication and synchronization, and gained insights into OS security and protection mechanisms. <br /> Labs (done in python and linux): <br /> - Parrallized sequence image <br /> - Parallel algorthim using pthread framework <br /> - Built a simulation of OS page table managment <br /> - Creating my own malloc() <br /> - Made a schedule simulator <br /> - own shell built <br />", 
    githubLink: "https://github.com/nessmamd/OperatingS",
  },
  {
    id: 4,
    name: "RISC-V and Hardware Organization",
    description:
      "In this class, I explored computer architecture and assembly language programming, covering CPU, buses, memory, and instruction sets.",
    image: classImg3,
    secondImage: class3,
    smallDes: " I gained practical experience with bitwise and logical operations, including `lbu` and `sb` instructions, and learned about floating-point representation, hardware organization, address translation, and I/O devices. This course deepened my understanding of low-level programming and computer systems.: - Work with numbers in different systems: decimal, binary, octal, and hexadecimal<br /> - Represent negative numbers using 2's-complement format<br /> - Apply Boolean algebra to simplify expressions<br /> - Use Karnaugh maps for minimal SOP and POS expressions<br /> - Analyze and design combinational circuits with standard modules (e.g., adders, multiplexers)<br /> - Address timing and practical design issues in digital circuits<br /> - Design digital circuits using Programmable Logic Devices (PLDs)<br /> - Analyze and design sequential logic circuits with flip-flops, state diagrams, and tables<br /> - Develop sequential-circuit modules, including various registers and counters", 
    githubLink: "https://github.com/nessmamd/RISC-V",
  },

  
];


export const SOFT_SKILLS = [
  { name: 'Communication', image: qu },
  { name: 'Teamwork', image: team },
  { name: 'Problem-Solving', image: que },
  { name: 'Motivated', image: mot },
  { name: 'Adventurous', image: bmo },
  { name: 'Time management', image: ok },
  // Add more skills as needed
];

export const PROJECTS = [
  {
    id: 1,
    name: "The Last Show",
    description:
      "I developed with my partner, a full-stack application using React, AWS, and Terraform that generates obituaries. The app integrates ChatGPT for text generation, Amazon Polly for speech synthesis, and Cloudinary for media storage to create an AI Obituary sandbox game.",
    image: projectImage1,
    githubLink: "https://github.com/nessmamd/obituariy-ai",
  },
  {
    id: 2,
    name: "Rycho",
    description:
      "Rycho is an audio sharing social media application for music and podcast enthusiasts. Created with tailwind, mongoDB, spotify API, and typescript",
    image: projectImage2,
    githubLink: "https://github.com/nessmamd/Rycho",
  },
  {
    id: 3,
    name: "Flight Simulator",
    description:
      "An application, built with Java, MySQL, and Maven, is designed for a single airline company, enabling users and agents to browse, select, and manage flights, seats, and insurance. Registered users gain benefits, airline agents and admins manage various tasks, with a focus on systematic design and adaptability to evolving requirements.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "LongTimeNoCrypto",
    description:
      "Welcome to the 'Long Time No...' repository, a unique cryptocurrency where secret messages you wish you had sent are turned into digital assets. The project features encrypted message handling with Hill cipher and SHA256, a Merkle tree for validation, and includes both client and server-side code for secure, peer-to-peer transactions.",
    image: projectImage4,
    githubLink: "https://github.com/nessmamd/longTimeNoCrypto",
  },
  {
    id: 5,
    name: "LED Controller",
    description:
      "LEDController is a microcontroller-based app that manages LED states (ON/OFF, blinking) with push buttons and captures data for analysis using Python. Key features include ADC conversion, system clock adjustment, UART communication, interrupt-driven I/O handling, and precise time delays with Timer interrupts.",
    image: projectImage5,
    githubLink: "https://github.com/nessmamd/LEDController",
  },
  {
    id: 6,
    name: "Simple Processor",
    description:
      "The project aims to design and simulate a basic processor in Verilog, integrating components such as an ALU, control unit, and registers into a simple RISC architecture. It involves creating these components, assembling them into a functional processor, and using Verilog simulation tools to ensure accurate operation and instruction execution.",
    image: projectImage6,
    githubLink: "https://github.com/nessmamd/VerliProcessorn",
  },
  {
    id: 7,
    name: "Neural Processer FPGA",
    description:
      "Utilized PyTorch to train a neural network, extracting weights for further application in custom neural network development using C++. Employed Verilog on the FPGA DE10-Lite board to enhance neural network creation efficiency and eliminate iterative processes, resulting in accelerated development.",
    image: projectImage7,
    githubLink: "https://github.com/nessmamd/neuralfpga",
  },
  {
    id: 8,
    name: "Lotion",
    description:
      "A Notion-like application named Lotion with HTML, CSS, and React.",
    image: projectImage8,
    githubLink: "https://github.com/nessmamd/lotions",
  },
  {
    id: 9,
    name: "Animal Shelter",
    description:
      "Ever had to manage a centre of pets that require medicine, certain care, and certain foods given a limited amount of staff? This java program uses a clean GUI and an algorithm to sort through a database to create the perfect schedule to account for all pet needs.",
    image: projectImage9,
    githubLink: "https://github.com/IshaHaider/ScheduleBuilder",
  },
  {
    id: 10,
    name: "Braille to English ",
    description:
      "A small terminal line program that converts braille to english or english to braille",
    image: toto,
    githubLink: "https://github.com/nessmamd/btoe",
  },
  
  
];

export const BIO = [
  "As a passionate 3rd-year Software Engineering student with a Minor in Mechatronics, I thrive at the intersection of technology and creativity. My interests span automotive tech, AI, robotics, firmware, and game development, reflecting my love for cars, video games, and electronics. Whether I'm coding, making music, or hiking, I’m always eager to explore diverse fields, embracing software's versatility to innovate across multiple disciplines.",
  "I’m constantly on the lookout for side projects and work opportunities that allow me to apply my skills in new and challenging ways. For me, learning and growth happen through hands-on experience, so I’m always seeking opportunities to expand my knowledge and push the boundaries of what I can achieve. My goal is to continuously evolve as a developer and creator, contributing to projects that inspire and challenge me.",

];

export const SKILLS = [
  // , ,  , ,, , MatLab, Assembly,, Git, Unix 
  //maybe include a bunch of images of the rest
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <BiLogoPython className="text-4xl text-white lg:text-5xl" />,
    name: "Python",
    experience: "3+ years",
  },
  {
    icon: <BiLogoAws className="text-4xl text-green-600 lg:text-5xl" />,
    name: "AWS",
    experience: "0.5+ years",
  },
  {
    icon: <BiDevices className="text-4xl text-red-600 lg:text-5xl" />,
    name: "C",
    experience: "2+ years",
  },
  {
    icon: <BiLogoCPlusPlus className="text-4xl text-green-600 lg:text-5xl" />,
    name: "C++",
    experience: "2+ years",
  },
  {
    icon: <BiLogoJava className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
    experience: "1+ years",
  },
  {
    icon: <BiCabinet className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MATLAB",
    experience: "1+ years",
  },
  {
    icon: <BiColumns className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Assembly",
    experience: "1+ years",
  },
  {
    icon: <BiCodeBlock className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Linux/Unix",
    experience: "0.5+ years",
  },
];

export const EXTRA_PLATFORMS = [
  {
    name: "Docker"
  }, 
  {
    name: "TerraForm"
  }, 
  {
    name: "TCP & UDP"
  },   
  {
    name: "Arduino"
  }, 
  {
    name: "Blender"
  },
  {
    name: "Unity"
  }, 
  {
    name: "Verilog"
  },
  {
    name: "Git"
  },
  {
    name: "C#"
  },
  {
    name: "Ansible"
  },
  {
    name: "Kubernetes"
  }, 
  {
    name: "Jira"
  }, 
  {
    name: "Quartus"
  }, 
  {
    name: "Excel"
  },
  {
    name: "HTML"
  },
]

export const EXPERIENCES = [

  {
    title: "Controls Engineering Team Member",
    company: "Schulich Space Rover Team",
    duration: "Ocotber 2023 - Present",
    description:
      "I developed firmware scripts using the Phidget library to implement an emergency stop button for resetting the arm's position and solved a critical bug that impacted rover movement across all code. Additionally, I created a polling system to continuously monitor the status of all rover motors, maintained the wiring of the entire rover, and conducted dynamic analysis on rover wheels to develop a PID control system. ",
    images: [two,three,one]
    
    },
  {
    title: "Haptic Robotic Arm & Data Analyst Undergraduate Researcher",
    company: "University of Calgary",
    duration: "May 2023 - August 2023",
    description:
      "Transformed and crafted a cutting-edge haptic arm, overseeing PCB design and arm assembly using the open source THOR. Contributed to an inspiring project that gamifies the haptic system, empowering individuals with disabilities to enhance their capabilities. Utilized machine learning tools within MATLAB to collaborate with esteemed professors and researchers in the Health Sciences Department, culminating in the successful publication of a comprehensive report on Long Covid.",
    images: [thor, pc]
  },
  {
    title: "Computer Vision Engineer",
    company: "AiRM",
    duration: "October 2022 - April 2023",
    description:
      "My team members and I have created a pick and place system that works for a wide range of industries, utlizing the Kinova Gen 3 and AI. By integrating OpenCV for visual recognition, I have enabled the system to accurately identify and pick up objects of varying shapes and sizes, thereby improving the speed and precision of the process. Through both corner detection, object detection, and linear algebra.",
    images: [tp,tr,tt]
    },
  {
    title: "Full Stack and Communication Intern",
    company: "Luminous Energy Solutions LTD.",
    duration: "January 2023 - May 2023",
    description:
      "I created a dynamic sponsorship website that streamlined client-company information and provided access to an extensive database of potential sponsors and collaborators for energy reduction programs.I also authored a detailed 40-page report, demonstrating my expertise in using RETScreen and conducting on-site testing for the efficient implementation of data collection devices.",
    images: [rep] 
    },
  {
    title: "Assistant Repairman",
    company: "BMW Autogroup",
    duration: "July 2022",
    description:
      "I worked closely with a skilled repairman to streamline vehicle intake and diagnosis, ensuring efficient communication of mechanical findings with the repair team. I also provided exceptional customer service by addressing client concerns and managing inventory, assisting with material procurement and storage to support the repair process effectively.",
    images: [rep]
    },
  {
    title: "Unity Assistant Teacher",
    company: "Minds in Motion",
    duration: "January 2022 - May 2022",
    description:
      "Taught the Unity Gaming platform to kids ranging in the ages of 10-15 with weekly one hour classes.",
    images: [rep]
    },
  
];

export const EDUCATION = [
  {
    degree: "Major of Software Engineering, Minor in Mechatronics Engineering",
    institution: "Univeristy of Calgary",
    duration: "September 2021 - Present",
    description:
      "Awards: Deans List (2022), Diversity Champions Engineering, Jason Lang Scholarship, PURE Award",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/nessmamd",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
