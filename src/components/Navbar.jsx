import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { styles } from '../styles';
import { useNavLinks } from "../constants/index.js";
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    const navLinks = useNavLinks(t);

    return (
        <nav
            className={`
                ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
            `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt="logo" className="w-15 h-15 object-contain" />
                </Link>
                <ul className="list-none hidden sm:flex items-center justify-end gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                ? "text-white"
                                : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:flex">
                    <select
                        name="lang"
                        id="lang"
                        onChange={handleLanguageChange}
                        defaultValue={i18n.language}
                        className="flex items-center justify-center w-24 h-8 outline-none rounded border border-white-100 bg-primary cursor-pointer text-sm text-white"
                    >
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                        <option value="kz">Қазақша</option>
                    </select>
                </div>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-7 h-7 object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'}
                    p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
                    `}>
                        <ul className="list-none flex flex-col justify-end items-start gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } hover:text-white text-base font-poppins font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            <div className="flex sm:hidden">
                                <select
                                    name="lang"
                                    id="lang"
                                    onChange={handleLanguageChange}
                                    defaultValue={i18n.language}
                                    className="flex items-center justify-center w-24 h-8 outline-none rounded border border-white-100 bg-primary cursor-pointer text-sm text-white"
                                >
                                    <option value="ru">Русский</option>
                                    <option value="en">English</option>
                                    <option value="kz">Қазақша</option>
                                </select>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      );
};

export default Navbar;
