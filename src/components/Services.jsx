import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      descrition:
        "We turn bold ideas into powerful digital solutions that connects , engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing ",
      descrition: "We help  you execute your plan deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      descrition: "We help you create a marking stratergy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social meadia",
      descrition:
        "We help you to build the strong social media precence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden "
      />
      <Title
        title="How can we help? "
        desc="From stratergy to execution , we craft digital solutions that moves your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
