<template>
	<div class="header">
		<input type="checkbox" id="menu-toggle">
		<label for="menu-toggle" class="burger">
			<div></div>
			<div></div>
			<div></div>
		</label>

		<ul class="menu">
			<li><span @click="scrollToElementById('profile-section')">Profile</span></li>
			<li><span @click="scrollToElementById('skills-section')">Skills</span></li>
			<li><span @click="scrollToElementById('experience-section')">Experience</span></li>
			<li><span @click="scrollToElementById('education-section')">Education</span></li>
			<li><span @click="scrollToElementById('projects-section')">Projects</span></li>
		</ul>
	</div>
</template>

<script setup>
function scrollToElementById(id) {
	let element = document.getElementById(id);
	if (!element) return;

	window.scrollTo({
		top: element.offsetTop,
		left: 0,
		behavior: "smooth"
	});
}
</script>

<style lang="scss" scoped>
	.header {
		position: sticky;
		top: 0;
		height: 40px;
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid lightgray;
		line-height: 40px;
		text-align: end;
		background-color: white;
		z-index: 100;

		.menu {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin: 0;
			padding: 0;

			li {
				list-style: none;
				padding: 0 15px;

				span {
					color: black;
					text-decoration: none;
					cursor: pointer;
					transition: opacity .3s;
					font-weight: 500;

					&:hover {
						opacity: .7;
					}
				}
			}
		}

		.burger {
			display: none;
		}

		#menu-toggle {
			display: none;

			&:checked ~ .menu {
				transform: scale(1, 1);
			}

			&:checked ~ .burger {
				div:nth-child(1) {
					transform: rotate(135deg) translateY(-3.5px) translateX(3.5px);
					-webkit-transform: rotate(135deg) translateY(-3.5px) translateX(3.5px);
				}

				div:nth-child(2) {
					opacity: 0;
				}

				div:nth-child(3) {
					transform: rotate(-135deg) translateY(3.5px) translateX(3.5px);
					-webkit-transform: rotate(-135deg) translateY(3.5px) translateX(3.5px);
				}
			}
		}
	}

	@media (max-width: 950px) {
		.header {
			position: fixed;
			width: 100%;
			border: unset;
			background-color: transparent;

			.burger {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				width: 30px;
				height: 30px;
				padding: 8px 6px;
				background-color: white;
				border: 1px solid lightgray;
				box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 2px;
				border-radius: 4px;
				box-sizing: border-box;
				position: fixed;
				top: 8px;
				right: 8px;
				cursor: pointer;
				overflow: hidden;
				z-index: 200;

				div {
					width: 16px;
					height: 2px;
					background-color: black;
					border-radius: 4px;
					opacity: 1;
					left: 0;
					transform: rotate(0deg);
					transition: .25s ease-in-out;

					&:hover {
						opacity: 1;
					}

					&:nth-child(1) {
						top: 0;
					}

					&:nth-child(2) {
						top: 6px;
					}

					&:nth-child(3) {
						top: 12px;
					}
				}
			}

			.menu {
				flex-direction: column;
				align-items: start;
				justify-content: center;
				background-color: white;
				padding-top: 40px;
				width: 100%;
				transform: scale(1, 0);
				transform-origin: top;
				transition: transform 0.3s ease-in-out;
				box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

				a {
					margin-left: 12px;
				}

				li {
					margin-bottom: 10px;
				}
			}
		}
	}
</style>