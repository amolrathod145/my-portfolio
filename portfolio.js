import emoji from "react-easy-emoji";

export const greetings = {
	name: "Amol Rathod",
	title: "Hi all, I'm Amol",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with React.js, Redux, Nodejs, Express Js and MongoDB development .",
	resumeLink:
		"https://www.canva.com/design/DAFS2Id9UuU/sW-tY92jT9D8tQ2QsZkOZA/edit?utm_content=DAFS2Id9UuU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
};

export const openSource = {
	githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/amol-rathod-940b43217/",
	github: "https://github.com/amolrathod145",
	instagram: "https://www.instagram.com/amol__.1/",

};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps in React.js"
				),
				emoji("⚡ Building responsive static websites using React.Js"),
				emoji(
					"⚡ Building RESTful APIs in Node.Js REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "NodeJs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},


				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				// {
				// 	skillName: "PostgreSQL",
				// 	fontAwesomeClassname: "logos:postgresql",
				// },
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				// {
				// 	skillName: "Nginx",
				// 	fontAwesomeClassname: "logos:nginx",
				// },
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				// emoji(
				// 	"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				// ),
				// emoji(
				// 	"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				// ),
				// emoji(
				// 	"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				// ),
				// emoji(
				// 	"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				// ),
				// emoji(
				// 	"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				// ),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend / Design", //Insert stack or technology you have experience in
		progressPercentage: "50", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend / React Js", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend / NodeJs",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Batu University",
		subHeader: "B.Tech in Computer Science",
		duration: " 2019 -  2023",
		desc: "Participated in the research of XXX and published 3 papers.",
		grade: "Grade A",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "SkillHub It Solution",
		companylogo: "/img/icons/common/skillhub.jpg",

		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "React JS Developer",
		company: "Internsland",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jun 2022 - Present",
		desc: "React.js developers design and implement user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem. These skilled front-end developers are involved in all stages of interface component design, from conception through to final testing.",

	},

];

export const projects = [
	// {
	// 	name: "developer-portfolio",
	// 	desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
	// 	github: "https://github.com/amolrathod145/_skillshop",
	// 	link: "https://github.com/amolrathod145/_skillshop",
	// },
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart.",
		github: "https://github.com/amolrathod145/_skillshop",
		link: "https://github.com/amolrathod145/_skillshop",
	},
	{
		name: "WhatsApp UI",
		desc: "This is a practice project for the WhatsApp UI For pixel perfect.",
		github: "https://github.com/amolrathod145/WhatsappUi_Clone",
	},

	// {
	// 	name: "Shopaza (Ecommerce)",
	// 	desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
	// 	github: "https://github.com/1hanzla100/Django-ecommerce",
	// },
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = false;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Amol Rathod",
	description:
		"A passionate Full Stack Web Developer.",
	author: "Amol Rathod",
	image: "https://drive.google.com/drive/my-drive",
	url: "",
	keywords: [
		"Amol",
		"Amol Rathod",
		// "@1hanzla100",
		// "1hanzla100",
		// "Portfolio",
		// "Hanzla Portfolio ",
		// "Hanzla Tauqeer Portfolio",
	],
}
