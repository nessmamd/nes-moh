import { motion } from "framer-motion";

const GameCenter = () => {
    return(
        <section className="flex items-center justify-center h-screen" id = "gamecenter">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-white-400 mb-4">
                    Game Center
                </h1>
                <h2> I love to play video games, but more making them. Here I will be displaying all of the mini games I have made</h2>
                <p className="text-2xl text-blue-800 animate-pulse">
                    Coming Soon...
                </p>
            </div>
        </section>
    )
}

export default GameCenter;
