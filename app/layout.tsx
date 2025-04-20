import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Indra Wahyu - DevOps Engineer',
	description:
		'I am interested in Server Management, Computer Networks, and Embedded Systems. My dream is focus on continuous learning and a dedication to excellence to combine these skills into an innovative products.',
	keywords: [
		'DevOps Engineer',
		'Computer Networks',
		'Server Management',
		'Embedded Systems',
		'Cloud Computing',
		'Infrastructure as Code',
		'Continuous Integration',
		'Continuous Deployment',
		'Containerization',
		'Virtualization',
		'Automation',
		'Ansible',
		'Docker',
		'Linux',
	],
	authors: [{ name: 'Indra Wahyu' }],
	creator: 'Indra Wahyu',
	openGraph: {
		title: 'Indra Wahyu - DevOps Engineer',
		description: 'I am interested in Server Management, Computer Networks, and Embedded Systems. My dream is focus on continuous learning and a dedication to excellence to combine these skills into an innovative products.',
		url: 'https://www.indrawahyu.my.id',
		siteName: 'Indra Wahyu - Portfolio',
		images: [
			{
				url: '/spot.png',
				width: 1200,
				height: 630,
				alt: 'Indra Wahyu - DevOps Engineer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Indra Wahyu - DevOps Engineer',
		description: 'I am interested in Server Management, Computer Networks, and Embedded Systems. My dream is focus on continuous learning and a dedication to excellence to combine these skills into an innovative products.',
		creator: '@bukanspot',
		images: ['/spot.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
