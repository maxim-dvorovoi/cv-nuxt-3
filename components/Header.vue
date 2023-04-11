<template>
	<div class="header">
		<input type="checkbox" id="menu-toggle">
		<label for="menu-toggle" class="burger">
			<div class="menu-icon">
				<span></span>
				<span></span>
				<span></span>
			</div>
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
		position: -webkit-sticky;
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

			&:checked ~ .burger .menu-icon {
				span:nth-child(1) {
					top: 6px;
					transform: rotate(45deg);
					-webkit-transform: rotate(45deg);
				}

				span:nth-child(2) {
					opacity: 0;
				}

				span:nth-child(3) {
					top: 6px;
					transform: rotate(-45deg);
					-webkit-transform: rotate(-45deg);
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
				align-items: center;
				width: 35px;
				height: 35px;
				padding: 8px 6px;
				background-color: rgba(255, 255, 255, 0.7);
				backdrop-filter: saturate(180%) blur(10px);
				-webkit-backdrop-filter: saturate(180%) blur(10px);
				border: 1px solid lightgray;
				box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 2px;
				border-radius: 6px;
				box-sizing: border-box;
				position: fixed;
				top: 8px;
				right: 8px;
				cursor: pointer;
				overflow: hidden;
				z-index: 200;

				.menu-icon {
					margin: 20px auto;
					width: 20px;
					height: 14px;
					cursor: pointer;
					position: relative;

					span {
						background-color: black;
						height: 2px;
						position: absolute;
						width: 100%;
						left: 0;
						transition: 0.3s ease;

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