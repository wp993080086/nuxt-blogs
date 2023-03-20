<template>
	<div id="home_box">
    <div class="content">
      <p class="slogan">日拱一卒无有尽 功不唐捐终入海</p>
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
}
</style>
