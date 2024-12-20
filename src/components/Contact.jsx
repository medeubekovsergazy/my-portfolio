import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from "../utils/motion.js";
import {useTranslation} from "react-i18next";
import { contacts } from "../constants/index.js";

// template_rwic4m6
// service_asd9nid
// LlAnQ9SbDyVtXeZy0

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name === '' || form.email === '' || form.message === '') {
      setLoading(false);
      alert('Please fill in all fields');
      return;
    } else {
      emailjs.send(
        'service_asd9nid',
        'template_ocy1k4s',
        {
          from_name: form.name,
          to_name: 'Sergazy',
          from_email: form.email,
          to_email: 'medeubekovsergazy@gmail.com',
          message: form.message
        },
        'LlAnQ9SbDyVtXeZy0'
      )
      .then(() => {
          setLoading(false),
          alert('Thank you for contact me!');
          setForm({
            name: '',
            email: '',
            message: ''
          })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong');
      });
    }
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.subTitle')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

        <div className="flex items-center justify-start w-full gap-5">
          {contacts.map((contact) => ( 
              <a href={contact.link} target="_blank" rel="noreferrer">
                <img
                  src={contact.icon}
                  alt='socials'
                  className="w-[30px] h-[30px] object-contain"
                />
              </a>
          ))}
        </div>

        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.labels.name')}</span>
            <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.placeholder.name')}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.labels.email')}</span>
            <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.placeholder.email')}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.labels.message')}</span>
            <textarea
                rows="7"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.placeholder.message')}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? t('contact.loading') : t('contact.button')}
          </button>
        </form>
      </motion.div>

      <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
