import React from 'react';
import PropTypes from 'prop-types';
import Particle from '../components/Particles';
import { GiGraduateCap as Cap } from 'react-icons/gi';
import { GrCompliance as Completed } from 'react-icons/gr';
import { GrTime as Time } from 'react-icons/gr';
import LearnImage from '../Images/Learning.png';
import { GiWeightLiftingUp as Lift , GiJumpAcross as Jump} from "react-icons/gi";
import { BiRun as Run } from "react-icons/bi";
import { RiPresentationLine as Presentation} from "react-icons/ri";
import { TbBinary as Binary } from "react-icons/tb";
import { MdOutlineComputer  as Computer} from "react-icons/md";
import { FaExternalLinkAlt as Link} from "react-icons/fa";
import AboutImage  from "../Images/innovation-amico.png";

const EducationItem = ({ iconComponent, title, institution, duration, details, status }) => (
  <div className="flex flex-row h-max md:w-[85%] bg-slate-300 rounded-lg bg-opacity-35 mt-7 p-2">
    <div className="md:w-7 w-16 mr-2 py-5">{iconComponent}</div>
    <div className="md:px-16">
      <h1 className="text-2xl font-mono py-1">{title}</h1>
      <h2 className="text-xl font-semibold py-1">{institution}</h2>
      <h2 className="text-xl font-semibold py-1">{duration}</h2>
      <h3 className="flex font-semibold text-xl pt-1 ">{details}{status}</h3>
    </div>
  </div>
);

EducationItem.propTypes = {
  iconComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  status: PropTypes.node.isRequired,
};

const About = () => {
  return (
    <div className="flex flex-wrap">
      <Particle />
      <div className="flex flex-wrap border-3">
        <div className="md:w-4/12 w-full">
          <img src={AboutImage} alt="" />
        </div>
        <div className="w-full md:w-8/12 p-10 tracking-wider">
          <h1 className="text-center text-3xl font-bold">ABOUT ME</h1>
          <p className="mt-5 text-lg text-justify">Hello! I&#39;m Karthick, an Electronics and Communication Engineering student with a flair for front-end development. Proficient in HTML, CSS, and JavaScript, I specialize in crafting seamless and visually appealing user interfaces.
        <br/>In addition to engineering.I&#39;m adept at C and Java, enabling me to create robust software solutions. I&#39;ve independently developed projects, including a car parking prototype using basic logic gates, showcasing my determination and problem-solving skills
        Fascinated by both ECE and software development, I excel in creating intuitive and engaging user experiences. Notably, I implemented Dijkstra&#39;s algorithm for a graph-based project, showcasing my algorithmic proficiency.
        <br/>I&#39;m eager to contribute meaningfully in both domains. Let&#39;s connect and explore opportunities to collaborate!</p>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full mt-5 p-10">
          <div className="flex flex-col flex-wrap w-full justify-center items-center md:pl-10">
            <h1 className="text-3xl font-bold mb-7">EDUCATION</h1>
         <div className='flex md:flex-row flex-col w-full'>
            <div className="w-full md:w-1/2 flex flex-col">
              <EducationItem
                iconComponent={<Cap size={50} />}
                title="Higher Secondary Education"
                institution="Balakrishna Matric Hr Sec School"
                duration="(2019 - 2021)"
                details="Percentage - 93%"
                status={<Completed size={25} className="ml-auto" />}
              />

              <EducationItem
                iconComponent={<Cap size={50} />}
                title="Bachelor of Engineering"
                institution="Karpagam College of Engineering"
                duration="(2021 - 2025)"
                details="Current CGPA - 8.39"
                status={<Time size={25} className="ml-auto" />}
              />
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img src={LearnImage} alt="Learning" className="md:h-96" />
            </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full'> 
           <h1 className="text-3xl font-bold mb-5">ACHIEVEMENTS</h1>
          <div className='flex flex-wrap w-full p-10 place-content-around'>
           <div className='flex flex-col w-full md:w-5/12 h-max text-center text-xl border-2 p-3 font-semibold justify-center mt-5 rounded-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-gray-200 to-amber-100 dark:text-black'>
              <Event event={'Paper Presentation ( VR ) at UIT'} position={true} year={'2023'} icon={<Presentation size={30}/>}/>
              <Event event={'Digitrix at KCE'} position={true} year={'2022'} icon={<Binary size={30}/>}/>
              <Event event={'Participated in Hackathon'} position={false} year={'2022'} icon={<Computer size={30}/>}/>
           </div>
           <div className='flex flex-col w-full md:w-5/12 h-max text-center text-xl border-2 p-3 font-semibold justify-center mt-5 rounded-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-gray-200 to-amber-100 dark:text-black'>
              <Event event={'Powerlifting at KCE'} position={true} year={'2022'} icon={<Lift size={30}/>}/>
              <Event event={'High Jump U18 (Zonal) 2times'} position={true} year={'2018 , 2019'} icon={<Jump size={30}/>}/>
              <Event event={'Participated in Kanyakumari Marathon'} position={false} year={'2022'} icon={<Run size={30}/>}/>
           </div>
           </div>
        </div>
      </div>
    </div>
  );
};
const Event=(props)=>{
  const Icon = props.icon;
  return (
    <div className='flex flex-row w-full py-1'>
   <p className=''>{props.position && <span>1<sup className='mt-3'>st</sup>&nbsp;</span>}{props.event} - &nbsp;<span className='font-mono'>{props.year}</span></p>&nbsp;{Icon}<a href="" className='pl-5 ml-auto cursor-pointer'><Link size={20}/></a> 
    </div>
  )
}
Event.propTypes ={
  event : PropTypes.string.isRequired,
  position : PropTypes.bool.isRequired,
  link : PropTypes.string, 
  year : PropTypes.string.isRequired,
 icon : PropTypes.node
}

export default About;
