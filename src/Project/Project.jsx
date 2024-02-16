import PropTypes from 'prop-types';
import Particle from '../components/Particles'
import { FaNode, FaHtml5, FaCss3, FaJs, FaJava, FaReact, FaCogs, FaGithub, FaLink } from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { useState } from 'react';
import documentanalyzer from '../Images/project/document_analyzer.gif';
import firefighter from '../Images/project/Firefighter.gif';
import sortingvisual from '../Images/project/sorting_visualizer.gif';
import graphvisual from '../Images/project/graph_visualizer.gif';
import portfolio from '../Images/project/portfolio.gif';
import qr from '../Images/project/qrcode.gif';
import restaurant from '../Images/project/restaurant.gif';
import credit from '../Images/project/credit_card.gif'


const projects = [
  {
    path: graphvisual,
    topic: "Graph Visualizer",
    tech: [FaHtml5, FaCss3, FaJs],
    desc: "Implements a graph visualization with node addition, edge creation, and Dijkstra's algorithm for finding the shortest path in a user-friendly manner.",
    domain: "Web",
    live_link:"https://rkkarthi07.github.io/Graph_Visualizer/",
    github_link:"https://github.com/rkkarthi07/Graph_Visualizer"
  },
  {
    path: qr,
    topic: "Qrcode-Generator",
    tech: [FaHtml5, FaCss3, FaJs],
    desc: "Generate customizable QR codes for website URLs, choosing from various sizes (e.g., 100x100, 200x200, etc.), and download the resulting QR code image for offline use.",
    domain: "Web",
    live_link:"https://rkkarthi07.github.io/QR_code_Generator/",
    github_link:"https://github.com/rkkarthi07/QR_code_Generator"
  },
  {
    path: sortingvisual,
    topic: "Sorting Visualizer",
    tech: [FaHtml5, FaCss3, FaJs],
    desc: "Sorting Visualizer tool: Create and visualize arrays, customize size, algorithm speed, and pause/resume for an interactive experience of sorting algorithms in action.",
    domain: "Web",
    live_link:"https://rkkarthi07.github.io/Sorting_Visualizer/",
    github_link:"https://github.com/rkkarthi07/Sorting_Visualizer"
  },
  {
    path: restaurant,
    topic: "Restaurant Management",
    tech: [FaJava, DiMysql],
    desc: "Implemented JDBC for MySQL connectivity, enabling efficient bill calculations, customer details, and order tracking in a streamlined restaurant management system.",
    domain: "Java", 
    live_link:"",
    github_link:"https://github.com/rkkarthi07/Food_Order-JDBC"

  },
  {
    path: portfolio,
    topic: "Portfolio",
    tech: [FaReact, SiTailwindcss , SiFramer],
    desc: "Crafted with HTML, CSS, JavaScript, React, and Tailwind CSS, this website showcases my technical proficiency, offering a seamless and engaging user experience.",
    domain: "Web",
    live_link:"",
    github_link:"https://github.com/rkkarthi07/React_Portfolio"
  },
  {
    path: documentanalyzer,
    topic: "Document Analyzer",
    tech: [FaReact, SiTailwindcss, FaNode],
    desc: "Implemented a document comparison system utilizing Node.js for modular development, incorporating cosine, Jaccard, and Euclidean metrics for efficient similarity analysis.",
    domain: "Web",
    live_link:"ss",
    github_link:"https://github.com/rkkarthi07/Document-Analyzer"
  },
  {
    path: credit,
    topic:"Budget Allocator",
    tech:[ FaReact, SiTailwindcss],
    desc:"Effortlessly manage your budget with our React-based allocator. Allocate funds, track expenses, and achieve your financial goals seamlessly.",
    domain:'Web',
    live_link:'https://rk-budget-allocator.vercel.app',
    github_link:'https://github.com/rkkarthi07/Budget-Allocator'
  },
  {
    path: firefighter,
    topic: "Fire Fighter",
    tech: [FaCogs],
    desc: "Our Arduino-based firefighting robot uses GSM to detect smoke and send SMS alerts, or make calls for fires. It ensures quick responses to emergencies",
    domain: "Electronics",
    live_link:"",
    github_link:"https://github.com/rkkarthi07/Fire_Fighting_Robot"

  }
];

const GroupButton = ({ handleButton }) => {
  const buttonStyle =
    'border-solid dark:border-white border-2  border-black py-1 px-3 mr-3 font-poppins rounded focus:bg-slate-600 focus:text-white dark:focus:bg-white dark:focus:text-black dark:text-white';
  return (
    <>
      <div className=" buttons flex w-full justify-center md:mb-5 font-semibold">
        <button className={buttonStyle} onClick={() => handleButton('All')}>
          All
        </button>
        <button className={buttonStyle} onClick={() => handleButton('Java')}>
          Java
        </button>
        <button className={buttonStyle} onClick={() => handleButton('Web')}>
          Web
        </button>
      </div>
    </>
  );
};

const Projects = () => {
  const [selectedButton, setSelectedButton] = useState('All');

  const handleButton = (event) => {
    setSelectedButton(event);
  };

  return (
      <>
      <div className='pt-10'>
        <Particle/>
      <GroupButton handleButton={handleButton} />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-10 justify-items-center w-full font-poppins ">
        {projects
          .filter((project) => selectedButton === 'All' || project.domain === selectedButton)
          .map((project, key) => {
            return <Project key={key} path={project.path} topic={project.topic} tech={project.tech} description={project.desc} l_link={project.live_link} g_link ={project.github_link}/>;
          })}
      </div>
      </div>
    </>
  );
};

const Project = (props) => {
  return (
    <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 dark:text-white dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black border-4 border-white text-center p-2 m-5 w-full md:w-1/5 min-h-96 min-w-72 rounded-md text-black transition-transform hover:scale-110 shiny">
      <img className="w-full border-2" src={props.path} alt={props.topic} />
      <h1 className=" uppercase w-full py-2">{props.topic}</h1>
      <div className="text-sm w-full place-items-center flex flex-wrap justify-center gap-2 mb-4">
         <GetTechIcons tech={props.tech} />
      </div>
      <div className=' '>
        <div className='w-full h-36'>
        <p className='text-justify text-sm '>{props.description}</p>
        </div>
        <div className="flex place-content-evenly">
          {props.l_link && <a href={props.l_link} target="_blank" rel="noopener noreferrer"><FaLink size={20} /></a>}
        <a href={props.g_link} target="_blank" rel="noopener noreferrer" ><FaGithub size={20}/></a>
        </div>
       </div>
    </div>
  );
};

const GetTechIcons = (props) => {
  let a = props.tech;
  return (
    <>
      {a.map((Icon, index) => (
        <Icon size={20} key={index} />
      ))}
    </>
  );
};
GroupButton.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
GetTechIcons.propTypes = {
  tech: PropTypes.array.isRequired
};
Project.propTypes = {
  path: PropTypes.node.isRequired,
  topic: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  domain:PropTypes.string,
  description: PropTypes.string.isRequired,
  l_link :PropTypes.string,
  g_link:PropTypes.string
};

export default Projects;