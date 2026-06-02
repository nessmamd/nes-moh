import projectImage1 from "./assets/project1.jpeg";
import projectImage2 from "./assets/project2.jpeg";
import projectImage3 from "./assets/project3.jpeg";
import projectImage4 from "./assets/project4.jpeg";
import projectImage5 from "./assets/project5.jpeg";
import projectImage6 from "./assets/RobotGame.png";
import projectImage7 from "./assets/project7.jpeg";
import projectImage8 from "./assets/project8.jpeg";
import projectImage9 from "./assets/project9.jpeg";
import headset from "./assets/scavengerhunt.png";
import toto from "./assets/toto.jpeg";
import wiki from "./assets/WikiGame.png";
import one from "./assets/one.png";
import tesla from "./assets/DSC00994.jpg";
import two from "./assets/two.png";
import three from "./assets/three.png";
import rep from "./assets/rep.png";
import tt from "./assets/tt.png";
import tp from "./assets/tp.png";
import tr from "./assets/tr.png";
import ml from "./assets/ml.png";
import classImg from "./assets/classImg.jpeg";
import classImg2 from "./assets/classImg2.jpeg";
import classImg3 from "./assets/classImg3.jpeg";
import thor from "./assets/thor.png";
import pc from "./assets/pc.png";
import class3 from "./assets/class1.png";
import qu from "./assets/qu.png";
import team from "./assets/team.png";
import que from "./assets/que.png";
import mot from "./assets/mot.png";
import bmo from "./assets/bmo.png";
import ok from "./assets/ok.png";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "NESSMA MOHDY",
  greet: "Hello there! 👋🏻",
  description: "I am a committed Software and Mechatronics student with a deep enthusiasm for everything connected to electronics and coding. I hope to work on cars, airplanes, or robots.",
};

export const BIO = [
  "I’m a 4th-year Software Engineering student with a Minor in Mechatronics, focused on building systems that blend software, hardware, and intelligence.",

  "I learn best through building—taking ideas, turning them into real systems, and improving them through iteration and experimentation.",

  "My interests sit in automotive tech, robotics, and interactive systems, and I’m always looking for projects that challenge me technically and creatively.",
];

export const PROJECTS = [
  { id: 1, name: "The Last Show", description: "Full-stack application using React, AWS, and Terraform that generates obituaries using ChatGPT.", image: projectImage1, tech: ["React", "AWS", "Terraform", "ChatGPT"], githubLink: "https://github.com/nessmamd/obituariy-ai" },
  { id: 2, name: "Rycho", description: "Audio sharing social media application for music and podcast enthusiasts.", image: projectImage2, tech: ["React", "Tailwind", "MongoDB", "TypeScript"], githubLink: "https://github.com/nessmamd/Rycho" },
  { id: 3, name: "Scavenger Hunt", description: "Haptic robotic arm with NVIDIA AR glasses for interactive gaming.", image: headset, tech: ["C++", "AR", "Robotics", "NVIDIA"], githubLink: "https://github.com/nessmamd/scavenger-hunt" },
  { id: 4, name: "Flight Simulator", description: "Airline booking application built with Java, MySQL, and Maven.", image: projectImage3, tech: ["Java", "MySQL", "Maven"], githubLink: "https://github.com/user/task-management-tool" },
  { id: 5, name: "LongTimeNoCrypto", description: "Unique cryptocurrency for secret messages as digital assets.", image: projectImage4, tech: ["Blockchain", "Encryption", "Python"], githubLink: "https://github.com/nessmamd/longTimeNoCrypto" },
  { id: 6, name: "LED Controller", description: "Microcontroller-based app managing LED states with Python analysis.", image: projectImage5, tech: ["C", "Python", "Microcontroller"], githubLink: "https://github.com/nessmamd/LEDController" },
  { id: 7, name: "2048 Solver", description: "Solving 2048 game with ML models and training.", image: projectImage6, tech: ["Python", "Machine Learning", "PyTorch", "Gymnasium"], githubLink: "https://github.com/nessmamd/2048Solver" },
  { id: 9, name: "Lotion", description: "Notion-like application with HTML, CSS, and React.", image: projectImage8, tech: ["React", "HTML", "CSS"], githubLink: "https://github.com/nessmamd/lotions" },
  { id: 10, name: "Animal Shelter", description: "Java GUI program for pet shelter scheduling and care management.", image: projectImage9, tech: ["Java", "Swing", "Algorithms"], githubLink: "https://github.com/IshaHaider/ScheduleBuilder" },
  { id: 11, name: "Braille to English", description: "Terminal program converting between braille and english.", image: toto, tech: ["Python", "Linux"], githubLink: "https://github.com/nessmamd/btoe" },
  { id: 12, name: "Wikipedia Game", description: "Terminal-based Wikipedia game.", image: wiki, tech: ["Python", "JavaScript", "Flask/PostgreSQL", "WebSocket", "ONNX Runtime"], githubLink: "https://github.com/nessmamd/Wikifind" },
];

export const SKILLS = [
  // ML / AI
  { name: "PyTorch", experience: "2+ years", icon: "SiPytorch", category: "ml", proficiency: 45 },
  { name: "ONNX Runtime", experience: "1+ years", icon: "SiOnnx", category: "ml", proficiency: 20 },
  { name: "CUDA", experience: "1+ years", icon: "SiNvidia", category: "ml", proficiency: 50 },
  { name: "Computer Vision (YOLO / ViT / ResNet)", experience: "2+ years", icon: "SiOpenai", category: "ml", proficiency: 45 },
  { name: "Edge Inference / Model Optimization", experience: "1+ years", icon: "SiTensorflow", category: "ml", proficiency: 20 },

  // Embedded / Firmware / Systems
  { name: "Embedded C", experience: "3+ years", icon: "SiC", category: "firmware", proficiency: 90 },
  { name: "C++", experience: "2+ years", icon: "BiLogoCPlusPlus", category: "firmware", proficiency: 85 },
  { name: "Rust", experience: "1+ years", icon: "SiRust", category: "firmware", proficiency: 80 },
  { name: "RTOS", experience: "1+ years", icon: "SiLinux", category: "firmware", proficiency: 80 },
  { name: "Firmware / UEFI", experience: "1+ years", icon: "SiIntel", category: "firmware", proficiency: 75 },
  { name: "CAN / SPI / UART / UDS", experience: "2+ years", icon: "BiChip", category: "firmware", proficiency: 85 },
  { name: "Cross-compilation / Multithreading", experience: "2+ years", icon: "BiChip", category: "firmware", proficiency: 85 },

  // Full Stack
  { name: "React", experience: "1+ years", icon: "RiReactjsLine", category: "fullstack", proficiency: 80 },
  { name: "JavaScript / TypeScript", experience: "2+ years", icon: "FaJs", category: "fullstack", proficiency: 85 },
  { name: "HTML / CSS", experience: "2+ years", icon: "FaHtml5", category: "fullstack", proficiency: 85 },
  { name: "Node.js", experience: "1+ years", icon: "SiNodedotjs", category: "fullstack", proficiency: 80 },
  { name: "SQL", experience: "1+ years", icon: "BiLogoPostgresql", category: "fullstack", proficiency: 75 },

  // Infrastructure / Tools
  { name: "Linux / Unix", experience: "3+ years", icon: "SiLinux", category: "tools", proficiency: 90 },
  { name: "Docker", experience: "2+ years", icon: "SiDocker", category: "tools", proficiency: 85 },
  { name: "Kubernetes", experience: "1+ years", icon: "SiKubernetes", category: "tools", proficiency: 75 },
  { name: "CI/CD", experience: "2+ years", icon: "SiGithubactions", category: "tools", proficiency: 80 },
  { name: "Git", experience: "3+ years", icon: "SiGit", category: "tools", proficiency: 90 },
  { name: "AWS / Terraform", experience: "1+ years", icon: "SiAmazonaws", category: "tools", proficiency: 75 },
];

export const EXTRA_PLATFORMS = [
  { name: "Docker" },
  { name: "TerraForm" },
  { name: "TCP & UDP" },
  { name: "Arduino" },
  { name: "Blender" },
  { name: "Unity" },
  { name: "Verilog" },
  { name: "Git" },
  { name: "C#" },
  { name: "Ansible" },
  { name: "Kubernetes" },
  { name: "Jira" },
  { name: "Quartus" },
  { name: "Excel" },
  { name: "HTML" },
];

export const EXPERIENCES = [
  { title: "Steer-by-Wire Firmware Intern", company: "Tesla", duration: "January - May 2026", description: "Developed and tested firmware in C for vehicle steering systems with a focus on safety and reliability for the Cybertruck platform. Implemented signal processing features including glitch filtering, SENT protocol handling, and extensive SIL (Software-in-the-Loop) testing using Rust and Python. Worked with automotive peripherals such as eMIOS for timing and control functions. Built Rust-based emulations of gate drivers and NVRAM components to support simulation and validation of steering behavior in a software-in-the-loop environment. Contributed to the design of a parking-by-brake control feature for the Cybercab steering system. Additionally worked with Buck2 build tooling and Haskell-based code generation to produce compile-time header files for signal metadata and interface definitions."}, 
  { title: "Firmware Development Intern", company: "AMD", duration: "May 2025 - Present", description: "Developing in C for openSIL x86 firmware, creating the branch that is an abstraction between the UEFI and the coreboot working specifically on the GFX and the NBIO components. For every image created as simulation had to built which was run on an internal tool. This internal tool had flaws when downloading the nightly version. I developed an updater on Linux and Windows machines that updates the simulation nightly without taking up 90% of the space it was taking. In addition I helped manage all coverity issues in the x86 codebase, automating jira tickets, emails, and the fixes themselves. This saved months of work into simply one command which resulted in me winning an award." },
  { title: "Machine Vision Software Engineering Intern", company: "Tesla", duration: "January - May 2025", description: "I worked on enhancing an OCR deep learning model to accurately detect key information about batteries, carefully adapting the system to the constraints of the pre-installed camera hardware. In collaboration with my team, I also helped develop a full-stack web application (React, Flask, FTPs, SQL, influxDB) that retrieves and organizes all inline production images and runs machine learning models against it. Beyond software, I designed a vision system collaborating with other teams—connecting camera hardware to deep learning models and computer vision algorithms—evaluating multiple architectures(pyTorch, tensorFlow, and in-house software) to ensure optimal performance. Additionally, I handled the installation and calibration of laser profilers to improve measurement precision within the system.", images: [tesla] },
  { title: "Controls Engineering Team Member", company: "Schulich Space Rover Team", duration: "October 2023 - May 2024", description: "I developed firmware scripts using the Phidget library to implement an emergency stop button for resetting the arm's position and solved a critical bug that impacted rover movement across all code. Additionally, I created a polling system to continuously monitor the status of all rover motors, maintained the wiring of the entire rover, and conducted dynamic analysis on rover wheels to develop a PID control system.", images: [two, three, one] },
  { title: "Haptic Robotic Arm and Data Analyst Undergraduate Researcher", company: "University of Calgary", duration: "May 2023 - August 2023", description: "Transformed and crafted a cutting-edge haptic arm, overseeing PCB design and arm assembly using the open source THOR. Contributed to an inspiring project that gamifies the haptic system, empowering individuals with disabilities to enhance their capabilities. Utilized machine learning tools within MATLAB to collaborate with esteemed professors and researchers in the Health Sciences Department, culminating in the successful publication of a comprehensive report on Long Covid.", images: [thor, pc] },
  { title: "Computer Vision Engineer", company: "AiRM", duration: "October 2022 - April 2023", description: "My team members and I have created a pick and place system that works for a wide range of industries, utlizing the Kinova Gen 3 and AI. By integrating OpenCV for visual recognition, I have enabled the system to accurately identify and pick up objects of varying shapes and sizes, thereby improving the speed and precision of the process. Through both corner detection, object detection, and linear algebra.", images: [tp, tr, tt] },
  { title: "Full Stack Intern", company: "Luminous Energy Solutions LTD.", duration: "January 2023 - May 2023", description: "I created a dynamic sponsorship website that streamlined client-company information and provided access to an extensive database of potential sponsors and collaborators for energy reduction programs.I also authored a detailed 40-page report, demonstrating my expertise in using RETScreen and conducting on-site testing for the efficient implementation of data collection devices." },
  { title: "Assistant Repairman", company: "BMW Autogroup", duration: "July 2022", description: " worked closely with a skilled repairman to streamline vehicle intake and diagnosis, ensuring efficient communication of mechanical findings with the repair team. I also provided exceptional customer service by addressing client concerns and managing inventory, assisting with material procurement and storage to support the repair process effectively." },
  { title: "Unity Assistant Teacher", company: "Minds in Motion", duration: "January 2022 - May 2022", description: "Taught Unity Gaming platform to kids ages 10-15." },
];

export const EDUCATION = [
  { degree: "Major of Software Engineering, Minor in Mechatronics Engineering", institution: "University of Calgary", duration: "September 2021 - Present", description: "Awards: Deans List (2022), Diversity Champions Engineering, Jason Lang Scholarship, PURE Award" },
];

export const CLASSES = [
  { id: 1, name: "Machine Learning", description: "Data extraction and learning algorithms", image: classImg, githubLink: "https://github.com/nessmamd/MachineLearning" },
  { id: 2, name: "Operating Systems", description: "OS principles and Linux systems", image: classImg2, githubLink: "https://github.com/nessmamd/OperatingS" },
  { id: 3, name: "RISC-V and Hardware Organization", description: "Computer architecture and assembly language", image: classImg3, githubLink: "https://github.com/nessmamd/RISC-V" },
];

export const SOFT_SKILLS = [
  { name: "Communication", image: qu },
  { name: "Teamwork", image: team },
  { name: "Problem-Solving", image: que },
  { name: "Motivated", image: mot },
  { name: "Adventurous", image: bmo },
  { name: "Time management", image: ok },
];

export const SOCIAL_MEDIA_LINKS = [
  { href: "https://facebook.com/", icon: "FaFacebook", label: "Facebook" },
  { href: "https://discord.com/", icon: "FaDiscord", label: "Discord" },
  { href: "https://instagram.com/", icon: "FaInstagram", label: "Instagram" },
  { href: "https://twitter.com/", icon: "FaXTwitter", label: "Twitter" },
  { href: "https://github.com/nessmamd", icon: "FaGithub", label: "GitHub" },
  { href: "https://linkedin.com/in/nessmamohdy", icon: "FaLinkedin", label: "LinkedIn" },
];
