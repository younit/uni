<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  * {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
  .ds {
    display: flex;
  }
  .ds_btw {
    justify-content: space-between;
  }
  .txt_c {
    text-align: center;
  }
  .txt_l {
    text-align: left;
  }
  .txt_r {
    text-align: right;
  }
  .bd1 {
    border: 1px solid #f1f1f1;
  }
  .pd8 {
    padding: 8px;
  }
  .mgb8 {
    margin-bottom: 8px;
  }
  .mgb10 {
    margin-bottom: 10px;
  }
  .bgfff {
    background-color: #fff;
  }
  .bgcdf {
    background-color: #D93025;
  }
  .fff {
    color: #fff;
  }
  .fz13 {
    font-size: 13px;
  }
  .fz14 {
    font-size: 14px;
  }
  .fz16 {
    font-size: 16px;
  }
  .fz18 {
    font-size: 18px;
  }
  .fz20 {
    font-size: 20px;
  }
</style>
