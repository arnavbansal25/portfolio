import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className=",t-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I am a Software Developer with Bachelor of Technology (B.Tech) in
        Computer Science from Bennett University, India with 3+ years of
        Software Development Experience. I am proficient in JavaScript
        development particularly in React. I have working experience on industry
        projects with huge code bases managed across teams. I specialize in
        identifying critical issues an end-user might face while using your
        product. No matter the complexity or length of your project, if we have
        agreed upon something...I will deliver. [How I Work] 1. Understand your
        needs 2. Give you a rough idea of resources and time needed for
        completion 3. Present you a prototype or a workflow of how I will
        approach 4. Discussions/Feedback 5. Develop 6. Deliver [My Skills] ❖
        Good Knowledge of DSA (Solved 180+ questions on Leetcode) ❖
        Programming/Markup Languages : Java, JavaScript, HTML, CSS ❖
        Frameworks/Libraries : ReactJs, Node.js, Express.js, React Native,
        Bootstrap, Tailwind CSS ❖ JavaScript Packages : material-ui, formik,
        yup, react-router, redux, styled-components, mui-datagrid ❖
        Databases/Query Languages : Relational (MySQL), Non-Relational (MongoDB)
        ❖ Tools/Platforms : AWS, Microsoft Azure, GCP, Git, MongoDB Atlas,
        Figma, Postman, Jira, Slack I value my time and yours, I will do my best
        to meet your expectations and deadlines...looking forward to building a
        good connection with you.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
