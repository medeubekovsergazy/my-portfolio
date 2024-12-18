import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    docker,
    jobit,
    threejs,
    nuxtjs,
    vuejs,
    vite,
    websocket,
    nomad,
    imarketing,
    mentorme,
    jetour,
    santehmart,
    tanuaward,
    crm,
    mukaman,
    insta,
    telegram,
    linkedin
} from "../assets";

import { useTranslation } from "react-i18next";

export const useNavLinks = () => {
    const { t } = useTranslation();

    return [
        {
            id: "about",
            title: t("navbar.about"),
        },
        {
            id: "work",
            title: t("navbar.work"),
        },
        {
            id: "portfolio",
            title: t("navbar.portfolio"),
        },
        {
            id: "contact",
            title: t("navbar.contact"),
        },
    ];
};

const services = [
    {
        title: "Vue Developer",
        icon: vuejs,
    },
    {
        title: "Nuxt Developer",
        icon: nuxtjs,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vue 3 JS",
        icon: vuejs,
    },
    {
        name: "Nuxt 3 JS",
        icon: nuxtjs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Vite",
        icon: vite,
    },
    // {
    //     name: "WebSocket",
    //     icon: websocket,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const contacts = [
    {
        link: "https://www.linkedin.com/in/sergazy-medeubekov-a2a739261/",
        icon: linkedin,
    },
    {
        link: "https://t.me/rocknrolla17",
        icon: telegram,
    },
    {
        link: "https://www.instagram.com/mdbkvvs/",
        icon: insta,
    },
]

export const useExperiences = () => {
    const { t } = useTranslation();
    return [
        {
            title: t('experience.juniorFrontendDeveloper.title'),
            company_name: "IMarketing",
            icon: imarketing,
            iconBg: "#E6DEDD",
            date: t("experience.juniorFrontendDeveloper.date"),
            points: [
                t("experience.juniorFrontendDeveloper.point1"),
                t("experience.juniorFrontendDeveloper.point2"),
                t("experience.juniorFrontendDeveloper.point3"),
                t("experience.juniorFrontendDeveloper.point4"),
                t("experience.juniorFrontendDeveloper.point5")
            ],
        },
        {
            title: t("experience.frontendDeveloper.title"),
            company_name: "Nomad Standard Consulting",
            icon: nomad,
            iconBg: "#383E56",
            date: t("experience.frontendDeveloper.date"),
            points: [
                t("experience.frontendDeveloper.point1"),
                t("experience.frontendDeveloper.point2"),
                t("experience.frontendDeveloper.point3"),
                t("experience.frontendDeveloper.point4"),
                t("experience.frontendDeveloper.point5")
            ],
        },
    ];
};

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

export const useProjects = () => {
    const { t } = useTranslation();
    return [
        {
            name: t("works.projects.0.name"),
            description: t("works.projects.0.description"),
            tags: [
                {
                    name: "nuxtjs",
                    color: "green-text-gradient",
                },
                {
                    name: "javascript",
                    color: "blue-text-gradient",
                },
                {
                    name: "scss",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
            ],
            image: jetour,
            source_code_link: "https://jetour-auto.kz/",
        },
        {
            name: t("works.projects.1.name"),
            description: t("works.projects.1.description"),
            tags: [
                {
                    name: "nuxt",
                    color: "green-text-gradient",
                },
                {
                    name: "typescript",
                    color: "blue-text-gradient",
                },
                {
                    name: "tailwind",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
            ],
            image: santehmart,
            source_code_link: "https://santehmart.kz/",
        },
        {
            name: t("works.projects.2.name"),
            description: t("works.projects.2.description"),
            tags: [
                {
                    name: "vuejs",
                    color: "green-text-gradient",
                },
                {
                    name: "javascript",
                    color: "blue-text-gradient",
                },
                {
                    name: "scss",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
            ],
            image: mentorme,
            source_code_link: "https://www.mentorme.kz/",
        },
        {
            name: t("works.projects.3.name"),
            description: t("works.projects.3.description"),
            tags: [
                {
                    name: "nuxtjs",
                    color: "green-text-gradient",
                },
                {
                    name: "typescript",
                    color: "blue-text-gradient",
                },
                {
                    name: "tailwind",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
            ],
            image: tanuaward,
            source_code_link: "https://tanuaward.kz/",
        },
        {
            name: t("works.projects.4.name"),
            description: t("works.projects.4.description"),
            tags: [
                {
                    name: "vuejs",
                    color: "green-text-gradient",
                },
                {
                    name: "javascript",
                    color: "blue-text-gradient",
                },
                {
                    name: "scss",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
            ],
            image: mukaman,
            source_code_link: "https://mukaman.kz/",
        },
        {
            name: t("works.projects.5.name"),
            description: t("works.projects.5.description"),
            tags: [
                {
                    name: "nuxtjs",
                    color: "green-text-gradient",
                },
                {
                    name: "typescript",
                    color: "blue-text-gradient",
                },
                {
                    name: "tailwind",
                    color: "pink-text-gradient",
                },
                {
                    name: "restapi",
                    color: "white-text",
                },
                {
                    name: "wazzup",
                    color: "green-text-gradient",
                },
                {
                    name: "websocket",
                    color: "blue-text-gradient",
                },
            ],
            image: crm,
            source_code_link: "",
        },
    ];
};


export { services, technologies, testimonials, contacts };
