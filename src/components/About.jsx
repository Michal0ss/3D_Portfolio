import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

// 1:15:00 

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      </motion.div>
      {title}
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Introduction
        </p>

        <h2 className={styles.sectionHeadText}>
        Overview.
        </h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I’m a first-year Computer Science student at AGH with a strong passion for full-stack development and optimization. 
      While currently enrolled in a front-end EPAM course,<br></br>
      I continuously expand my skills beyond front-end, exploring various aspects of software development, 
      including backend systems and API integrations.
      I thrive on learning and challenging myself with new technologies, 
      always seeking ways to improve efficiency and build scalable solutions. 
      My goal is to secure my first internship to gain hands-on industry experience and further develop my problem-solving skills. 
      I believe that continuous learning and adaptability are key to becoming a well-rounded developer, 
      and I actively work on refining my technical expertise and understanding of real-world applications.
      </motion.p>

      <div className='mt-20 fle flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key ={service.title} index = {index} {...service}/>
        ))}

      </div>

    </>
  )
}
// 1:07:43

export default About