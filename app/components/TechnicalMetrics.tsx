'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impacts
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Infrastructure & DevOps */}
					<div>
						{/* <h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3> */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Zero-downtime deployments</li>
									<li>• Implemented Infrastructure as Code (IaC)</li>
									<li>• Implemented auto-scaling for peak loads</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Automated testing and deployment</li>
									<li>• Reduced deployment time by 80%</li>
									<li>• Integrated with monitoring tools</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
