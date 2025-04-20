'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'ZTNA Implementation',
							description: 'Designed and implemented a Zero Trust Network Access solution for secure remote access to internal applications',
							details: [
								'Developed a custom ZTNA solution using open-source tools',
								'Integrated with existing identity providers for seamless authentication',
								'Implemented role-based access control (RBAC) for granular permissions',
								'Conducted security audits and penetration testing to ensure robustness',
								'Reduced attack surface by 70% and improved user experience',
							],
							tech: ['Docker', 'OpenZiti', 'Zrok', 'Postgress', 'Shell', 'Ansible'],
						},
						{
							title: 'Dockerize Application',
							description: 'Containerized a legacy application to improve deployment speed and consistency across environments',
							details: [
								'Created Docker images for multiple services',
								'Implemented multi-stage builds to optimize image size',
								'Configured Docker Compose for local development and testing',
								'Automated deployment using CI/CD pipelines',
								'Reduced deployment time from hours to minutes',
							],
							tech: ['Docker', 'Docker Compose', 'Gitlab'],
						},
					].map((project, index) => (
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
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
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
				</div>
			</div>
		</section>
	);
}
