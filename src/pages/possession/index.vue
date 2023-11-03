<!-- <script setup lang="ts">

</script>

<template>

</template>

<style scoped>

</style> -->
<template>
  <div class="portfolio">
    <h1 class="portfolio-title">我的持仓</h1>
    <table class="portfolio-table">
      <thead>
        <tr>
          <th>股票名称</th>
          <th>股票代码</th>
          <th>持有数量</th>
          <th>购入价格</th>
          <th>市值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="position in positions" :key="position.id" class="table-row">
          <td>{{ position.stockName }}</td>
          <td>{{ position.stockCode }}</td>
          <td>{{ position.quantity }}</td>
          <td>{{ position.purchasePrice }}</td>
          <td>{{ position.quantity * position.purchasePrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
.portfolio {
  text-align: center;
  padding: 20px;
}

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

.portfolio-table th,
.portfolio-table td {
  border: 1px solid #ddd;
  padding: 12px;
}

.portfolio-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>

  