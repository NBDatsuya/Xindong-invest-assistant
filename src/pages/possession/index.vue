<!-- <script setup lang="ts">

</script>

<template>

</template>

<style scoped>

</style> -->
<template>
    <view >
        <uni-table border stripe emptyText="暂无更多数据">
            <uni-tr>
                <uni-th>股票名称</uni-th>
                <uni-th>股票代码</uni-th>
                <uni-th>持有数量</uni-th>
                <uni-th>购入价格</uni-th>
                <uni-th>市值</uni-th>
            </uni-tr>
            <uni-tr v-for="position in positions" :key="position.id" class="table-row">
                <uni-td>{{ position.stockName }}</uni-td>
                <uni-td>{{ position.stockCode }}</uni-td>
                <uni-td>{{ position.quantity }}</uni-td>
                <uni-td>{{ position.purchasePrice }}</uni-td>
                <uni-td>{{ position.quantity * position.purchasePrice }}</uni-td>
            </uni-tr>
        </uni-table>
    </view>
</template>

<script>
export default {
    data() {
        return {
            positions: [
                {
                    id: 1,
                    stockName: "股票A",
                    stockCode: "AAA",
                    quantity: 100,
                    purchasePrice: 50,
                },
                {
                    id: 2,
                    stockName: "股票B",
                    stockCode: "BBB",
                    quantity: 75,
                    purchasePrice: 60,
                },
            ],
        };
    },
};
</script>

<style scoped>

.portfolio-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
}

.portfolio-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table-row:hover {
    background-color: #f5f5f5;
    transition: background-color 0.2s;
}

.portfolio-table uni-th,
.portfolio-table uni-td {
    border: 1px solid #ddd;
    padding: 12px;
}

.portfolio-table uni-th {
    background-color: #f2f2f2;
    font-weight: bold;
}
</style>

  