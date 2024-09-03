import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion"
import { useState } from "react";
import projectImage1 from "../assets/one.png";
import projectImage2 from "../assets/two.png";
import projectImage3 from "../assets/three.png";

const WorkExperience = () =>{
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return(
        <section className = "pt-20" id = "work">
            <motion.h2 initial = {{opacity: 0, y:-20}} whileInView = {{opacity: 1, y:0}} transition = {{duration: 1}} className = "text-center text-4xl font-semibold tracking-tighter"> Work Experience</motion.h2> 
            <motion.div initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 1, delay: 0.5}} className = "space-y-8 p-10">
                {EXPERIENCES.map((experience, index) =>(
                    <motion.div initial = {{opacity: 0, x:-20}} whileInView = {{opacity: 1, x:0}} transition = {{duration: 1, delay: index*0.2}} key={index} className ="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                        <h3 className = "text-2xl font-semibold">{experience.title}</h3> 
                        <p className = "text-xl">{experience.company}</p>
                        <p className = "text-sm text-stone-300">{experience.duration}</p>
                        <p className = "mt-2 text-base">{experience.description}</p>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => handleToggle(index)}
                                className="px-6 py-2 text-lg font-medium text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                            >
                                {expandedIndex === index ? "Collapse" : "Expand"}
                            </button>
                        </div>
                        {expandedIndex === index && (
                            <motion.div 
                            initial={{ opacity: 0, y: -20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }} 
                            className="mt-4 flex flex-col justify-center text-gray-700"
                        >
                            {experience.images.map((src, index) => (
                                <motion.img 
                                    initial={{ opacity: 0, y: -20 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 1 }} 
                                    key={index} 
                                    src={src} 
                                    alt={`project-image-${index}`} 
                                    className="mx-2" // Add margin to space images
                                />
                            ))}
                        </motion.div>
                        
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default WorkExperience