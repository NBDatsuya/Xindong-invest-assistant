<script setup lang="ts">
import {ref} from "vue";

const tradeRecordList = ref([{
    product: {
        name: "产品1"
    },
    count:2,
    price:1918.81,
    income: 1145.14,
    cost: 1919.81,
    dealTime: '2023/10/11 8:43:00'
}])
</script>

<template>
    <view >
        <uni-table border stripe emptyText="暂无更多数据">
            <!-- 表头行 -->
            <uni-tr>
                <uni-th align="center" width="100">产品名</uni-th>
                <uni-th align="center" width="110">盈亏</uni-th>
                <uni-th align="center" width="55">成本</uni-th>
                <uni-th align="center" width="55">现价</uni-th>
                <uni-th align="center" width="120">购买时间</uni-th>
            </uni-tr>
            <!-- 表格数据行 -->
            <uni-tr v-for="(item,index) in tradeRecordList">
                <uni-td align="center">{{item.product.name}}</uni-td>
                <uni-td align="center">
                    <p>￥{{ ((item.income - item.cost) * item.count).toFixed(2) }}</p>
                    <p>{{ ((item.income - item.cost) / item.price).toFixed(2) }}%</p>
                </uni-td>
                <uni-td align="center">{{item.cost}}</uni-td>
                <uni-td align="center">{{item.price}}</uni-td>
                <uni-td align="center">{{item.dealTime}}</uni-td>
            </uni-tr>
        </uni-table>
    </view>
</template>

<style scoped>

</style>