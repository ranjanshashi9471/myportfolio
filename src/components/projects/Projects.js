import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full py-20 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title
					title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
					des="My Projects"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
				<ProjectsCard
					title="Disk Management and Integrity Tools"
					des=" Developed utilities for managing virtual disks, including adding, retrieving, counting, and deleting files. Imple-
mented custom encoding/decoding, bit manipulation, and metadata handling to optimize disk space utilization and file operations."
					src={projectOne}
					git={"https://github.com/ranjanshashi9471/virtualDisk"}
					web={""}
				/>
				<ProjectsCard
					title="Multi-System Communication Framework"
					des=" Designed and implemented a scalable distributed system using C, showcasing inter-process communication, UDP socket programming, and file-based synchronization. Automated build and deployment using Makefile for efficient development."
					src={projectTwo}
					git={"https://github.com/ranjanshashi9471/networkingProject"}
					web={""}
				/>
				<ProjectsCard
					title="Spreadsheet WebApp"
					des="Developed a JavaScript-based SPA leveraging SQL.js for an in-memory SQLite database. Features include dynamic
spreadsheet generation, schema-driven UI rendering, and CRUD operations through a user-friendly interface.
Optimized for large datasets to ensure performance scalability."
					src={projectThree}
					git={"https://github.com/ranjanshashi9471/Spreadsheet_SPA"}
					web={""}
				/>
				<ProjectsCard
					title="Intercity Express Trains"
					des=" A full-stack web application for managing ticket booking, staff schedule, train schedules and user authentication & authorization. Implemented RESTful APIs for seamless communication between the client and server,
ensuring efficient and secure data handling. Used MVC architecture for better code readability."
					src={projectThree}
					git={"https://github.com/ranjanshashi9471/intercity-express"}
					web={""}
				/>
				<ProjectsCard
					title="Personal Diary Web App"
					des=" A secure and feature-rich Personal Diary with features such as user authentication and authorization via local, Google, and Facebook OAuth strategies, user profile management, and secure session handling, RESTful APIs with server-side validation, robust error handling, and schema-based DB integration."
					src={projectOne}
					git={"https://github.com/ranjanshashi9471/MyVirtualDiary"}
					web={""}
				/>
				<ProjectsCard
					title="OyoHostels"
					des=" Map Integrated nearby Hostel Locator for students and Landlords to solve the complexity of migrating students. Hostel owners can add detailed listings, including addresses and locations, making it easy for students to search
for and find suitable hostels in their desired areas."
					src={projectTwo}
					web={""}
					git="https://github.com/ranjanshashi9471/OyoHostels"
				/>
			</div>
		</section>
	);
};

export default Projects;
