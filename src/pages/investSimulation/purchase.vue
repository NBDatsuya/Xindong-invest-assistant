<script setup lang="ts">
const done = ()=>{
    uni.navigateTo({url:'/pages/investSimulation/done'})
}
</script>

<template>

    <view class='content'>
        <view class='text-area'>
            <text class='title' color="$uni-color-primary">已选的产品列表</text>
        </view>
        
    </view>
    <button size="mini" type="default" 
	style="color:#ffffff;backgroundColor:#FF0000;borderColor:#179b16" 
	hover-class="is-hover"
    @click="done">提交</button>
</template>

<style scoped>

</style>