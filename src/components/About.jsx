import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-full h-full object-contain object-cover absolute inset-0 rounded-[20px]"
          style={{ width: "100%", height: "100%" }}
        />

        <div className="relative flex flex-col items-center h-full">
          <div className="flex-grow"></div>
          <div className="flex items-end">
          <h3 className="text-white text-20px font-bold text-center bg-black bg-opacity-50 py-2 px-4 flex justify-end items-end" style={{ marginTop: '150px' }}>
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>精選</p>
        <h2 className={styles.sectionHeadText}>世界各國美食</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 3)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        美食是我們旅行的原因：去日本吃生魚壽司、去意大利品嚐意粉薄餅、去泰國食正宗冬蔭功⋯⋯不同地方都有令人再三回味的美食。
        <br />
        為你盤點二十款人生必食的世界美食，跟著美食去旅行！
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
