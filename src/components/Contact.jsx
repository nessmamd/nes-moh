import { motion } from "framer-motion";

const Contact = () => {
    return(
        <section className="py-16" id="contact">
            <div className="text-center" >
                <motion.h2 initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}} className="mb-8 text-center text-4xl font-extrabold text-white-800">Contact Me</motion.h2>
                <motion.div initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}} className ="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                    <p className="mb-12 text-lg text-white-600">
                        I'd love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a 
                            href="mailto:nessmamo@outlook.com" 
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-white-600 text-white font-semibold rounded-full shadow-lg hover:from-white-600 hover:to-white-700 transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            Email Me
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/nessmamohdy/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-white-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-white-700 transform hover:scale-105 transition duration-300 ease-in-out"
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

