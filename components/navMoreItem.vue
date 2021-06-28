<template>
  <view>
    <view class="nav_items ds ds_btw pd8">
      <view class="nav_items_title">
        {{ paras.title }}
      </view>
      <view class="nav_items_more">
        更多 >
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"navMoreItem",
    data() {
      return {
        
      };
    },
    props: {
      paras: Object
    }
  }
</script>

<style scoped>
.nav_items {
  line-height: 2rem;
}
</style>
