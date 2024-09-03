import { motion } from "framer-motion";
import projectImage9 from "../assets/raa.gif";

const Contact = () => {
    return(
        <section className="py-16" id="contact">
            <div className="text-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }} 
                    className="mb-8 flex items-center justify-center space-x-4"
                >
                    <h2 className="text-4xl font-extrabold text-white-800">Contact Me</h2>
                    <motion.img 
                        src= {projectImage9}
                        alt="Contact GIF" 
                        className="w-12 h-12"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.5 }} 
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }} 
                    className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
                >
                    <p className="mb-12 text-lg text-white-600">
                        I'd love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a 
                            href="mailto:nessmamo@outlook.com" 
                            className="px-8 py-4 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:from-white-600 hover:to-white-700 transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            Email Me
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/nessmamohdy/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-8 py-4 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-white-700 transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;
