'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
	{
		title: 'ZTNA Implementation',
		description: 'Designed and implemented a Zero Trust Network Access solution for secure remote access to internal applications',
		details: [
			'Developed a custom ZTNA solution using open-source tools',
			'Quickly generate secure links to local services for temporary sharing with external parties',
			'Adapt the platform look and feel to align with corporate identity including use of custom domain and subdomain',
			'Implement IP restrictions, token-based authentication, and dynamic session management',
			'Support legacy applications by providing basic authentication mechanisms',
		],
		tech: ['Shell', 'OpenZiti', 'Zrok', 'Nginx'],
	},
	{
		title: 'Dockerize Application',
		description: 'Containerized a legacy application to improve deployment speed and consistency across environments',
		details: [
			'Created Docker images for multiple services using Dockerfile',
			'Implemented multi-stage builds to optimize image size and performance',
			'Configured Docker Compose for local development and testing environments',
			'Automated deployment using CI/CD pipelines with GitLab CI',
			'Reduced deployment time from hours to minutes',
		],
		tech: ['Docker', 'Docker Compose', 'Gitlab CI'],
	},
	{
		title: 'Home Automation',
		description: 'Developed a home automation system using ESP32 and Firebase for real-time control and monitoring',
		details: [
			'Integrated with various sensors for automation and monitoring',
			'Designed and implemented a custom PCB for ESP32 integration',
			'Developed firmware using C++ for real-time control and monitoring',
			'Use Firebase for data storage and real-time updates to the mobile app',
			'Created a mobile app for remote control and monitoring of home devices',
		],
		tech: ['C++', 'ESP32', 'Firebase', 'Android Studio'],
	},
	{
		title: 'Building Servers',
		description: 'Designed and implemented an on-premise server infrastructure to improve data security and cost efficiency',
		details: [
			'Designed network topology and IP addressing scheme',
			'Installed and configured Mikrotik router for network management',
			'Set up virtualization using Proxmox for multiple Virtual Machines',
			'Configured Firewalls and OpenVPN for secure remote access to the network',
			'Use Ansible for automated server management and configuration',
		],
		tech: ['Mikrotik', 'Proxmox', 'OpenVPN', 'Ansible'],
	},
];

const ITEMS_PER_PAGE = 1;

function PaginatedProjects() {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	return (
		<section className="grid grid-cols-1 gap-8">
			{currentProjects.map((project, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.2 }}
					className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
				>
					<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
					<p className="text-gray-400 mb-6">{project.description}</p>
					<div className="mb-6">
						<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
						<ul className="list-disc pl-5 space-y-2 text-gray-300">
							{project.details.map((detail, i) => (
								<li key={i} className="pl-2 text-gray-300">
									<span>{detail}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-wrap gap-2">
						{project.tech.map((tech, i) => (
							<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
								{tech}
							</span>
						))}
					</div>
					<div className="text-gray-500 text-sm mt-8">
						<p>
							<em>*more about my projects is available at linkedin/github</em>
						</p>
					</div>
				</motion.div>
			))}

			<div className="flex justify-center mt-8">
				<button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
					className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-blue-500/10 text-gray-500' : 'bg-gray-700 text-white'}`}
				>
					&lt;
				</button>
				<span className="px-4 py-2 mx-2 text-gray-300">
					{currentPage}/{totalPages}
				</span>
				<button
					onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
					disabled={currentPage === totalPages}
					className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-blue-500/10 text-gray-500' : 'bg-gray-700 text-white'}`}
				>
					&gt;
				</button>
			</div>
		</section>
	);
}

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Project
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					<PaginatedProjects />
				</div>
			</div>
		</section>
	);
}
