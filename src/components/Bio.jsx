import { BIO } from "../constants";
import resume from "../assets/Resume.pdf";
import port from "../assets/port.pdf";
import ss from "../assets/port.pdf";
import { motion } from "framer-motion";
import projectImage1 from "../assets/h1.png";
import projectImage2 from "../assets/h2.png";
import projectImage3 from "../assets/h3.png";
import projectImage4 from "../assets/h4.png";
import projectImage5 from "../assets/h5.png";
import projectImage6 from "../assets/h6.png";


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
            <motion.div initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}}>
                <p className="mb-4 text-lg lg:text-3xl">Interests: </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <img src={projectImage1} alt="Interest 1" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <img src={projectImage2} alt="Interest 2" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <img src={projectImage3} alt="Interest 3" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <img src={projectImage4} alt="Interest 4" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <img src={projectImage5} alt="Interest 5" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <img src={projectImage6} alt="Interest 6" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    {/* Add more images as needed */}
                </div>


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
                    {/* <motion.iframe
                        initial = {{opacity: 0, y:-20}} whileInView = {{opacity:1, y:0}} transition = {{duration: 1}}
                        src= {port}  // Adjust the path if necessary
                        width="100%"
                        height="600px"
                        title="Portfolio Preview"
                        style={{ border: "none" }}
                    /> */}
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
