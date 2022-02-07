import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosArrowUp, IoIosCloud, IoIosGitNetwork, IoIosLaptop, IoIosMegaphone, IoIosOptions, IoIosPhoneLandscape, IoIosQrScanner, IoIosSwitch, IoIosSync, IoIosThumbsUp, IoIosWifi } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'IT Professional',
		description: 'Assesment & Consulting System Integrator On Site Support On Call Support',
		icon: iconStyle(IoIosThumbsUp),
		imgClass: 'one',
	},
	{
		name: 'Cloud Service',
		description: 'Cloud Office Cloud Backup Cloud Server Cloud Migration',
		icon: iconStyle(IoIosCloud),
		imgClass: 'two',
	},
	{
		name: 'Security Solution',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon:iconStyle(IoIosGitNetwork),
		imgClass: 'three',
	},
	{
		name: 'Network Service',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(IoIosWifi),
		imgClass: 'four',
	},
	{
		name: 'Creative',
		description: 'Assesment & Consulting System Integrator On Site Support On Call Support',
		icon: iconStyle(IoIosLaptop),
		imgClass: 'one',
	},
	{
		name: 'Advertising',
		description: 'Assesment & Consulting System Integrator On Site Support On Call Support',
		icon: iconStyle(IoIosMegaphone),
		imgClass: 'one',
	},
];
