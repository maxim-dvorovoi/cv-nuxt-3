<template>
	<div class="main">
		<div class="banner">
			<div class="name-block">
				<h2>Hi, I'm</h2>
				<h1>
					Maxim
					<br>
					Dvorovoi
				</h1>
				<h2>Web developer</h2>
			</div>
		</div>

		<div class="container">
			<Header/>
			<section :id="profile.id">
				<h3>Profile</h3>
				<h2>{{ profile.h2 }}</h2>
				<h4>{{ profile.h4 }}</h4>
				<hr>
				<div class="info-list">
					<div v-for="item in profile.infoList"><span>{{ item.key }} : </span>{{ item.value }}</div>
				</div>
				<div class="email">
					<a :href="'mailto:' + profile.email">{{ profile.email }}</a>
				</div>
			</section>
			<section :id="skills.id">
				<h3>Skills</h3>
				<div class="skills-list">
					<div v-for="skill in skills.list">
						<div class="progress-label">
							<span>{{ skill.name }} - {{ skill.years }}</span>
							years experience
						</div>
						<div class="progress">
							<div class="progress-bar" :style="'width: ' + skill.level + '%'">
								<span>{{ skill.level }}%</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section :id="experience.id">
				<h3>Experience</h3>
				<div class="timeline experience">
					<div class="trophy sticky">
						<i class="fa-solid fa-trophy"></i>
					</div>
					<div class="row">
						<div class="exp-holder">
							<div v-for="item in experience.list" class="exp">
								<div class="hgroup">
									<h4>
										{{ item.position }} @
										<a
											:href="item.companyLink || '#'"
											target="_blank"
											rel="noreferrer noopener"
										>{{ item.companyName }}</a>
									</h4>
									<h5>{{ item.from }} - {{ item.to }}</h5>
								</div>
								<p>{{ item.description }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section :id="education.id">
				<h3>Education</h3>
				<div class="timeline experience">
					<div class="award sticky">
						<i class="fa-solid fa-award"></i>
					</div>
					<div class="row">
						<div class="exp-holder">
							<div v-for="item in education.list" class="exp">
								<div class="hgroup">
									<h4>
										{{ item.position }} @
										<a
												:href="item.companyLink || '#'"
												target="_blank"
												rel="noreferrer noopener"
										>{{ item.companyName }}</a>
									</h4>
									<h5>{{ item.from }} - {{ item.to }}</h5>
								</div>
								<p>{{ item.description }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section :id="projects.id">
				<h3>Projects</h3>
				<div class="projects">
					<div v-for="item in projects.list">
						<a :href="item.link" target="_blank" rel="noreferrer noopener">
							<img v-if="item.key === 'trustburn'" src="/trustburn-min.png">
							<img v-if="item.key === 'worldfamous'" src="/worldfamous-me-min.png">
							<img v-if="item.key === 'gcadvert'" src="/gcadvert-com-min.png">
							<img v-if="item.key === 'wedding'" src="/wedding-min.jpg">
							<img v-if="item.key === 'dont-touch-the-blocks'" src="/dont-touch-the-blocks-min.png">
							<img v-if="item.key === 'calculator'" src="/calculator-min.png">
						</a>
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</section>
			<section :id="socialMedia.id">
				<h3>Social media</h3>
				<div class="social">
					<a
						v-for="item in socialMedia.list"
						:href="item.link"
						target="_blank"
						rel="noreferrer noopener"
						:class="item.className"
					>
						<i :class="'fa-brands fa-' + item.icon"></i>
						<span>{{ item.name }}</span>
					</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
const profile = {
	id: 'profile-section',
	h2: 'I\'m a Full Stack Web Developer from Kyiv, UA. I aim to make a functional applications with clean code.',
	h4: 'Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Also worked with VueJS, NuxtJS framework, Leaflet and Highcharts as front-end developer. As a back-end developer, I have acted with PHP, MySQL, ElasticSearch, Nginx, Node.js, MongoDB, Docker, Facebook API, Jira API and various Google API.',
	email: 'maksym.dvorovoi@gmail.com',
	infoList: [
		{ key: 'Name', value: 'Maxim Dvorovoi' },
		{ key: 'Date of birth', value: 'May 15, 1996' },
		{ key: 'Address', value: 'Kyiv, Ukraine' },
		{ key: 'Phone', value: '+38 095 063 01 79' },
		{ key: 'Skype', value: 'maxwell3235' },
		{ key: 'Interest', value: 'full-time, freelance' },
	]
};

const skills = {
	id: 'skills-section',
	list: [
		{ name: 'PHP', years: 4, level: 90 },
		{ name: 'JavaScript', years: 4, level: 90 },
		{ name: 'MySQL', years: 4, level: 90 },
		{ name: 'VueJS', years: 4, level: 85 },
		{ name: 'NuxtJS', years: 3, level: 85 },
		{ name: 'ElasticSearch', years: 3, level: 80 },
		{ name: 'MongoDB', years: 2, level: 70 },
		{ name: 'Nginx', years: 3, level: 70 },
	]
};

const experience = {
	id: 'experience-section',
	list: [
		{
			position: 'Full-Stack developer',
			companyName: 'Semalt',
			companyLink: 'https://semalt.com/',
			description: 'Semalt is a team of creative, talented, proactive, and motivated experts, who have brought many successful IT projects to life. We have been honing our skills for ten years now, so we can say without a doubt that each of us is a true master of our craft. By our joint effort, we have created one of the most original and innovative web services that we proudly present to you now.',
			from: 'Sep 2018',
			to: 'Present',
		},
		{
			position: 'Junior PHP developer',
			companyName: 'PHP Academy',
			companyLink: 'https://php-academy.kiev.ua/',
			description: 'PHP Academy is the №1 web programming school in Ukraine. Provide courses with the documentary guarantee of the internship specified in the contract.',
			from: 'Jan 2018',
			to: 'Sep 2018',
		},
	]
};

const education = {
	id: 'education-section',
	list: [
		{
			position: 'Junior Web Developer',
			companyName: 'PHP Academy',
			companyLink: 'https://php-academy.kiev.ua/',
			description: 'PHP Academy is the №1 web programming school in Ukraine. Provide courses with the documentary guarantee of the internship specified in the contract.',
			from: '2017',
			to: '2018',
		},
		{
			position: 'IT Specialist',
			companyName: 'State University of Telecommunications',
			companyLink: 'http://foreign.dut.edu.ua/',
			description: 'Learning in specialized classrooms and laboratories equipped with the latest devices from the leading companies HP, Alcatel-Lucent, D-Link, Huawei, ZTE, Ericsson, IBM, Watson Telecom. The State University of Telecommunications open academy CISCO, within which the Linux Professional Institute, the only certified in Ukraine Academy of Hewlett Packard, held courses in-depth study of technical English in areas of IT.',
			from: '2014',
			to: '2018',
		},
		{
			position: 'Junior IT Specialist',
			companyName: 'Kiev College of Communication',
			companyLink: 'https://sites.google.com/view/kkz',
			description: 'Was founded in 1921 by the International Committee of Education of Ukraine. For its 90 - year history, the college has trained more than 72,000 IT specialists and about 1,200 specialists of the foreign students department. Throughout its history the college has improved pedagogical skills of the teachers, introduced new technology training, accumulated education potential, improved the material and technical base.',
			from: '2011',
			to: '2014',
		},
	]
};

const projects = {
	id: 'projects-section',
	list: [
		{
			key: 'trustburn',
			name: 'TRUSTBURN',
			link: 'https://trustburn.com/',
			description: 'Read, write and share reviews on Trustburn today.'
		},
		{
			key: 'worldfamous',
			name: 'WORLD FAMOUS ME',
			link: 'https://worldfamous.me/',
			description: 'World Famous: Promote Yourself to Become Known Online.'
		},
		{
			key: 'gcadvert',
			name: 'GOOGLE CALENDAR ADVERTISING',
			link: 'https://gcadvert.com/',
			description: 'Send google calendar advertising to emails'
		},
		{
			key: 'wedding',
			name: 'WEDDING',
			link: 'https://maxim-dvorovoi.github.io/wedding/',
			description: 'Wedding website created on Vue JS. (Vue CLI)'
		},
		{
			key: 'dont-touch-the-blocks',
			name: 'DONT TOUCH THE BLOCKS',
			link: 'https://maxim-dvorovoi.github.io/dont-touch-the-blocks/',
			description: 'This game is a simple variation Flappy Bird. I have used object-oriented programming and functional programming, to learn how it works.'
		},
		{
			key: 'calculator',
			name: 'CALCULATOR',
			link: 'https://maxim-dvorovoi.github.io/calculator/',
			description: 'This project is created on Vue JS. Its a simple calculator.'
		},
	]
};

const socialMedia = {
	id: 'social-section',
	list: [
		{
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/maxim_dvorovoi',
			className: 'instagram-btn'
		},
		{
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/maxim.dvorovoy',
			className: 'facebook-btn'
		},
		{
			name: 'Linkedin',
			icon: 'linkedin-in',
			link: 'https://www.linkedin.com/in/maxim-dvorovoi',
			className: 'linkedin-btn'
		},
		{
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/maxim-dvorovoi',
			className: 'github-btn'
		},
	]
};
</script>

<style lang="scss" scoped>
	hr {
		border: none;
		color: lightgray;
		background-color: lightgray;
		height: 1px;
	}

	a {
		text-decoration: none;
		transition: .3s;

		&:hover {
			opacity: .7;
		}
	}

	.banner {
		position: fixed;
		background: url(/me-min.jpg);
		background-size: cover;
		background-position-x: 20%;
		height: 100vh;
		width: 25%;
		top: 0;
		right: 65%;
		line-height: 70;

		.name-block {
			position: absolute;
			top: 15%;
			padding: 20px;
			text-shadow: 0 0 30px black;

			h1 {
				color: white;
				font-weight: 600;
				font-size: 43px;
				line-height: 55px;
				letter-spacing: 2px;
				margin: 0;
			}

			h2 {
				color: white;
				font-weight: 300;
				font-size: 30px;
				line-height: 55px;
				margin: 0;
			}
		}
	}

	.container {
		position: absolute;
		width: 55%;
		min-height: 100vh;
		top: 0;
		right: 0;
		box-sizing: border-box;

		section {
			margin-bottom: 50px;
			padding: 0 40px;

			h2 {
				color: #333;
				font-weight: 300;
				font-size: 30px;
				margin: 35px 0;
				line-height: 50px;
			}

			h3 {
				background-color: white;
				color: #333;
				font-size: 24px;
				font-weight: 700;
				text-transform: uppercase;
				margin: 0 0 30px;
				padding: 50px 0 15px;
				border-bottom: 1px solid #ddd;
			}

			h4 {
				color: #727272;
				font-weight: 400;
				line-height: 2;
			}
		}
	}

	.info-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 15px;

		div {
			width: 50%;
			padding: 10px 0;
			font-weight: 300;

			span {
				font-weight: 500;
			}
		}
	}

	.progress-label {
		font-weight: 300;
		padding: 15px 0;

		span {
			font-weight: 500;
		}
	}

	.progress {
		height: 2px;
		margin-bottom: 20px;
		background-color: #ddd;
		border-radius: 0;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		overflow: visible;
		width: 90%;

		.progress-bar {
			height: 2px;
			line-height: 8px;
			background-color: #666;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
			position: relative;

			span {
				display: block;
				width: 40px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: #000;
				background-color: #F1F3F6;
				font-weight: 500;
				position: absolute;
				top: -16px;
				right: -20px;
				font-size: 13px;
				transition: .3s;

				&:hover {
					-webkit-box-shadow: inset 0px 0px 0px 1px #666;
					-moz-box-shadow: inset 0px 0px 0px 1px #666;
					box-shadow: inset 0px 0px 0px 1px #666;
					transform: scale(1.05);
				}
			}
		}
	}

	.timeline {
		position: relative;

		&:before {
			background-color: #ddd;
			bottom: 0;
			content: "";
			left: 18px;
			position: absolute;
			top: 50px;
			width: 1px;
			height: 80%;
		}

		&:after {
			top: 0;
			left: -5px;
			width: 50px;
			height: 50px;
			position: absolute;
			text-align: center;
			color: #ddd;
			font-size: 36px;
			line-height: 45px;
		}
	}

	.row {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	.exp-holder {
		margin-top: 50px;
	}

	.exp {
		padding: 20px 20px 0 80px;
		position: relative;

		&:after {
			background-color: #FFF;
			border: 2px solid #ddd;
			border-radius: 50%;
			content: "";
			height: 20px;
			left: 22px;
			position: absolute;
			text-align: center;
			top: 24px;
			width: 20px;
		}

		.hgroup {
			display: flex;
			justify-content: space-between;
			margin-bottom: 5px;

			h4, h5 {
				text-transform: none;
				margin: 0;
			}

			h4 a {
				font-weight: 500;
				color: #727272;
			}

			h5 {
				font-size: 14px;
				font-weight: 400;
				text-align: right;
				color: #727272;
				padding-left: 10px;
				position: relative;
				line-height: 2.5;
			}
		}
	}

	.trophy {
		position: absolute;
		font-size: 26px;
		color: gold;
		margin-left: 4px;
		z-index: 50;
	}

	.award {
		position: absolute;
		font-size: 26px;
		color: orange;
		margin-left: 9px;
		z-index: 50;

		i {
			background-color: white;
		}
	}

	.projects {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		div {
			width: 45%;
			margin-bottom: 60px;

			img {
				object-fit: cover;
				width: 100%;
				height: 235px;
				transition: .3s;
				cursor: pointer;
			}

			h4 {
				color: #414141;
				text-transform: uppercase;
				font-weight: 500;
				letter-spacing: 1.2px;
				text-align: center;
				font-size: 18px;
				margin: 15px 0;
			}

			p {
				text-align: center;
			}
		}
	}

	.social {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		font-size: 20px;

		a {
			display: flex;
			align-items: center;
			color: white;
			padding: 7px 12px;
			border-radius: 7px;
			margin: 5px;

			i {
				font-size: 20px;
				margin-right: 10px;
			}

			span {
				font-size: 16px;
				font-weight: 500;
			}

			&.instagram-btn {
				background-color: #f42d7f;
			}

			&.facebook-btn {
				background-color: #4267b2;
			}

			&.linkedin-btn {
				background-color: #0077B5;
			}

			&.github-btn {
				background-color: #161415;
			}
		}
	}

	.email {
		position: relative;
		margin: 30px 0 20px;
		text-align: center;

		&:before {
			position: absolute;
			left: 0;
			top: 12px;
			content: '';
			border-top: 1px solid #ddd;
			width: 100%;
		}

		a {
			position: relative;
			padding: 7px 15px;
			background-color: #333;
			color: white;
			border-radius: 7px;
			border: 1px solid black;
			cursor: pointer;

			&:hover {
				background-color: white;
				color: black;
				opacity: 1;
			}
		}
	}

	.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 45px;
	}

	@media (max-width: 1280px) {
		.banner {
			right: unset;
			width: 40%;
		}

		.container {
			width: 60%;

			section {
				h2 {
					font-size: 26px;
					line-height: 1.7;
				}
			}
		}

		.progress {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.banner {
			position: static;
			height: 100%;
			width: 100%;
			line-height: normal;
			background-position-y: 70%;

			.name-block {
				position: static;
				padding: 50px 20px 300px 20px;

				h1 {
					font-size: 35px;
					line-height: 50px;
				}

				h2 {
					font-size: 28px;
					line-height: 1.3;
				}
			}
		}

		.container {
			position: static;
			width: 100%;

			section {
				padding: 0 20px;
			}
		}
	}

	@media (max-width: 500px) {
		.banner {
			height: 100vh;

			.name-block {
				padding: 15vh 15px 0;
			}
		}

		.info-list {
			div {
				width: 100%;
			}
		}

		.projects {
			display: block;

			div {
				width: 100%;
				margin-top: 70px;
			}
		}

		.exp {
			padding: 20px 20px 0 65px;
		}
	}
</style>