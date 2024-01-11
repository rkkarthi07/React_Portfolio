import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import CustomizedSwitches from "./DarkMode";
import { IoMenu as Menu } from "react-icons/io5";
import { FaTimes as Close } from "react-icons/fa";
import './styles.css';
// ... (previous imports)

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`flex justify-end items-center w-full md:min-h-12  text-right text-black font-poppins shadow_ dark:text-white ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {!isMobileMenuOpen && <div className='ml-5 font-semibold text-4xl '><h1>RK.</h1></div>}
      <nav className={`flex md:flex-row flex-col justify-end  z-10 w-full text-right bg-white  dark:bg-black md:dark:bg-transparent md:bg-transparent  dark:text-white md:translate-y-0 items-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 h-auto' : '-translate-y-full h-12'}`}>
        <button
          className="md:hidden text-xl ml-4 p-2"
          onClick={toggleMobileMenu}
        >
          <Close size={40}/>
        </button>

        <Link to="/" className="block md:inline-block md:my-0 my-4 text-xl md:mr-8 text-center md:text-right hover:text-blue-600 hover:scale-110 transition-transform">
          <HomeOutlinedIcon /> Home
        </Link>
        <Link to="/about" className="block md:inline-block md:my-0 my-4 text-xl md:mr-8 text-center md:text-right hover:text-blue-600 hover:scale-110 transition-transform">
          <PersonOutlineOutlinedIcon /> About me
        </Link>
        <Link to="/skills" className="block md:inline-block md:my-0 my-4 text-xl md:mr-8 text-center md:text-right hover:text-blue-600 hover:scale-110 transition-transform">
          <EmojiObjectsOutlinedIcon /> Skills
        </Link>
        <Link to="/projects" className="block md:inline-block md:my-0 my-4 text-xl md:mr-8 text-center md:text-right hover:text-blue-600 hover:scale-110 transition-transform">
          <CodeOutlinedIcon /> Projects
        </Link>
        <Link to="/contact" className="block md:inline-block md:my-0 my-4 text-xl md:mr-8 text-center md:text-right hover:text-blue-600 hover:scale-110 transition-transform">
          <CallOutlinedIcon /> Contact
        </Link>
        <CustomizedSwitches />
      </nav>
        <button
        onClick={toggleMobileMenu}
        className={`md:hidden text-xl ml-4 p-2 ${isMobileMenuOpen ? 'hidden' : ''}`} >
        <Menu size={40} />
      </button>
    </div>
  );
};

export default Nav;
