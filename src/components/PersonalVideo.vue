<template>
  <div
    class="p-wrapper"
    :style="{ 'background-image': 'url(' + backgroundImg + ')' }"
  >
    <!-- <img class="content" src="../assets/banner.jpg" alt="" /> -->
    <div class="avatar-wrapper">
      <!-- <img class="bk" src="../assets/street/avatar.png" alt="" /> -->
      <img class="avatar" src="../assets/banner.jpg" alt="" />
    </div>
    <div class="mask">title tititle tititle title</div>
  </div>
</template>
<script>
export default {
  name: 'PersonalVideo',
  data() {
    return {
      backgroundImg: require('../assets/banner.jpg'),
    }
  },
}
</script>
<style lang="scss" scoped>
.p-wrapper {
  box-sizing: border-box;
  margin-right: 16px;
  border-radius: 14px;
  width: calc(169px - 16px);
  height: 260px;
  overflow: hidden;
  background-position: center;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .avatar-wrapper {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 44px;
    height: 44px;
    .avatar {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 38px;
      height: 38px;
      object-fit: cover;
    }
    .bk {
      width: 100%;
      height: 100%;
    }
  }
  .mask {
    width: 100%;
    height: 50px;
    background-color: rgba(18, 17, 17, 0.45);
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
