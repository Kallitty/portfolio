import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'

export const HERO_CONTENT = `I am a dedicated full-stack developer with four years of experience in crafting robust and scalable web applications. My expertise spans both front-end technologies, including React and JavaScript, and back-end development utilizing PHP, Laravel, and MySQL. I am committed to delivering exceptional user experiences and driving business growth through innovative solutions.`

export const ABOUT_TEXT = `I'm a results-oriented full-stack developer with four years of experience building robust web applications. Proficient in React, JavaScript, PHP, Laravel, and MySQL, I excel at crafting user-centric solutions. My passion for problem-solving and continuous learning drives me to deliver exceptional results. Outside of development, I enjoy strategic thinking through the game of chess and exploring emerging technologies online. 

I also excel at creating user-centric solutions. Leveraging tools like Sass, Bootstrap, and Framer Motion, I build visually appealing and interactive interfaces. My passion for problem-solving and continuous learning drives me to deliver exceptional results. `

export const EXPERIENCES = [
  {
    year: '2020 - Present',
    role: 'Full Stack Developer',
    company: 'OJ Technologies',
    description: `Supported the development of full-stack web applications under the mentorship of experienced developers.
    Assisted in the development of RESTful APIs using Laravel, facilitating effective communication between the frontend and backend.
    Engaged in frontend development tasks using React and JavaScript, improving my skills in dynamic user interface creation.
    Contributed to database management tasks, gaining hands-on experience with MySQL and SQLlite.
    Learned best practices in software development, including version control with Git, and participated in daily scrum meetings to stay aligned with team objectives.Contributed to the optimization of web applications for speed and scalability.
    Conducted testing and debugging to ensure the quality and reliability of the fullstack code.`,
    technologies: [
      'Laravel',
      'Php',
      'React',
      'Javascript',
      'React',
      'mySQL',
      'Sqllite',
    ],
  },
  {
    year: '2019 - 2020',
    role: 'Freelance Web Developer',
    company: 'Wunmage Tech',
    description: `Developed user-friendly interfaces using React.js and JavaScript to meet project requirements.
    Worked closely with senior developers to understand project requirements and deliver solutions.

    Collaborated with backend developers to integrate frontend components seamlessly.
    Implemented responsive design principles to ensure optimal performance across various devices.
    Participated in code reviews and provided constructive feedback to team members.
    Learnt how to resolve technical issues and optimized code for improved performance and maintainability.`,
    technologies: ['Javascript', 'React', 'Bootstrap', 'Css', 'HTML'],
  },
]

export const PROJECTS = [
  {
    title: 'Exam Management App',
    image: project2,
    description:
      'SEPP stands as a state-of-the-art application crafted to empower users on their path to academic excellence. The SEPP project, from its description, presents a fascinating challenge that blends the power of modern web technologies such as Laravel, JavaScript, and React to deliver a comprehensive and interactive platform for exam preparation. Sepp offers many trials to an Exam before the main Exam..',
    technologies: ['HTML', 'CSS', 'React', 'Javascript', 'Laravel', 'Php'],
  },
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. A cutting-edge e-commerce platform designed to revolutionize the online shopping experience. The website boasts a responsive design, ensuring a seamless transition across various devices and screen sizes. With a user-friendly interface, customers can effortlessly navigate and find what they are looking for. The pride is, it showcases high-quality product images and videos, empowering customers to make informed purchasing decisions. Security is paramount, and I implemented secure payment processing with multiple options, including mobile payments and wallets. To personalize the experience, we offer tailored recommendations and loyalty programs, rewarding our valued customers. The site is built with the latest technology, including AI-powered chatbots for assistance and social media integration for community engagement. We continuously monitor performance to ensure improvements and provide engaging content marketing to educate and inspire. ',
    technologies: ['HTML', 'CSS', 'Sass', 'React', 'Bootstrap', 'Laravel'],
  },
  {
    title: 'Portfolio Website',
    image: project3,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Framer-motion', 'TailwindCss'],
  },
  {
    title: 'Social Platform',
    image: project4,
    description:
      'A platform for networking, with features like chatting, commenting, and user profiles.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'mySQL'],
  },
]

export const CONTACT = {
  address: '474 Fouth Avenue, Available, ON REQUEST ',
  phoneNo: '+12availableonrequest ',
  email: 'samueluche432@gmail.com',
}
