import arthPinkLogo from './assets/arth-pink.png';
import happyLogo from './assets/happyneo.png';
import accioLogo from './assets/accio.svg';
import bioconLogo from './assets/biocon.jpg';

export const services = [
    {
        title: "Trainee",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Associate Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Abhishek Yadav';

export const experiences = [
    {
        company: 'Arth Impact',
        role: 'Software Engineer',
        duration: 'October 2023 - Present',
        logo: arthPinkLogo,
        points: [
            'Implemented OTP-based KYC verification for Aadhaar, ensuring secure and efficient user identification.',
            'Developed an MIS data reporting system used across the entire organization for comprehensive data insights and tracking.',
            'Worked on a Sales Management Application that includes smart task assignments, dynamic task configurations, and sales tracking for enhanced operational efficiency.',
            'Contributed to the Ovs Campaign Builder, which automatically triggers promotional messages and gathers leads through engagement with WhatsApp message links, improving customer outreach and lead generation.',
        ],
        url: 'https://arthimpact.in/',
    },
    {
        company: 'Happy Neo',
        role: 'Associate Software Engineer',
        duration: 'Jan 2023 - September 2023',
        logo: happyLogo,
        points: [
            'Played a key role in Django-based backend projects, including a Sales Application and Partner Portal within the fintech industry, focusing on the optimization of designing, developing, and maintaining robust backend systems.',
            'Contributed to the API Toolkit project, an authentication-based module, and the HappyHook platform, enabling merchants to upload passbooks, earn money, and perform recharges for DTH and mobile services.'
        ],
        url: 'https://happyness.net/',
    },
    {
        company: 'Acciojob',
        role: 'Trainee',
        duration: 'June 2022 - Dec 2022',
        logo: accioLogo,
        points: [
            'Comprehensive training in DSA, frontend technologies, Spring Boot, OS, and DBMS, fostering expertise in end-to-end web development.'
        ],
        url: 'https://acciojob.com/',
    },
];

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
