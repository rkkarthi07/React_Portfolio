import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Particle from '../components/Particles';
import { IoIosMail as Mail } from 'react-icons/io';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaLocationDot as Location } from 'react-icons/fa6';
import { IoCall as Call } from 'react-icons/io5';
import { SiLeetcode as LeetCode } from 'react-icons/si';
import '../components/styles.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isSent) {
      const resetForm = setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(false);
      }, 5000);

      return () => clearTimeout(resetForm);
    }
  }, [isSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm('service_r3s0w6s', 'template_u3zbmdh', e.target, 'FRUDoN36XjJ_ez7QM')
        .then((result) => {
          console.log(result.text);
          setIsSent(true);
        }, (error) => {
          console.log(error.text);
          setIsSent(false);
        });
    } else {
      setIsSent(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-wrap md:flex-grow p-5  w-full h-full"
    >
      <Particle />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex p-5 w-full  md:w-1/3 flex-wrap md:mt-20 bg-white bg-opacity-30 justify-center items-center rounded-xl border-[3px] border-black "
      >
        <h1 className="text-3xl text-center mb-5 font-bold">CONTACT</h1>
        <div className="flex flex-col w-full justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex w-full text-center mb-5 md:pl-10 text-lg"
          >
            <Location size={30} />
            &nbsp;Tirunelveli - 627105
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex w-full text-center mb-5 md:pl-10 text-lg"
          >
            <Mail size={30} />
            &nbsp;rkkarthick68@gmail.com
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex w-full text-center mb-5 md:pl-10 text-lg"
          >
            <Call size={30} />
            &nbsp;+91&nbsp;8072495492
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex w-full place-content-evenly mt-5"
        >
          <a href="https://www.linkedin.com/in/karthick-rk07/" className="hover:scale-110 transition-transform">
            <FaLinkedinIn size={40} />
          </a>{' '}
          <a href="https://github.com/rkkarthi07" className="hover:scale-110 transition-transform">
            <FaGithub size={40} />
          </a>
          <a href="https://leetcode.com/rk_karthi_07/" className="hover:scale-110 transition-transform">
            <LeetCode size={40} />
          </a>
          <a href="https://www.instagram.com/_.karthick._.rk._/" className="hover:scale-110 transition-transform">
            <FaInstagram size={40} />
          </a>{' '}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col  w-full md:w-2/3  justify-center items-center"
      >
        <h1 className="text-3xl text-center my-5 font-bold">GET IN TOUCH</h1>
        <div className="flex flex-col md:w-1/2 items-center font-medium text-xl">
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="my-5 rounded pl-2 w-full h-9 text-black border-2 border-black"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="my-5 rounded pl-2 w-full h-9 text-black border-2 border-black"
              placeholder="Email"
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              required
              className="my-5 rounded pl-2 pt-2 w-full text-black border-2 border-black"
              placeholder="Message"
            ></textarea>
            <div className='w-full flex items-center justify-center'> 
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9  }}
              className={`bg-${isSent ? 'green' : 'sky'}-400 w-24 h-10 rounded-full bg-sky-500 focus:bg-sky-600 hover:bg-${isSent ? 'green' : 'sky'}-500 `}
            >
              {isSent ? 'Sent' : 'Submit'}
            </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
