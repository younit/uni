<template>
 <view class="ds ds_btw gridBox">
    <view class="txt_c" :style="{width: cols? (100 / cols) + '%': '25%'}" v-for="item in data" :key="item.key">
      <cover-image class="grid_item_pic" :style="{width: width? width + 'px': '60px', height:width? width + 'px': '60px'}" v-if="item.pic"  :src="item.pic"></cover-image>
      <view class="grid_item_name">
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"gridItem",
    props: {
      data: Array,
      cols: Number,
      width: Number,
    },
    data() {
      return {
        
      };
    },
  }
</script>

<style scoped>
.gridBox {
  flex-wrap: wrap;
}
.grid_item_pic {
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 8px;
}
.grid_item_name {
  line-height: 3rem;
}
</style>
