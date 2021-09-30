<style lang="scss" scoped>
.home::v-deep {
  .van-swipe-item {
    background-color: red;
  }
}
</style>
<template>
  <div class="home">
    <van-swipe class="my-swipe" width="169" height="260">
      <van-swipe-item><PersonalVideo /></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalVideo from '@/components/PersonalVideo.vue';

export default {
  name: 'Home',
  components: {
    PersonalVideo,
  },
};
</script>
