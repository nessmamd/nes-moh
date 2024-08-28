import { EDUCATION, CLASSES } from "../constants"
import { MdArrowOutward } from 'react-icons/md';
import {motion} from "framer-motion"

const EducationSection = () => {
    return(
        <section className = "py-8" id = "education">
            <motion.h2 initial = {{opacity: 0, y:-20}} whileInView = {{opacity: 1, y:0}} transition = {{duration: 1}} className = "mb-4 text-center text-3xl font-bold">Education</motion.h2>
            {EDUCATION.map((edu,index) => (
                <motion.div initial = {{opacity: 0, x: -20}} whileInView = {{opacity: 1, x:0}} transition = {{duration: 1, delay: index*0.5}} key = {index} className = "mb-6 p-10">
                    <h3 className = "text-xl font-semibold">{edu.degree}</h3>
                    <p className = "text-lg">{edu.institution}</p>
                    <p className = "text-sm text-stone-300">{edu.duration}</p>
                    <p className = "mt-2">{edu.description}</p>
                </motion.div>
            ))}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CLASSES.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-3xl">
                <img
                    src={project.image}
                    alt={project.name}
                    className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="mb-4 text-xl font-semibold">{project.name}</h3>
                    <p className="mb-6 p-6 text-sm">{project.description}</p>
                    <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-300"
                    >
                    <div className="flex items-center">
                        <span>View on GitHub</span>
                        <MdArrowOutward />
                    </div>
                    </a>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default EducationSection