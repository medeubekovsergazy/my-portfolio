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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nuxtjs,
    vuejs,
    nomad,
    imarketing,
    mentorme,
    jetour
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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

const experiences = [
    {
        title: "Junior Frontend Developer",
        company_name: "IMarketing",
        icon: imarketing,
        iconBg: "#E6DEDD",
        date: "June 2022 - September 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Nomad Standard Consulting",
        icon: nomad,
        iconBg: "#383E56",
        date: "June 2022 - currently",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

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

const projects = [
    {
        name: "Jetour Auto online catalog",
        description:
            "Project description. What exactly is implemented in these sites:\n" +
            "Creating an intuitive interface.\n" +
            "Integration with CRM-systems to automate the processing of requests.\n" +
            "Providing fast and convenient navigation through the catalog of cars\n" +
            "Developed convenient functionality for familiarization and application for purchase or test drive of cars.\n" +
            "Functionality of integration to Bitrix 24 was realized.\n" +
            "Developed functionality for adding a model range and updating the characteristics of cars.",
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
                color: "green-text-gradient",
            },
        ],
        image: jetour,
        source_code_link: "https://jetour-auto.kz/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "MentorMe Educational Portal",
        description:
            "Project description. A website portal for students to enroll in international universities.\n" +
            "What is realized in this project:\n" +
            "Intuitive interface for familiarization with services;\n" +
            "World Map with indication of students enrolled in International Universities.\n" +
            "Page with available grants and lists of programs for admission.\n" +
            "Learning platform for enrollment in the university of your choice and with a subscription system;\n" +
            "Login and Registration to the portal",
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
                color: "yellow-text-gradient",
            },
        ],
        image: mentorme,
        source_code_link: "https://www.mentorme.kz/",
    },
];

export { services, technologies, experiences, testimonials, projects };
