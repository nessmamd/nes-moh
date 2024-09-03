import { EDUCATION, CLASSES } from "../constants";
import { MdArrowOutward } from 'react-icons/md';
import { motion } from "framer-motion";
import { useState } from "react";

const EducationSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-8" id="education">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-4 text-center text-3xl font-bold"
            >
                Education
            </motion.h2>
            {EDUCATION.map((edu, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.5 }}
                    key={index}
                    className="mb-6 p-10 rounded-lg shadow-md"
                >
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-lg">{edu.institution}</p>
                    <p className="text-sm text-stone-300">{edu.duration}</p>
                    <p className="mt-2">{edu.description}</p>
                </motion.div>
            ))}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {CLASSES.map((project, index) => (
                    <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-3xl border border-gray-200"
                    >
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
                                className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-300 flex items-center"
                            >
                                <span className="mr-2">View on GitHub</span>
                                <MdArrowOutward />
                            </a>
                            <button
                                onClick={() => handleToggle(index)}
                                className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-300 w-16 h-16 flex items-center justify-center mt-4"
                            >
                                {expandedIndex === index ? "Collapse" : "Expand"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Expanding Portion */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: expandedIndex !== null ? 1 : 0, height: expandedIndex !== null ? 'auto' : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-8"
          >
              {expandedIndex !== null && (
                  <div className="p-6 border rounded-lg shadow-md">
                      <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: CLASSES[expandedIndex].smallDes }}></p>
                      {CLASSES[expandedIndex].secondImage && (
                          <motion.img
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5 }}
                              src={CLASSES[expandedIndex].secondImage}
                              alt={`Expanded view of ${CLASSES[expandedIndex].name}`}
                              className="mb-4 w-full object-cover rounded-md"
                          />
                      )}
                  </div>
              )}
          </motion.div>

            {/* Additional Notable Classes Section */}
            <div className="mt-12">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4 text-2xl font-bold"
                >
                    Other Notable Classes
                </motion.h3>
                <h1> Embedded & Hardware Systems, Networking, Data Structures & Algorithms, Linear Algebra, Mobile Robotics, VR, Digital Circuits, Control Systems, Signals & Transforms</h1>
            </div>
        </section>
    );
};

export default EducationSection;
