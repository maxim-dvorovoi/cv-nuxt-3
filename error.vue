<template>
	<div class="container">
		<h1>{{ props.error.statusCode }}</h1>
		<h2>{{ props.error.message }}</h2>
		<button @click="handleError">Go home</button>
	</div>
</template>

<script setup>
	const props = defineProps({
		error: Object
	});

	const handleError = () => clearError({ redirect: '/' });
</script>


<style lang="scss" scoped>
	.container {
		margin: 70px 0;
		padding: 0 20px;
		text-align: center;

		h1 {
			font-size: 180px;
			font-weight: 300;
			line-height: 180px;
			margin: 30px 0;
		}

		h2 {
			font-weight: 500;
		}

		button {
			margin-top: 20px;
			cursor: pointer;
			background-color: #333;
			color: white;
			border: 1px solid black;
			font-size: 18px;
			padding: 12px 30px;
			border-radius: 8px;
			transition: background-color .3s, color .3s, opacity .3s;

			&:hover {
				background-color: white;
				color: black;
				opacity: 1;
			}
		}
	}
</style>