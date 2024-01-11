import Type from "./Type";
import homeLogo from '../Images/profile/profile_background.png'
import Particle from '../components/Particles'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import '../components/styles.css'
function Home() {
  return (
         <div className="flex w-full h-full flex-grow flex-wrap items-center justify-center">
             <Particle />
            <div className="w-full md:w-1/2 md:pr-4 px-5 md:px-5 items-center pb-5">
              <h1 className="pb-4 text-4xl md:text-5xl font-bold">
                Hi,{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl md:text-6xl font-bold heading-name">
                I&#39;m
                <span className="dark:text-blue-400 text-blue-900"> Karthick</span>
              </h1>
              <div className="pt-5 md:pt-10 text-4xl font-medium">
                <Type />
              </div>
              <div className="flex w-1/2 md:w-1/4 pt-7 place-content-between ">
                <a href="https://github.com/rkkarthi07" className=" rounded-full border p-2  dark:border-white border-black hover:scale-105 "><FiGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/karthick-rk07/" className=" rounded-full border p-2   dark:border-white border-black hover:scale-105 "><FaLinkedinIn size={30} /></a>
              </div>
            </div>

            <div className="relative md:w-max w-5/6 h-full">
                <img 
                src={homeLogo}
                alt="home pic"
                className="w-full h-auto md:max-h-96 rounded-full dark:border-white border-2 border-black"
              /> 
            </div>
            
          </div>
  );
}

export default Home;
