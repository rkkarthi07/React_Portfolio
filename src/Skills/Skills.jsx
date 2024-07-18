import Particle from "../components/Particles"
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import { RiShareCircleLine as Share } from "react-icons/ri";
import { TbPointFilled as Point } from "react-icons/tb";
import { SiCoursera , SiHackerrank , SiUdemy , SiIbm} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import ExpImage from "../Images/Certification.png"
import "../components/styles.css"
import java from '../Images/Icon/java_icon.png'
import js from '../Images/Icon/javascript_icon.png'
import tailwind from '../Images/Icon/tailwind_icon.png'
import c from '../Images/Icon/c_icon.png'
import css from '../Images/Icon/css_icon.png'
import cpp from '../Images/Icon/cpp_icon.png'
import react from '../Images/Icon/react_icon.png'
import redux from '../Images/Icon/redux_icon.png'
import mysql from '../Images/Icon/mysql_icon.png'
import html from '../Images/Icon/html_icon.png'
import node from '../Images/Icon/node_icon.png'
import git from '../Images/Icon/git_icon.png'
import github from '../Images/Icon/github_icon.png'
import ibm from '../Images/Certificates/ibm.png'
import udemy from '../Images/Certificates/udemy.png'
import python from '../Images/Icon/python_icon.png'
import hackerrank from '../Images/Certificates/hackerrank.png'
import nptel from '../Images/Certificates/nptel.jpg'

const techData =[
    {
      "name": "Java",
      "icon": java
    },
    {
      "name": "C",
      "icon": c
    },
    {
      "name": "HTML5",
      "icon": html
    },
    {
      "name": "CSS3",
      "icon": css
    },
    {
      "name": "JS",
      "icon": js
    },
    {
      "name": "Tailwind",
      "icon": tailwind
    },
    {
      "name": "React",
      "icon": react
    },
    {
      "name": "MySql",
      "icon": mysql
    },
    {
      "name": "Git",
      "icon": git
    },
    {
      "name": "GitHub",
      "icon": github
    }
]
const certificate = [
    {
        "name": "Coursera",
        "course": ["Introduction to Web Development - HTML, CSS and Javascript - 91%" , "Creating front-end apps with React - 84%"],
        "provider": "IBM",
        "image": ibm,
        "link": "https://drive.google.com/drive/folders/1A0srxkfcIgiLkq9pE_5-BguokmLpaTPF?usp=sharing"
    },
    {
        "name": "Udemy",
        "course": ["Python course for Python Beginners","Java Collection Framework"],
        "provider": "Udemy",
        "image": udemy,
        "link": "https://drive.google.com/drive/folders/1LFQl2AkS7I5YH7bhXs9gJd2cuh0iP5SR?usp=sharing"
    },
    {
        "name": "Hackerrank",
        "course": ["HTML (Basic)" , "CSS (Basic)" ,"Javascript (Basic)","React (Basic)", "Problem Solving (Basic)", "Python (Basic)" ],
        "provider": "Hackerrank",
        "image": hackerrank,
        "link": "https://drive.google.com/drive/folders/1PEwbsV8g31C3xcOua6b79d7XyEtvnceD?usp=sharing"
    },
    {
      "name": "Nptel",
      "course": ["Data Structures and Algorithms using Java - 81 (Silver)" , "Basic Electric Circuits - 60 (Elite)" ,"Principle of Signals and Systems - 58"  ],
      "provider": "Nptel",
      "image": nptel,
      "link": "https://drive.google.com/drive/folders/1wE2VnFtxcCEiGxB2leCJi5-aGUFDvZdX?usp=sharing"
   }
];

const Certificate = (props) => {
  const name = props.name;

  return (
    <motion.div
      className="relative w-max border-black border-2 h-max m-5 overflow-hidden rounded"
      whileHover={{ scale: 1.30 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-y-auto">
        <div className="bg-white p-4 text-black text-center">
          {props.course.map((course, index) => (
            <div key={index} className="flex w-full text-sm md:text-md">
             <div className="min-w-max"><Point size={15} /></div> 
              <h2>{course}</h2>
            </div>
          ))}
          <div className="flex w-full mt-5">
            {name === "Coursera" ? (
              <SiCoursera size={25} />
            ) : name === "Udemy" ? (
              <SiUdemy size={25} />
            ) : name === "Hackerrank" ? (
              <SiHackerrank size={25} />
            ) : (
              ""
            )}
            <a href={props.link} className="ml-auto">
              <Share size={25} />
            </a>
          </div>
        </div>
      </div>
      <img src={props.image} alt="" className="w-full" />
    </motion.div>
  );
};

Certificate.propTypes = {
  name: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  course: PropTypes.array.isRequired,
  image: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

const Skills = () => {
  return (
    <div className="flex flex-wrap md:p-10 ">
      <Particle />
      <div className="w-full">
        <h1 className="text-3xl text-center font-bold">TECHNICAL SKILLS</h1>
        <motion.div
          className="grid md:grid-cols-10 sm:grid-cols-7 grid-cols-3 w-full mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {techData.map((tech, index) => (
            <motion.div
              key={index}
              className="flex-col w-20 p-2 border-black border-3 dark:bg-transparent border-2 justify-items-start border-solid dark:border-white rounded-xl  m-5"
              whileHover={{ scale: 1.10 }}
              transition={{ type: 'tween' , stiffness: 300  }}
            >
              <img src={tech.icon} alt={tech.name} className="w-full"/>
              <p className="w-full text-center font-medium text-black dark:text-white">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex  flex-col w-full justify-center item-center mt-7 md:p-10">
        <h1 className="text-3xl text-center font-bold mb-10">CERTIFICATIONS</h1>
        <motion.div
          className="grid md:grid-cols-4 justify-items-center items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {certificate.map((c, index)=>{
            return <Certificate key={index} name={c.name} provider={c.provider} course={c.course} link={c.link} image={c.image} />
          })}
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-full p-5">
        <h1 className="text-3xl text-center font-bold mb-10">EXPERIENCE</h1>
        <div className="flex flex-wrap border-2 border-solid rounded-lg w-full shadow_ bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 dark:text-black">
          <div className="md:w-4/6 w-full text-center md:text-xl text-lg ">
            <div className="flex flex-row items-center justify-center">
              <SiIbm size={50} className="md:mr-2" />
              <h1 className="md:text-2xl text-xl font-semibold ">Internship - Front End Developer </h1>
            </div>
            <p className="w-full py-1"><span className="font-semibold">Type :</span> Virtual</p>
            <p className="w-full py-1"><span className="font-semibold">Duration :</span><span className="font-mono"> June 12 2023 - July 24 2023</span> (6 weeks)</p>
            <p className="w-full py-1"><span className="font-semibold">Tech :</span> HTML , CSS , Javascript</p>
            <p className="w-full text-justify p-2"> 
              Leveraged IBM SkillsBuild resources and learning materials to expand knowledge in front-end development.
              Utilized HTML, CSS, and JavaScript to create visually appealing and responsive user interfaces that met industry standards and best practices.
            </p>
            <div className="flex w-full text-center justify-center items-center py-1"><p><span className="font-semibold">Final Project - </span> App Clone&nbsp;</p><a href=""><FaGithub size={30}/></a></div>
          </div>
          <div className="flex w-full  md:w-2/6 p-2 justify-center">
            <img src={ExpImage} alt="" className="max-h-80"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
