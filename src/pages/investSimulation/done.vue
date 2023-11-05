<script setup lang="ts">
const possessionIndex = ()=>{
    uni.navigateTo({url:'/pages/possession/index'})
}
</script>

<template>

    <view class='content'>
        <view class='text-area'>
            <text class='title' color="$uni-color-primary">可以前往模拟持仓界面查看模拟购买的理财产品\n购买产品24小时后可查看产品受益预测</text>
        </view>
        
    </view>
    <button size="default" type="default" 
	style="color:#ffffff;backgroundColor:#179b16;borderColor:#179b16" 
	hover-class="is-hover"
    @click="possessionIndex">点击查看模拟持仓</button>
</template>

<style scoped>

</style>