<template>
    <view class="content">
        <uni-card class="text-area">
            <text class="title" color="$uni-color-primary">欢迎使用信东智能投顾\n</text>
            <text class="title" color="$uni-color-primary">爱东，信东，等东</text>
        </uni-card>
    </view>
</template>

<script setup lang="ts">
uni.request({
  url: '/api/product/sortByComprehensive',
  method: 'GET',
  success: (res: AnyObject) => {
    console.log(res.data)
    if (res.data['code'] === 200) {
      // 从响应中获取数据
      let financialProducts
          = res.data['data'];
      console.log(financialProducts)
    } else {
      // 处理请求失败的情况
    }
  },
  fail: (err) => {
    // 处理请求失败的情况
  }
});
</script>

<style>
.title {
    text-align: center;
}
</style>
