import Particle from "../components/Particles";
import {  IoIosMail  as Mail } from "react-icons/io";
import { FaGithub , FaLinkedinIn , FaInstagram } from "react-icons/fa";
import { FaLocationDot as Location } from "react-icons/fa6";
import { IoCall as Call} from "react-icons/io5";
import { SiLeetcode as LeetCode} from "react-icons/si";
import "../components/styles.css"
const Contact = () => {
    return (
      <div className="flex flex-wrap md:flex-grow p-5  w-full h-full">
        <Particle/>
        <div className="flex  w-full md:w-1/3 flex-wrap md:mt-20 bg-white bg-opacity-30 justify-center items-center rounded-xl border-[3px] border-black ">
              <h1 className="text-3xl text-center mb-5 font-bold">CONTACT</h1>
            <div className="flex flex-col w-full justify-center">
             <p className="flex w-full text-center mb-5 md:pl-10 text-lg"><Location size={30}/>&nbsp;Tirunelveli - 627105</p>
             <p className="flex w-full text-center mb-5 md:pl-10 text-lg"><Mail size={30}/>&nbsp;rkkarthick68@gmail.com</p>
             <p className="flex w-full text-center mb-5 md:pl-10 text-lg"><Call size={30}/>&nbsp;+91&nbsp;8072495492</p>
            </div>
           <div className="flex w-full place-content-evenly mt-5"><a href="https://www.linkedin.com/in/karthick-rk07/" className="hover:scale-110"><FaLinkedinIn size={40}/></a> <a href="https://github.com/rkkarthi07" className="hover:scale-110" ><FaGithub size={40}/></a><a href="https://leetcode.com/rk_karthi_07/" className="hover:scale-110"><LeetCode size={40}/></a><a href="https://www.instagram.com/_.karthick._.rk._/" className="hover:scale-110"><FaInstagram size={40}/></a> </div>
           </div>
        <div className="flex flex-col  w-full md:w-2/3  justify-center items-center">
            <h1 className="text-3xl text-center my-5 font-bold">GET IN TOUCH</h1>
           <div className="flex flex-col md:w-1/2 items-center font-medium text-xl">
            <form action="" className="">
              <input type="text" name="" id="" required className="my-5 rounded pl-2 w-full h-9 text-black border-2 border-black" placeholder="Name" />
              <input type="email" name="" id="" required className="my-5 rounded pl-2 w-full h-9 text-black border-2 border-black" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="10" required className="my-5 rounded pl-2 pt-2 w-full text-black border-2 border-black" placeholder="Message"></textarea>
            </form>
            <button className="bg-sky-400 w-24 h-10 rounded-full focus:bg-sky-600 hover:bg-sky-500 ">Submit</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  