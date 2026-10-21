import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'
import project5 from '../assets/projects/project-5.jpg'

export const HERO_CONTENT = `I am a full-stack and data/AI engineer with experience building robust web applications, data systems and practical AI features. My core skills include PHP, Laravel, Python, Nodejs, .Net, MySQL, React, Vuejs, Go and JavaScript, along with Power BI for dashboards and reporting.I develop end-to-end solutions that cover frontend interfaces, backend APIs, database design and automated workflows. I have built e-commerce and customer management systems, interactive Power BI reports, and knowledge platforms that improve how teams access and use information. I also have experience integrating conversational and semantic AI features into real applications.I enjoy creating user-centric interfaces using tools such as Sass, Bootstrap and Framer Motion, and I focus on delivering solutions that are both technically solid and easy for non-technical colleagues to adopt. I am committed to continuous learning and to turning complex requirements into clear, reliable systems that support business growth.`

export const ABOUT_TEXT = `I'm a results-oriented full-stack developer with years of experience building robust web applications. Proficient in PHP, Laravel, Python,.Net, Nodejs, MySQL, React, Vuejs and JavaScript, I excel at crafting user-centric solutions. My passion for problem-solving and continuous learning drives me to deliver exceptional results. Outside of development, I enjoy strategic thinking through the game of chess and exploring emerging technologies online. 

I also excel at creating user-centric solutions. Leveraging tools like Sass, Bootstrap, and Framer Motion, I build visually appealing and interactive interfaces. My passion for problem-solving and continuous learning drives me to deliver exceptional results. `

export const EXPERIENCES = [
  {
    year: '2020 - Present',
    role: 'Full Stack Developer',
    company: 'OJ Technologies',
    description: [
      ' Accountable for end-to-end delivery of production features and integrations: requirements, design, implementation, testing, release and maintenance.',
      ' Built robust REST APIs and backend services with Laravel/PHP and Node.js; contributed to .NET components and third-party service integrations.',
      ' Developed interactive front-ends with React, Vue.js, TypeScript and modern JavaScript; connected components to backend APIs and optimised for performance.',
      ' Worked with MySQL and SQL Server, data modelling, query optimisation and investigation of application-level performance issues (including N+1).',
      ' Led rebuild of internal API documentation and onboarding portal (React, Vue, Laravel, Framer Motion): cut onboarding time by 56% and support inquiries by 27%.',
      ' Applied Agile practices (Jira, stand-ups, backlog refinement), Git workflows, code reviews, CI/CD and mentoring of junior developers on standards and debugging.',
      ' Created developer education programmes that generated 80+ enterprise and developer leads; improved team process through clearer documentation and reusable patterns.',
      ' Developed Python components for scripting, data handling and project deliverables using reusable modules, OOP practices and exception handling.',
    ],
    technologies: [
      'Laravel',
      'Php',
      'Phython',
      '.Net',
      'Nodejs',
      'React',
      'Javascript',
      'Vue.js',
      'mySQL',
      'Sqllite',
    ],
  },
  {
    year: '2019 - 2020',
    role: 'Freelance Web Developer / Technical Writer',
    company: 'Wunmage Tech',
    description: [
      '**Technical Writing:**',
      'Transformed complex technical concepts into clear and accessible content tailored for both technical and non-technical audiences.',
      'Created over 25+ technical articles, guides, and documentation pages, resulting in a 27% increase in page views and a 25% increase in user engagement.',
      'Developed and maintained comprehensive API documentation, reducing developer onboarding time by 40%.',
      'Utilized MadCap Flare to create interactive and dynamic user manuals, resulting in a 20% increase in user satisfaction.',
      'Collaborated with cross-functional teams to ensure accurate and up-to-date documentation, resulting in a 15% reduction in support requests.',
      '**Graphic Design:**',
      'Designed visually appealing and intuitive user interfaces using Canva and Photoshop, directly contributing to a 25% increase in conversion rates on the platform.',
      'Focused on creating user-centric designs that maintained visual coherence and enhanced user engagement.',
      'Played a key role in strategic planning and execution of website updates, ensuring flawless rollouts while minimizing page load times and preserving a high-quality user experience.',
    ],
    technologies: ['Javascript', 'React', 'Bootstrap', 'Css', 'HTML'],
  },
]

export const PROJECTS = [
  {
    title: 'Exam Management App',
    image: project2,
    description:
      'SEPP stands as a state-of-the-art application crafted to empower users on their path to professional and or academic excellence. The SEPP project, from its description, presents a fascinating challenge that blends the power of modern web technologies such as Laravel, JavaScript, and React to deliver a comprehensive and interactive platform for exam preparation. Sepp offers many trials to an Exam before the main Exam.',
    technologies: ['HTML', 'CSS', 'React', 'Javascript', 'Laravel', 'Php'],
    url: 'https://seppedu.com',
  },

  {
    title: 'SEO-Friendly E-Commerce Powerhouse:',
    image: project5,
    description:
      'A high-performance online marketplace built for maximum visibility and conversions with blazing-fast React frontend with lazy-loaded product images and videos, laravel-powered backend handling secure payments and inventory, mobile-optimized design that adapts perfectly to any screen. This is not just another online store - it is a conversion machine with personalized shopping experiences through machine learning, seamless checkout flows with multiple payment options, engaging product showcases with HD images and demo videos, built-in marketing tools for email campaigns and promotions. The Result is a visually stunning e-commerce platform that ranks well in search engines while delivering real business results through increased conversions and customer retention.',

    technologies: [
      'HTML',
      'CSS',
      'Bootstrap 5',
      'Sass for pixel-perfect responsive designs',
      'React',
      'Laravel',
    ],
    url: 'https://pgregal.com',
  },

  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A cutting-edge e-commerce platform designed to revolutionize the online shopping experience. The website boasts a responsive design, ensuring a seamless transition across various devices and screen sizes. With a user-friendly interface, customers can effortlessly navigate and find what they are looking for. The pride is, it showcases high-quality product images and videos, empowering customers to make informed purchasing decisions. Security is paramount, and I implemented secure payment processing with multiple options, including mobile payments and wallets. To personalize the experience, we offer tailored recommendations and loyalty programs, rewarding our valued customers. The site is built with the latest technology, including AI-powered chatbots for assistance and social media integration for community engagement. We continuously monitor performance to ensure improvements and provide engaging content marketing to educate and inspire. ',
    technologies: ['HTML', 'CSS', 'Sass', 'React', 'Bootstrap', 'Laravel'],
    url: 'https://hairmosphere.seppedu.com',
  },
  {
    title: 'Portfolio Website',
    image: project3,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Framer-motion', 'TailwindCss'],
    url: 'https://samuel.seppedu.com',
  },
  {
    title: 'Social Platform',
    image: project4,
    description:
      'A platform for networking, with features like chatting, commenting, and user profiles.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'mySQL'],
    url: 'https://samuel.seppedu.com',
  },
]

export const CONTACT = {
  address: '7 C Avenue, Available, ON REQUEST ',
  phoneNo: '+44availableonrequest ',
  email: 'samueluche432@gmail.com',
}
