import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from '../hoc';
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
      return (
        <>
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>{t('about.subTitle')}</p>
              <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-base w-full leading-[30px]"
            >
                {t('about.content')}
            </motion.p>

            <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
      );
};

export default SectionWrapper(About, "about");
