import { BIO } from "../constants";
import resume from "../assets/Resume.pdf";
import ss from "../assets/port.pdf";
import { motion } from "framer-motion";


const Bio = () => {
    return (
        <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
            <motion.h2 initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}} className="text-center text-3xl lg:text-4xl">Bio</motion.h2>
            <motion.div initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.8, delay: 0.2}}>
                {BIO.map((bio, index) => (
                    <motion.p initial ={{opacity: 0}} whileInView = {{opacity: 1, x:0}} transition = {{duration: 0.8, delay: index*0.5}} key={index} className="mb-4 text-lg lg:text-xl">
                        {bio}
                    </motion.p>
                ))}
            </motion.div>

            {/* Resume Display Section */}
            <div className="mt-8">
                <motion.h3 initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}} className="text-xl font-semibold mb-4">My Resume</motion.h3>
                <motion.div initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}} className="flex flex-col items-center">
                    {/* Inline PDF Viewer */}
                    <motion.iframe
                        initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}}
                        src= {resume}  // Adjust the path if necessary
                        width="100%"
                        height="600px"
                        title="Resume Preview"
                        style={{ border: "none" }}
                    />
                    {/* Download Link */}
                    <a
                        href={resume}  // Adjust the path if necessary
                        download
                        className="mt-4 text-blue-500 hover:underline"
                    >
                        Download Resume
                    </a>
                    <a
                        href={ss}  // Adjust the path if necessary
                        download
                        className="mt-4 text-blue-500 hover:underline"
                    >
                        Download Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
