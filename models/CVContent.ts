import path from "path";

export const cvObject = {
    name: 'Daniele Asteggiante',
    job: 'Full Stack Developer',
    location: 'Bologna, Italy',
    profileImage: path.join(__dirname, '../pdfs/profile.png'),
    website: 'https://generativedan.com',
    technicalSkills: [
        'Java · Java EE · Spring Boot · Hibernate · Jax-Rs · Jax-Ws · JMS · EJB',
        'Python · Django · FastApi',
        'React.js · Vue.js · Redux · TypeScript',
        'Node · Express · Mongoose · Sequelize',
        'Linux · Docker · Bash scripting',
        'Database: MySQL · PostgreSQL · MongoDB · Oracle DBMS',
        'SEO, Google Analytics, Google Ads',
    ],
    jobExperience: [
        {
            company: 'NetService Spa',
            role: 'Senior Full Stack Developer and Team Leader',
            date: 'Sep 2023 - Present',
            description: 'I currently work as a senior developer and team leader, with responsibilities in designing and developing software using technologies such as Java (JavaFx, Java EE, Jax-Rs, Jax-Ws), Python (Django and Django Rest Framework), and JavaScript ( React and Vue with TypeScript). I also do Linux configurations, Bash scripting and Docker container management.',
            skills: ['Java', 'Python', 'JavaScript', 'React - Redux', 'Vue - Vuex', 'TypeScript', 'Django - Django Rest Framework', 'JavaFx', 'Java EE - Jax-Rs - Jax-Ws - JMS - EJB', 'Linux - Bash', 'Docker']
        },
        {
            company: 'Freelance',
            role: 'Software Developer',
            date: 'May 2023 - Sept 2023',
            description: 'Freelance collaborations with focus on software development in Java and React. I developed monolithic applications using Spring Boot, Hibernate and PostgreSQL, integrating React with TypeScript for the front end.',
            skills: ['Java', 'JavaScript', 'React - Redux', 'TypeScript', 'Spring Boot', 'Hibernate', 'PostgreSQL']
        },
        {
            company: 'Logika Control Srl',
            role: 'Software Developer',
            date: 'Apr 2023 - May 2023',
            description: 'I worked on the development of a software layer between the logs of embedded systems and the end user using Java 17, JavaFx, SQLite and Python 3.',
            skills: ['Java', 'JavaScript', 'JavaFx', 'SQLite', 'Python']
        },
        {
            company: 'Dentaurum Italia',
            role: 'Full Stack Developer',
            date: 'Gen 2017 - March 2023',
            description: 'I have worked in full-stack development, using a broad spectrum of technologies including Python (Django), Java EE, PHP (Laravel), React.js and Node.js. Plus, I got busy Of architectural design, Linux server management and VPS configuration.',
            skills: ['Java', 'Python', 'JavaScript', 'React - Redux', 'MongoDB', 'Node.js', 'Django - FastAPI', 'PHP - Laravel', 'Mysql - PostgreSQL', 'Linux - Bash']
        },
        {
            company: 'Dentaurum Italia',
            role: 'Graphic Web Designer and Marketing Manager',
            date: 'Oct 2014 - Dec 2016',
            description: 'I worked as a Web Designer and Marketing Manager, using CMS such as WordPress and Magento For create websites and digital communication strategies.',
            skills: ['WordPress', 'Magento', 'SEO', 'Google Analytics', 'Google Ads', 'Facebook Ads', 'Adobe Creative Suite'],
        },
        {
            company: 'Freelance',
            role: 'Graphic Web Designer and Marketing Manager',
            date: 'Oct 2008 - Dec 2016',
            description: 'I worked as a Web Designer and Marketing Manager, using CMS such as WordPress For create websites and digital communication strategies.',
            skills: ['WordPress', 'SEO', 'Google Analytics', 'Google Ads', 'Facebook Ads', 'Adobe Creative Suite'],
        }
    ],
    education: [
        {
            institution: 'CFI Ferrara',
            vote: '100/100',
            degree: 'Higher Technical Specialization: technician for the development of IT applications, big data and AI',
            date: 'Sep 2022 - Sep 2023',
            description: 'I obtained a Higher Technical Specialization in "Technician for Design and Lo Development of IT Applications", obtaining maximum marks (100/100). During the path, I have acquired advanced skills in software development, software engineering with UML, object oriented programming (OOP) and database design.',
            mainSubjects: [
                'Software development and UML engineering',
                'OOP with Java and JavaFX',
                'ER and Database design (MySQL, MongoDB)',
                'Python (Pandas, Flask)',
                'Web Development: HTML, CSS, JavaScript'
            ]
        },
        {
            institution: 'Accademia di Belle Arti di Bologna',
            vote: '108/110',
            degree: 'Bachelor Degree in Web e Graphic Design',
            date: 'Sep 2007 - Feb 2015',
            description: 'I completed a degree focused on graphic and web design, with particular attention to information technology applied to graphic design and at the website development.',
            mainSubjects: [
                'IT for graphic design',
                'Graphic design',
                'Web Design',
                'Adobe Creative Suite',
                'Action Script',
                'JavaScript',
                'HTML, CSS'
            ]
        },
        {
            institution: 'CNOS-FAP Salesiani Bologna',
            vote: '70/100',
            degree: 'Higher Technical Specialization: Multimedia and Communication',
            date: 'Oct 2005 - Opt 2006',
            description: 'I attended a technical specialization course (IFTS) in Graphic and Web Design, getting a rating of 70/100. The course explored web technologies and the main ones instruments for graphic and multimedia design.',
            mainSubjects: [
                'Graphic design',
                'Web Design',
                'Adobe Creative Suite',
                'JavaScript',
                'HTML, CSS'
            ]
        },
        {
            institution: 'Istituto Salesiano Beata Vergine di San Luca, Bologna',
            vote: '90/100',
            degree: 'High School Diploma in Advertising Graphics',
            date: 'Oct 2005 - Opt 2006',
            description: 'I obtained a high school diploma with a focus on Advertising Graphics, acquiring fundamental skills in graphic design and communication principles visual.',
            mainSubjects: [
                'Graphic design',
                'Web Design',
                'Adobe Creative Suite',
                'HTML, CSS'
            ]
        }
    ],
    languages: [
        {
            language: 'Italian',
            level: 'Native'
        },
        {
            language: 'English',
            level: 'Professional'
        },
    ],
    certifications: [
        {
            name: 'Front-End Web Development with React',
            date: 'Dec 2020',
            link: 'https://coursera.org/share/8271c5d07d516688f8c2a913dc98a352'
        },
        {
            name: 'JavaScript and PHP',
            date: 'Oct 2020',
            link: 'https://certification.w3schools.com/w3certified.asp?id=12292157'
        },
    ]
}