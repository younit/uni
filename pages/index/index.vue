<template>
	<view class="container">
    <view class="HomeHeadBanner bgcdf pd8">
      
      <view class="slogn bgcdf fff fz20 ">爱护环境, 人人有责。</view>
      
      <search-box-item></search-box-item>
      
      <swiper 
        :indicator-dots="swiperConfig.indicatorDots" 
        :autoplay="swiperConfig.autoplay" 
        :interval="swiperConfig.interval" 
        :duration="swiperConfig.duration"
        :circular="swiperConfig.circular"
      >
         <swiper-item>
           <view class="swiper-item">111</view>
         </swiper-item>
         <swiper-item>
           <view class="swiper-item">2222</view>
         </swiper-item>
       </swiper>
    </view>
    
    <grid-item 
      :data="ls_home_navs"
      :cols="5"
      :width="50"
    ></grid-item>
    
    <view class="pd8">
      <view v-for="(item,index) in data" :key="index" class="mgb10 pd8 shopCardItem">
        <shop-card-item :data="item" :keys="['img', 'name', 'date', 'address', 'price']"></shop-card-item>
      </view>
    </view>
    
    <under-line-item></under-line-item>
    
	</view>
  
</template>

<script>
  import navMoreItem from '../../components/navMoreItem.vue'
  import searchBoxItem from '../../components/searchBoxItem.vue'
  import gridItem from '../../components/gridItem.vue'
  import shopCardItem from '../../components/shopCardItem.vue'
  import underLineItem from '../../components/underLineItem.vue'
  import { mapGetters } from 'vuex'
  import {
    shopsList
  } from '../../api/api.js'
	export default {
		data() {
			return {
        swiperConfig: {
          indicatorDots: false,
          circular: true,
          autoplay: false,
          interval: 2000,
          duration: 500,
        },
        data: null
			}
		},
    components: {
      navMoreItem,
      searchBoxItem,
      gridItem,
      shopCardItem,
      underLineItem
    },
    /**
     * 监听函数-- 计算属性
     */
    computed: {
      ...mapGetters(['ls_home_navs', 'ls_paras']) //  左侧导航列表
    },
    mounted () {
      this.getshops()
    },
    
		methods: {
      getshops () {
        shopsList().then(res => {
          console.log(res)
          let { code, data, msg, total } = res
          this.data = data
        })
      }
		}
	}
</script>

<style scoped>
.shopCardItem {
  position: relative;
  border-radius: 8px 12px 12px 12px;
  background-color: rgba(255, 255, 255, 100);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
}

</style>
