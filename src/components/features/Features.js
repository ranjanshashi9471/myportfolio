import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Backend Development"
          des="I build robust, scalable backend systems using Java(springboot, spring JPA) and JavaScript (Node.js), leveraging both NoSQL and SQL Databases for flexible, secure, and efficient data management."
        />
        <Card
          title="Frontend Development"
          des="I develop sleek, high-performance user interfaces using React, leveraging Tailwind CSS, CSS3, and Bootstrap to ensure responsiveness and a seamless user experience."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Containerized App Development"
          des="I design and deploy scalable, containerized applications using Docker, ensuring efficiency, portability, and seamless integration across diverse environments."
          icon={<SiProgress />}
        />
        {/* <Card
					title="Mobile Development"
					des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
					icon={<FaMobile />}
				/> */}
        <Card
          title="DB Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaDatabase />}
        />
        <Card
          title="Hosting Websites and Web Services."
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
