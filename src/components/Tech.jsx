import React from "react";
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants/index.js";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Tech = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What can I do</p>
          <h2 className={styles.sectionHeadText}>Hard Skills</h2>
        </motion.div>
        <div className='mt-10 flex flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
              <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
                <p className="text-white font-semibold text-base">{technology.name}</p>
              </div>
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(Tech, 'tech');
