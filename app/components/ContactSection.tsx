'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
	const [time, setTime] = React.useState<string | null>(null);
	const [activeTab, setActiveTab] = React.useState<string>('contact');

	React.useEffect(() => {
		const updateTime = () => {
			const currentTime = new Date();
			const formattedTime = currentTime
				.toLocaleString('en-GB', { timeZone: 'Asia/Makassar', hour12: false })
				.replace(',', '');
			setTime(formattedTime);
		};
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative pt-2 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
					<div className="relative z-10">
						<div className="font-mono">
							{/* Tabs */}
							<div className="flex gap-2 mb-4 border-b border-gray-700 relative z-20">
							<div className="flex items-center gap-2 mb-2 mx-4">
								<div className="w-3 h-3 rounded-full bg-red-500" />
								<div className="w-3 h-3 rounded-full bg-yellow-500" />
								<div className="w-3 h-3 rounded-full bg-green-500" />
							</div>
								{['contact', 'about'].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-5 py-2 rounded-t-lg font-medium transition-all duration-200 ${
											activeTab === tab
												? 'bg-transparent text-green-400 border-x border-t border-gray-700 -mb-px'
												: 'bg-gray-800 text-gray-400 hover:text-green-300'
										}`}
									>
										{tab}
									</button>
								))}
							</div>


							{/* Tab Content */}
							{activeTab === 'contact' && (
								<div className='p-8'>
									<h2 className="text-3xl font-bold mb-4 text-gray-200">Let&apos;s Connect</h2>
									<p className="text-green-500 mt-4 mb-2">~ echo $EMAIL</p>
									<motion.a
										href="mailto:indrawahyu@duck.com"
										whileHover={{ scale: 1.02 }}
										className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
									>
										indrawahyu@duck.com
									</motion.a>
									<p className="text-green-500 mt-4 mb-2">~ cat /etc/timezone</p>
									<div className="flex items-center gap-2 text-gray-300">
										<svg className="w-10 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<div>
											<span>
												Bali, Indonesia (+62)
												<br />
												{time}
											</span>
										</div>
									</div>
									<p className="text-green-500 mt-4 mb-4">~ ls ./social</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
										<motion.a
											href="https://www.linkedin.com/in/bukanspot"
											whileHover={{ scale: 1.05 }}
											className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
										>
											<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
												<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
													<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
												</svg>
											</div>
											<div>
												<p className="font-semibold text-gray-200">LinkedIn</p>
												<p className="text-sm text-gray-400">Indra Wahyu</p>
											</div>
										</motion.a>
										<motion.a
											href="https://github.com/bukanspot"
											whileHover={{ scale: 1.05 }}
											className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
										>
											<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
												<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
											</div>
											<div>
												<p className="font-semibold text-gray-200">GitHub</p>
												<p className="text-sm text-gray-400">@bukanspot</p>
											</div>
										</motion.a>
										<motion.a
											href="https://www.instagram.com/bukanspot"
											whileHover={{ scale: 1.05 }}
											className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
										>
											<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
												<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.97.248 2.428.415a4.92 4.92 0 011.77 1.153 4.92 4.92 0 011.153 1.77c.167.458.359 1.222.415 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.248 1.97-.415 2.428a4.92 4.92 0 01-1.153 1.77 4.92 4.92 0 01-1.77 1.153c-.458.167-1.222.359-2.428.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.97-.248-2.428-.415a4.902 4.902 0 01-2.923-2.923c-.167-.458-.359-1.222-.415-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.248-1.97.415-2.428A4.902 4.902 0 014.722 2.65c.458-.167 1.222-.359 2.428-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.013 7.052.072 5.771.13 4.703.312 3.756.692a7.14 7.14 0 00-2.608 1.675A7.14 7.14 0 00.692 4.755c-.38.947-.562 2.015-.62 3.296C.013 8.332 0 8.735 0 12c0 3.265.013 3.668.072 4.948.058 1.281.24 2.349.62 3.296a7.14 7.14 0 001.675 2.608 7.14 7.14 0 002.608 1.675c.947.38 2.015.562 3.296.62C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.349-.24 3.296-.62a7.14 7.14 0 002.608-1.675 7.14 7.14 0 001.675-2.608c.38-.947.562-2.015.62-3.296.058-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.058-1.281-.24-2.349-.62-3.296a7.14 7.14 0 00-1.675-2.608A7.14 7.14 0 0020.244.692c-.947-.38-2.015-.562-3.296-.62C15.668.013 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
												</svg>
											</div>
											<div>
												<p className="font-semibold text-gray-200">Instagram</p>
												<p className="text-sm text-gray-400">bukanspot</p>
											</div>
										</motion.a>
									</div>
								</div>
							)}

							{activeTab === 'about' && (
								<div className='p-8'>
									<h2 className="text-3xl font-bold mb-4 text-gray-200">My Artifact</h2>
									<p className="text-gray-400 mb-4">Beyond the visuals and final outcomes showcased here, I also maintain several dedicated sites where I dive deeper into the <i>how</i> and <i>why</i> behind each project. These spaces are where I document not just what I build, but how I think—capturing processes, iterations, challenges, and the small discoveries that shape my work. It&apos;s my way of staying transparent, staying curious, and staying connected with anyone who&apos;s interested in the journey, not just the destination.</p>
									<p className="text-green-500 mt-4 mb-4">~ curl
										<a href="https://bukanspot.gitbook.io"> bukanspot.gitbook.io</a>
									</p>
									<p className='text-gray-400 mt-4 mb-4'>GitBook is where I document various aspects of my work—from building embedded systems and configuring networks to deploying applications. What started as a personal knowledge base has gradually evolved into a publicly accessible space. Just a heads-up: it&apos;s more of a personal notebook than a polished tutorial hub, so while the content is honest and practical, it might not always be picture-perfect.</p>
									<p className="text-green-500 mt-4 mb-4">~ curl
										<a href="https://dev.to/bukanspot"> dev.to/bukanspot</a>
									</p>
									<p className='text-gray-400 mt-4 mb-4'>On dev.to, I usually document the unexpected bumps along the road—errors I&apos;ve encountered while coding, odd behaviors during Linux adventures, or deployment quirks that took a bit too long to solve. The topics can be pretty random, but they all orbit around one thing: solving real-world problems with code, commands, and curiosity.</p>
									<p className="text-green-500 mt-4 mb-4">~ curl
										<a href="https://reddit.com/u/bukanspot/"> reddit.com/u/bukanspot</a>
									</p>
									<p className='text-gray-400 mt-4 mb-4'>On Reddit, I jot down quick snippets, code examples, and the occasional personal rant—think of it as my public digital notebook. It&apos;s where I document useful one-liners, Linux commands with brief explanations, or odd problems I&apos;ve run into. The posts are short by design: just enough to help future-me (or anyone else) quickly recall how something works, or why it didn&apos;t.</p>
									<p className="text-green-500 mt-4 mb-4">~ curl
										<a href="https://bukanspot.medium.com"> bukanspot.medium.com</a>
									</p>
									<p className='text-gray-400 mt-4 mb-4'>Medium is where I shift gears a bit—it&apos;s less about fixing bugs and more about reflecting on experiences. I use it to share personal takes on the tools and products I&apos;ve used, like impressions after spending time with a particular operating system, or just random tech-related stories that feel worth telling. It&apos;s my space for storytelling with a technical twist.</p>
									<p className="text-green-500 mt-4 mb-4">~ curl
										<a href="https://bukanspot.blogspot.com"> bukanspot.blogspot.com</a>
									</p>
									<p className='text-gray-400 mt-4 mb-4'>Blogger is my go-to place for writing tutorials that don&apos;t always fit the mold. Unlike my other platforms that focus heavily on code or servers, this space is for everything else I feel is worth documenting—random how-tos, helpful guides, and everyday discoveries that deserve a spot on the record, even if they fall outside the usual tech stack.</p>
								</div>
							)}
						</div>
					</div>
				</motion.div>
			</div>
			<p className="text-center text-gray-400 mt-12">
				&copy; {new Date().getFullYear()} bukanspot. Released under the MIT license
				<br />
				Designed and built with <span className="text-red-500">♥</span> by Indra Wahyu
				<br />
				Powered by <a href="https://nextjs.org" className="text-green-500">Next.js</a> and <a href="https://tailwindcss.com" className="text-green-500">Tailwind CSS</a>
			</p>
		</section>
	);
}