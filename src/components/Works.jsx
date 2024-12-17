import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from '../assets';
import { SectionWrapper } from '../hoc';
import { useProjects } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
     index,
     name,
     description,
     tags,
     image,
     source_code_link,
    }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <Tilt
                className="bg-tertiary p-5 rounded-2xl w-[360px] h-[500px]"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={link} alt="link" className="w-1/2 h-1/2 object-contain"/>
                        </div>
                    </div>
                </div>

                <div className="mt-5 max-h-[150px] overflow-y-auto">
                    <h3 className="text-white font-bold text-2xl">{name}</h3>
                    <p className="mt-2 text-secondary text-sm">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-sm ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const { t } = useTranslation();
    const projects = useProjects();
      return (
        <>
            <motion.div
                variants={textVariant()}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className={styles.sectionSubText}>{t('works.subTitle')}</p>
                <h2 className={styles.sectionHeadText}>{t('works.title')}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-4 text-secondary text-base w-full leading-[30px]"
            >
                {t('works.content')}
            </motion.p>

            <div className='mt-20 w-full flex flex-wrap items-start justify-center gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
      );
};

export default SectionWrapper(Works, 'portfolio');
