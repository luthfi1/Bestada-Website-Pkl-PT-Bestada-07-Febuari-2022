import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Network Solution',
		links: ['Network Design & Delivery', 'Wi-Fi Service', 'VPN Service'],
	},
	{
		title: 'IT Professional',
		links: ['Assesment & Consulting', 'System Integrator', 'On Call Support', 'On Site Support'],
	},
	{
		title: 'IT Managed Service',
		links: ['IT Professional', 'Cloud Service', 'Network Service', 'Security Solution'],
	},
	{
		title: 'Digital Innovation',
		links: ['Business', 'Creative', 'Development', 'Advertising'],
	},
];
