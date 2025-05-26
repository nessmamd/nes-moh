import { motion } from "framer-motion";
import cpp from "../assets/C++.png"; 
import openGL from "../assets/OpenGL.jpeg"; 
import Csharp from "../assets/Csharp.png"; 
import unity from "../assets/unity.png";
import unity1 from "../assets/unity2.png"; 
import example from "../assets/Screenshot 2025-05-18 at 5.34.59 PM.png"
import webgl from "../assets/WebGL_Logo.svg.png"; 
const GameCenter = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen p-8" id="gamecenter">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h1 className="text-4xl font-extrabold text-white-500 mb-4">
                    Game Center
                </h1>
                {/* <h2 className="text-xl text-gray-600 mb-8">
                    I love playing video games, but even more, I enjoy creating them. Here, I will showcase all the mini-games I've made.
                </h2> */}
                {/* <p className="text-2xl text-blue-500 animate-pulse">
                    Coming Soon...
                </p> */}
            </motion.div>
            {/* Games already made */}
            <motion.div 
                className="p-10 rounded-xl text-center w-full max-w-4xl bg-purple-900 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-white-800 mb-4">Games</h3>
                <p className="text-lg text-white-600 mb-6">
                    Here are a few of the games I’ve already completed, each built with different tools and technologies.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                    <img
                    src={unity1}
                    alt="Unity Scavenger Hunt Game"
                    className="w-24 h-24 object-contain rounded-md mb-2"
                    />
                    <p className="text-white-700 text-sm">Scavenger Hunt Game</p>
                    <a
                    href="https://github.com/nessmamd/scavenger-hunt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 hover:opacity-80 transition"
                    >
                    <img
                        src="https://media.discordapp.net/attachments/715996959655329943/1376703890531291228/Github-desktop-logo-symbol.svg.png?ex=68364ae9&is=6834f969&hm=118dbbda8e84de4c0541d8f59e9901e4f6c5d0b1206df85eaf5ed0f3c16be0e1&=&format=webp&quality=lossless&width=1644&height=1644"
                        alt="GitHub"
                        className="w-6 h-6"
                    />
                    </a>

                </div>
                </div>

            </motion.div>

            {/* Game in Development Section */}
            <motion.div 
                className="p-10 rounded-xl text-center w-full max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <a href="https://github.com/nessmamd/ggame" className="text-2xl text-red-500 animate-pulse">
                    In Development (press here for a peak)...
                </a>
                <p className="text-lg text-gray-600 mb-6">
                    I'm currently creating a web based game, through unity + openGL + C#, where you can login to study with customizable characters with other people online! 
                 </p>

                {/* Images Section */}
                <motion.div className="flex justify-center gap-4 mb-6"initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                
                    <img src={example} alt="Game Image 2" className=" h-32 object-contain rounded-lg" />
                </motion.div>
            </motion.div>

            
        </section>
    );
};

export default GameCenter;
