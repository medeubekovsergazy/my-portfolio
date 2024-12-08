import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-5 shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-5 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-5 font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
};

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-base max-w-3xl leading-[30px]"
        >
            My full name is Medeubekov Sergazy and I am a frontend developer.
            My main stack in development, hard skills: HTML, CSS(Sass, Scss, Tailwind CSS), JavaScript, TypeScript, Frameworks: Vue.js, Nuxt.js, React.js.
            I have experience in creating landing pages, online stores, crm-systems, corporate websites, and e-learning sites.
            Soft skills are well developed, which allows me to work effectively in a team.
            I am responsible and always try to meet deadlines, strive for constant self-development, quickly learn new technologies and am ready to put them into practice.
            In my free time, I enjoy football, fitness, table tennis, mobile videography and work on developing my personal brand. <br/>
            Main goal: to become a professional in Web-development and a Senior Developer
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
  );
};

export default SectionWrapper(About, "about");
