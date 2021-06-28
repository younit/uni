<template>
  <view class="">
    <cover-image :src="keys[0]? data[keys[0]]: null" class="shopCardItem__img"></cover-image>
    <view class="shopCardItem__name fz16">{{ keys[1]?data[keys[1]]: null }}</view>
    <view class="shopCardItem__date fz13">可提货时间: 周末</view>
    <view class="shopCardItem__address fz13">提货地址: 11号楼303</view>
    <view class="ds ds_btw shopCardItem__priceBox">
      <view class="ds">
        <view class="shopCardItem__priceIcon fz16">￥</view>
        <view class="shopCardItem__price fz20">{{ keys[4]?data[keys[4]]: null }}</view>
      </view>
      <view class="shopCardItem__contact">预订宝贝</view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"shopCardItem",
    props: {
      data: Object,
      keys:Array
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style scoped>

.shopCardItem__img {
  width: 100%;
  height: 164px;
  border-radius: 4px;
}
.shopCardItem__name {
  color: rgba(16, 16, 16, 100);
  font-family: PingFangSC-bold;
  line-height: 36px;
}
.shopCardItem__address {
  line-height: 27px;
}
.shopCardItem__priceBox {
  margin: 10px 0;
}
.shopCardItem__price,  .shopCardItem__priceIcon{
  color: rgba(236, 13, 13, 100);
}
.shopCardItem__contact {
  border-radius: 32px;
  background-color: rgba(236, 13, 13, 100);
  color: rgba(250, 250, 250, 100);
  font-size: 12px;
  text-align: center;
  font-family: PingFang SC;
  padding: 5px 18px;
}
</style>
