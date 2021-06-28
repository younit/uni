<template>
  <view class="underLineItem">
    <view class="underLine__line"></view>
    <view class="underLine__name">你快住手啊，我真的没有啦</view>
  </view>
</template>

<script>
  export default {
    name:"underLineItem",
    data() {
      return {
        
      };
    }
  }
</script>

<style scoped>
.underLineItem {
  position: relative;
  margin: 20px;
}
.underLine__line {
  width: 80%;
  height: 1px;
  background-color: #ddd;
  margin: 0 auto;
}
.underLine__name {
  position: absolute;
  font-size: 12px;
  top: 50%;
  margin-top: -10px;
  left: 50%;
  background-color: #fff;
  width: 160px;
  margin-left: -80px;
  text-align: center;
  color: #ddd;
}
</style>
