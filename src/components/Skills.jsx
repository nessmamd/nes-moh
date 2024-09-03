import { SKILLS, EXTRA_PLATFORMS, SOFT_SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 1, 
            staggerChildren: 0.5 // Corrected spelling
        }, 
    }, 
}

const itemsVariants = {
    hidden: {
        opacity: 0, x: -20
    }, 
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5 } 
    }
}

const Skills = () => {
    return (
        <div className="container mx-auto" id="skills">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-12 mt-20 text-center text-4xl font-semibold">
                Skills
            </motion.h2>
            <motion.div 
                // Added containerVariants to animate the container
                initial="hidden" 
                whileInView="visible"  
                variants={containerVariants}
                viewport={{ once: true }} 
                
                className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
            >
                {SKILLS.map((skill, index) => (
                    <motion.div 
                        variants={itemsVariants} 
                        key={index} 
                        className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}
                    >
                        <div className="flex items-center">
                            {skill.icon}
                            <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
                        </div>
                        <div className="text-md font-semibold lg:text-xl">
                            <span>{skill.experience}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-8 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/20 bg-stone-50/10">
                <h3 className="mb-4 text-center text-2xl font-semibold">
                    Additional Platforms
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {EXTRA_PLATFORMS.map((platform, index) => (
                        <div key={index} className="flex items-center justify-center py-2">
                            <span className="text-md lg:text-lg">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-8 mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/20 ">
                <h3 className="mb-4 text-center text-2xl font-semibold">
                    Soft Skills
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {SOFT_SKILLS.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-4 py-2">
                            <img src={skill.image} alt={skill.name} className="w-8 h-8 lg:w-12 lg:h-12" />
                            <span className="text-md lg:text-lg">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
};

export default Skills;
