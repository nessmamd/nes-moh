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
  { id: 1, name: "C Compiler", description: "C compiler built from scratch in C: hand-written lexer, recursive-descent parser, and a three-address IR supporting control flow, functions, integer/unsigned/floating-point types, pointers, arrays, structs, and dynamic memory, with a backend emitting x86-64 assembly.", tech: ["C", "x86-64 Assembly", "Compilers"], githubLink: null },
  { id: 2, name: "Wikipedia Race Game", description: "Full-stack multiplayer Wikipedia racing game with a Chrome extension for timed gameplay and leaderboards. Flask/PostgreSQL backend with WebSocket real-time co-op, and an ML difficulty engine using ONNX Runtime and Dijkstra's algorithm based on category divergence.", image: wiki, tech: ["JavaScript", "Flask", "PostgreSQL", "WebSocket", "ONNX Runtime"], githubLink: "https://github.com/nessmamd/Wikifind" },
  { id: 3, name: "2048 Solver", description: "Reinforcement learning system automating live 2048 via Selenium with a custom Gymnasium wrapper. Benchmarked DQN, PPO, and MCTS, landing on an AlphaZero-style MCTS agent.", image: projectImage6, tech: ["Python", "PyTorch", "Gymnasium", "Machine Learning"], githubLink: "https://github.com/nessmamd/2048Solver" },
  { id: 4, name: "Scavenger Hunt", description: "Haptic robotic arm with NVIDIA AR glasses for interactive gaming.", image: headset, tech: ["C++", "AR", "Robotics", "NVIDIA"], githubLink: "https://github.com/nessmamd/scavenger-hunt" },
  { id: 5, name: "LongTimeNoCrypto", description: "Peer-to-peer messaging system with a custom SHA-256 implementation and encryption over TCP, propagating across 5+ nodes in under 50 ms.", image: projectImage4, tech: ["C++", "Networking", "Encryption"], githubLink: "https://github.com/nessmamd/longTimeNoCrypto" },
  { id: 6, name: "LED Controller", description: "Microcontroller-based app managing LED states with Python analysis.", image: projectImage5, tech: ["C", "Python", "Microcontroller"], githubLink: "https://github.com/nessmamd/LEDController" },
  { id: 7, name: "The Last Show", description: "Full-stack application using React, AWS, and Terraform that generates obituaries using ChatGPT and reads them aloud with Amazon Polly.", image: projectImage1, tech: ["React", "AWS", "Terraform", "ChatGPT"], githubLink: "https://github.com/nessmamd/obituariy-ai" },
  { id: 8, name: "Rycho", description: "Audio sharing social media application for music and podcast enthusiasts.", image: projectImage2, tech: ["React", "Tailwind", "MongoDB", "TypeScript"], githubLink: "https://github.com/nessmamd/Rycho" },
  { id: 9, name: "Lotion", description: "Notion-like application with HTML, CSS, and React.", image: projectImage8, tech: ["React", "HTML", "CSS"], githubLink: "https://github.com/nessmamd/lotions" },
  { id: 10, name: "Flight Simulator", description: "Airline booking application built with Java, MySQL, and Maven.", image: projectImage3, tech: ["Java", "MySQL", "Maven"], githubLink: null },
  { id: 11, name: "Animal Shelter", description: "Java GUI program for pet shelter scheduling and care management.", image: projectImage9, tech: ["Java", "Swing", "Algorithms"], githubLink: "https://github.com/IshaHaider/ScheduleBuilder" },
  { id: 12, name: "Braille to English", description: "Terminal program converting between braille and English.", image: toto, tech: ["Python", "Linux"], githubLink: "https://github.com/nessmamd/btoe" },
];

export const SKILLS = [
  // ML / AI
  { name: "PyTorch", experience: "2+ years", icon: "SiPytorch", category: "ml" },
  { name: "ONNX Runtime", experience: "1+ years", icon: "SiOnnx", category: "ml" },
  { name: "CUDA", experience: "1+ years", icon: "SiNvidia", category: "ml" },
  { name: "Computer Vision (YOLO / ViT / ResNet)", experience: "2+ years", icon: "SiOpenai", category: "ml" },
  { name: "ROS2", experience: "1+ years", icon: "SiRos", category: "ml" },
  { name: "Edge Inference / Model Optimization", experience: "1+ years", icon: "SiTensorflow", category: "ml" },

  // Embedded / Firmware / Systems
  { name: "Python", experience: "4+ years", icon: "SiPython", category: "firmware" },
  { name: "Embedded C", experience: "3+ years", icon: "SiC", category: "firmware" },
  { name: "C++", experience: "2+ years", icon: "BiLogoCPlusPlus", category: "firmware" },
  { name: "Rust", experience: "1+ years", icon: "SiRust", category: "firmware" },
  { name: "RTOS", experience: "1+ years", icon: "SiLinux", category: "firmware" },
  { name: "Firmware / UEFI", experience: "1+ years", icon: "SiIntel", category: "firmware" },
  { name: "Assembly (x86-64 / RISC-V)", experience: "2+ years", icon: "BiChip", category: "firmware" },
  { name: "CAN / SPI / UART / UDS", experience: "2+ years", icon: "BiChip", category: "firmware" },
  { name: "Cross-compilation / Multithreading", experience: "2+ years", icon: "BiChip", category: "firmware" },

  // Full Stack
  { name: "React", experience: "1+ years", icon: "RiReactjsLine", category: "fullstack" },
  { name: "JavaScript / TypeScript", experience: "2+ years", icon: "FaJs", category: "fullstack" },
  { name: "HTML / CSS", experience: "2+ years", icon: "FaHtml5", category: "fullstack" },
  { name: "Node.js", experience: "1+ years", icon: "SiNodedotjs", category: "fullstack" },
  { name: "SQL", experience: "1+ years", icon: "BiLogoPostgresql", category: "fullstack" },

  // Infrastructure / Tools
  { name: "Linux / Unix", experience: "3+ years", icon: "SiLinux", category: "tools" },
  { name: "Docker", experience: "2+ years", icon: "SiDocker", category: "tools" },
  { name: "Kubernetes", experience: "1+ years", icon: "SiKubernetes", category: "tools" },
  { name: "CI/CD", experience: "2+ years", icon: "SiGithubactions", category: "tools" },
  { name: "Git", experience: "3+ years", icon: "SiGit", category: "tools" },
  { name: "AWS / Terraform", experience: "1+ years", icon: "FaAws", category: "tools" },
];

export const EXTRA_PLATFORMS = [
  { name: "Java" },
  { name: "MATLAB" },
  { name: "Haskell" },
  { name: "Buck2" },
  { name: "MCP" },
  { name: "TCP & UDP" },
  { name: "Arduino" },
  { name: "Verilog" },
  { name: "Quartus" },
  { name: "Ansible" },
  { name: "Jira" },
  { name: "C#" },
  { name: "Unity" },
  { name: "Blender" },
];

export const EXPERIENCES = [
  {
    title: "Platform Software Intern",
    company: "Figure AI",
    duration: "September - December 2026",
    bullets: [
      "Owned end-to-end teleoperation integration across Linux applications and system services, validating 5G, Wi-Fi, and wired communication, RTOS scheduling, and SDK integration using C++ and Python.",
      "Root-caused integration failures using journalctl, ip, nmcli, and script-driven analysis of tcpdump captures, achieving 100% nightly test passes.",
      "Developed an end-to-end latency measurement and analysis pipeline spanning robot-to-teleoperation communication and peripheral devices, including hand-tracking hardware, IMUs, and Meta Quest headsets.",
      "Correlated frame-level image data with MCAP recordings to characterize latency and identify performance bottlenecks across the system.",
      "Built a distributed Wi-Fi testing system using configurable routers to dynamically enable and disable connectivity, enabling controlled validation of teleoperation behavior under varying network conditions.",
    ],
    tech: ["C++", "Python", "Linux", "RTOS", "MCAP", "tcpdump"],
  },
  {
    title: "Vehicle Software Intern",
    company: "Tesla",
    duration: "January - August 2026",
    bullets: [
      "Developed a layered automotive diagnostic communication stack following the OSI model, implementing SAE J1979/ISO 15031-5 OBD-II over ISO 15765-2 (ISO-TP) and CAN (DoCAN) through a proxy architecture scalable across vehicle platforms.",
      "Integrated the stack on an RTOS to meet the 50 ms P2 tester timing budget and validated reliability through fuzz testing and long-duration soak tests.",
      "Enabled Diagnostic Trouble Code (DTC) support on the Cybertruck main vehicle controller by integrating the Diagnostic Event Manager (DEM) library with Unified Diagnostic Services (UDS) hooks.",
      "Closed a DFMEA-flagged Steer-by-Wire safety gap by gating steering authority on controller qualification across 5 controllers and 2 monitors, persisting fault state in NVRAM, and adding runtime rear-rack health checks that propagate a failure to every controller.",
      "Rejected stale rear-rack SENT frames with an incrementing-counter check and tuned SPC58 eMIOS input filtering, cutting noise-induced signal errors by 30% under simulated EMI.",
      "Redesigned Cybercab's electronic parking brake status logic into a table-driven cross-check that resolves brake state from independent actuator and controller signals.",
      "Built a Rust model of a 3-phase gate driver (register map, SPI framing, fault injection) with a Python test interface for SIL.",
      "Managed builds with Buck2 and extended a Haskell code generator to eliminate configuration-drift bugs between JSON configs and C MIA handlers across ECU configurations.",
    ],
    tech: ["C", "Rust", "Python", "Haskell", "CAN", "UDS", "RTOS", "Buck2"],
  },
  {
    title: "Firmware Development Intern",
    company: "AMD",
    duration: "May - December 2025",
    bullets: [
      "Developed platform-agnostic x86 firmware in C bridging coreboot and UEFI, integrating GPIO and NBIO subsystems for the Asus ROG Xbox platform, enabling deployment across consoles and servers with minimal code duplication.",
      "Received the Spotlight Award for building a cross-platform Python/Unix application to automate pre-silicon simulation updates, optimizing power and storage consumption by approximately 20GB per employee per day.",
      "Engineered an automated triage system using JIRA and Synopsys APIs in Python, reducing a 2-hour manual debugging process to 5 minutes and clearing 3,000+ issues within 2 months.",
    ],
    tech: ["C", "x86", "UEFI", "Python", "Unix"],
  },
  {
    title: "Machine Vision Engineer Intern",
    company: "Tesla",
    duration: "January - May 2025",
    bullets: [
      "Initiated and deployed an end-to-end machine vision system for cathode production, owning camera selection, setup, and installation.",
      "Implemented a ResNet-based model for real-time defect and crack detection with 94%+ accuracy, helping prevent 4 days of downtime and $5M USD in collateral losses.",
      "Benchmarked ResNet, Vision Transformer, YOLO, and a custom ResNet using PyTorch and CUDA to optimize accuracy-latency trade-offs for production deployment.",
      "Co-developed a Flask, InfluxDB, and Caspian monitoring platform to visualize thousands of cells processed weekly, with Halcon image analysis via FTP, query caching, and incremental retrieval.",
    ],
    tech: ["PyTorch", "CUDA", "Flask", "InfluxDB", "Halcon"],
    images: [tesla],
  },
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
