import React from 'react';
import { motion } from "framer-motion";
import Type from "./Type";
import homeLogo from '../Images/profile/profile_background.png'
import Particle from '../components/Particles'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import '../components/styles.css'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex w-full h-full flex-grow flex-wrap items-center justify-center"
    >
      <Particle />
      <div className="w-full md:w-1/2 md:pr-4 px-5 md:px-5 items-center pb-5">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pb-4 text-4xl md:text-5xl font-bold"
        >
          Hi,{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-6xl font-bold heading-name"
        >
          I&apos;m
          <span className="dark:text-blue-400 text-blue-900"> Karthick</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-5 md:pt-10 text-4xl font-medium"
        >
          <Type />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex w-1/2 md:w-1/4 pt-7 place-content-between "
        >
          <a
            href="https://github.com/rkkarthi07"
            className=" rounded-full border p-2 dark:border-white border-black hover:scale-110 transition-transform "
          >
            <FiGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/karthick-rk07/"
            className=" rounded-full border p-2 dark:border-white border-black hover:scale-110 transition-transform"
          >
            <FaLinkedinIn size={30} />
          </a>
        </motion.div>
      </div>

      <div className="relative md:w-max w-5/6 h-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          src={homeLogo}
          alt="home pic"
          className="w-full h-auto md:max-h-96 rounded-full dark:border-white border-2 border-black"
        />
      </div>
    </motion.div>
  );
}

export default Home;