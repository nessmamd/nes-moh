import { motion } from "framer-motion";
import cpp from "../assets/C++.png"; 
import openGL from "../assets/OpenGL.jpeg"; 
import sdl from "../assets/sdl.png"; 
const GameCenter = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen p-8" id="gamecenter">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h1 className="text-6xl font-extrabold text-white-500 mb-4">
                    Game Center
                </h1>
                <h2 className="text-xl text-gray-600 mb-8">
                    I love playing video games, but even more, I enjoy creating them. Here, I will showcase all the mini-games I've made.
                </h2>
                {/* <p className="text-2xl text-blue-500 animate-pulse">
                    Coming Soon...
                </p> */}
            </motion.div>

            {/* Game in Development Section */}
            <motion.div 
                className="p-10 rounded-xl text-center w-full max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <a href="https://github.com/nessmamd/ggame" className="text-2xl text-red-500 animate-pulse">
                    In Development...
                </a>
                <p className="text-lg text-gray-600 mb-6">
                    I'm currently working on an exciting new game, a vampire who meets different historical characters in a mythical forest.
                </p>

                {/* Images Section */}
                <motion.div className="flex justify-center gap-4 mb-6"initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                    <img src= {cpp} alt="Game Image 1" className="w-32 h-32 object-cover rounded-lg" />
                    <img src={openGL} alt="Game Image 2" className="w-32 h-32 object-contain rounded-lg" />

                    <img src={sdl} alt="Game Image 3" className="w-32 h-32 object-cover rounded-lg" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GameCenter;
