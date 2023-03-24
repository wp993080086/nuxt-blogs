<template>
	<div id="home_box">
		<!-- <div class="content">
      <p class="slogan">日拱一卒无有尽 功不唐捐终入海</p>
    </div> -->
		<div class="video_box">
			<video class="video_pc" controlsList="nodownload" autoplay loop muted="true">
				<source src="~/static/video/bg_gif1.mp4" type="video/mp4" />
			</video>
			<div class="shadow"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
#home_box {
	position: relative;
	width: 100%;
	height: 100%;
	.content {
		padding-top: 365px;
		width: 100%;
		height: 100%;
		background-image: url('@/static/images/bg1.png');
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		.slogan {
			text-align: center;
			font-size: 32px;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: 700;
			color: #ffffff;
			justify-content: center;
			text-shadow: 0 3px 6px rgba(17, 65, 96, 0.8);
		}
	}
	.video_box {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		// background-color: #030303;
		.video_pc {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.shadow {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
}
</style>
